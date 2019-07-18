const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

console.log("output", JSON.stringify(orders, null, 2));

const total = orders.reduce((sum, order) => {
  return sum + order.amount;
}, 0);

console.log(total);
