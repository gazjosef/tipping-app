function infiniteArgs(...args) {
  console.log(args.length);
  return args.length;
}

console.log(infiniteArgs(1, 2, 3));

function multiplyArgs(multiplier, ...args) {
  return args.map(arg => arg * multiplier);
}

console.log(multiplyArgs(5, 2, 3, 4, 5));
