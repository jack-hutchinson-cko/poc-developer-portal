import { Checkout } from "checkout-node-sdk";

const cko = new Checkout("sk_XXXX");

try {
  const events = await cko.events.retrieveEvents({
    from: "2019-03-01T00:00:00Z",
  });
} catch (err) {
  console.log(err.name);
}
