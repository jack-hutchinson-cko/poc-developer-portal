import { Checkout } from "checkout-node-sdk";

const cko = new Checkout("sk_XXXX");

try {
  const payment = await cko.payments.request({
    source: {
      // infered type: "token"
      token: "tok_bzi43qc6jeee5mmnfo4gnsnera", // Generated by Checkout.Frames
      billing_address: {
        address_line1: "Wall Street",
        address_line2: "Dollar Avenue",
        city: "London",
        state: "London",
        zip: "W1W W1W",
        country: "GB",
      },
      phone: {
        country_code: "44",
        number: "7123456789",
      },
    },
    currency: "USD",
    amount: 1000,
    payment_type: "Regular",
    reference: "ORDER 1234",
    description: "Mint Tea",
    customer: {
      email: "new_user@email.com",
      name: "John Smith",
    },
    metadata: {
      myCustomProp: {
        value: 1,
      },
    },
  });
} catch (err) {
  console.log(err.name);
}
