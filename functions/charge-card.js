const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  const { cart, total } = JSON.parse(event.body);

  const lineItems = cart.map((product) => ({
    price_data: {
      tax_behavior: "exclusive",
      currency: "usd",
      product_data: {
        name: `${product.name} (${product.id})`,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
    allow_promotion_codes: true,
    shipping_options: [
      {
        shipping_rate_data: {
          tax_behavior: "exclusive",
          type: "fixed_amount",
          fixed_amount: {
            amount: total >= 50 ? 0 : 5.99 * 100,
            currency: "usd",
          },
          display_name:
            total >= 50
              ? "Free shipping for order over $50"
              : "Shipping with USPS under $50",
        },
      },
    ],
    automatic_tax: { enabled: true },
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.URL}/success/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.URL}/failed/`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      id: session.id,
    }),
  };
};
