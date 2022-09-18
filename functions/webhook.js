const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
let shippo = require("shippo")(
  "shippo_test_a61fae7e8405d269c6655838013faf23c970718b"
);
const axios = require("axios");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async ({ body, headers }) => {
  const endpoint =
    "whsec_08f36af4fdd99c21014f79f486299e4b8d7018b8643bd407f8600268941ae0e8";
  const stripeEvent = stripe.webhooks.constructEvent(
    body,
    headers["stripe-signature"],
    endpoint
  );

  console.log("hello");

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

    // const msg = {
    //   to: "designworld132@gmail.com", // Change to your recipient
    //   from: "EricaMeldrum@playmoremama.com", // Change to your verified sender
    //   subject: "Sending with SendGrid is Fun",
    //   text: "and easy to do anywhere, even with Node.js",
    //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    // };
    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     console.log("Email sent");
    //   })
    //   .catch((error) => {
    //     console.error(error.response.body);
    //   });

    sgMail
      .send({
        to: {
          email: customerEmail,
          name: customerName,
        },
        from: {
          email: "EricaMeldrum@playmoremama.com",
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
    // const createOrder = await axios.post(
    //   "https://api.goshippo.com/orders/",
    //   {
    //     to_address: {
    //       city: customerAddress.city,
    //       country: customerAddress.country,
    //       email: customerEmail,
    //       name: customerName,
    //       state: customerAddress.state,
    //       street1: customerAddress.line1,
    //       zip: customerAddress.postal_code,
    //     },
    //     line_items: shippoLineItems,
    //     placed_at: new Date().toISOString(),
    //     weight: "0.40",
    //     weight_unit: "lb",
    //   },
    //   {
    //     headers: {
    //       Authorization:
    //         "ShippoToken shippo_test_a61fae7e8405d269c6655838013faf23c970718b",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // console.log(createOrder);
  }
  return {
    statusCode: 200,
    body: "hello",
  };

  // var addressFrom = {
  //   name: "Erica",
  //   company: "play.more.mama",
  //   street1: "P.O. BOX 3282",
  //   city: "Monterey",
  //   state: "CA",
  //   zip: "93942",
  //   country: "US",
  //   email: "playmoremama@gmail.com",
  // };

  // var addressTo = {
  //   name: customerName,
  //   street1: customerAddress.line1,
  //   city: customerAddress.city,
  //   state: customerAddress.state,
  //   zip: customerAddress.postal_code,
  //   country: customerAddress.country,
  //   email: customerEmail,
  // };

  // var parcel = {
  //   name: "Flat Rate Envelope",
  //   token: "USPS_FlatRateEnvelope",
  // };
  // var parcel = {
  //   length: "5",
  //   width: "5",
  //   height: "5",
  //   distance_unit: "in",
  //   weight: "2",
  //   mass_unit: "lb",
  // };

  // var shipment = {
  //   address_from: addressFrom,
  //   address_to: addressTo,
  //   parcels: [parcel],
  // };

  // shippo.transaction.create(
  //   {
  //     shipment: shipment,
  //     carrier_account: "d589ff7cdeda42cfac523f4cbbe4b4e3",
  //     servicelevel_token: "usps_priority",
  //   },
  //   function (err, transaction) {
  //     console.log(transaction);
  //   }
  // );
};

// const msg = {
//   to: "designworld132@gmail.com", // Change to your recipient
//   from: "EricaMeldrum@playmoremama.com", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error.response.body);
//   });
