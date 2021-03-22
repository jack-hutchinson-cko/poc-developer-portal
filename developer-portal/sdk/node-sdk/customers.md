---
id: customers
title: Customers
---


You can find a list of request body parameters and possible outcomes [here](https://api-reference.checkout.com/#tag/Customers).

## Update a customer

```js
const customerResponse = await cko.customers.update('cus_2tvaccfvs3lulevzg42vgyvtdq', {
    name: 'James Bond',
});
```
