const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const axios = require("axios");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async ({ body, headers }) => {
  const stripeEvent = stripe.webhooks.constructEvent(
    body,
    headers["stripe-signature"],
    process.env.STRIPE_WEBHOOK_SECRET
  );

  if (stripeEvent.type === "checkout.session.completed") {
    console.log("complete");
    // Retrieving Session
    const session = await stripe.checkout.sessions.retrieve(
      stripeEvent.data.object.id,
      {
        expand: ["line_items"],
      }
    );

    // Destructing For Email Links
    let emailLinks = session.line_items.data.map((item) => {
      return {
        id: item.description.substring(
          item.description.indexOf("(") + 1,
          item.description.length - 1
        ),
        name: item.description.substring(0, item.description.indexOf("(") - 1),
      };
    });

    // Creating Email links String
    let tempString = "";
    emailLinks.map((item) => {
      tempString += `${item.name} : ${process.env.URL}/review/${item.id}<br>`;
      return null;
    });

    // Shippo Line Items Data Model
    let shippoLineItems = session.line_items.data.map((item) => {
      return {
        quantity: item.quantity,
        sku: item.id,
        title: item.description,
        total_price: item.amount_total / 100,
        currency: "USD",
        weight: "0.40",
        weight_unit: "lb",
      };
    });

    const response = stripeEvent.data.object.customer_details;
    const customerName = response.name;
    const customerEmail = response.email;
    const customerAddress = response.address;

    sgMail
      .send({
        to: {
          email: customerEmail,
          name: customerName,
        },
        from: {
          email: "ericameldrum@playmoremama.com",
          name: "Erica Meldrum",
        },
        replyTo: {
          email: "erica@playmoremama.com",
          name: "Erica Meldrum",
        },
        templateId: "d-2bb0d235b20d4ea5b862dbf5e9128ead",
        dynamicTemplateData: {
          name: customerName,
          links: tempString,
        },
      })
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error.response.body);
      });
    const createOrder = await axios.post(
      "https://api.goshippo.com/orders/",
      {
        to_address: {
          city: customerAddress.city,
          country: customerAddress.country,
          email: customerEmail,
          name: customerName,
          state: customerAddress.state,
          street1: customerAddress.line1,
          zip: customerAddress.postal_code,
        },
        line_items: shippoLineItems,
        placed_at: new Date().toISOString(),
        weight: "0.00",
        weight_unit: "lb",
      },
      {
        headers: {
          Authorization: `ShippoToken ${process.env.SHIPPO_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  }
  return {
    statusCode: 200,
    body: "hello",
  };
};
