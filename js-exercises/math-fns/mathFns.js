// You can use the function from the `Math` module.

const sqrt = value => {
  let i = 1;
  while (value / i !== i) {
    i += 1;
  }
  return i;
};
const power = (value, power) => {
  let sum = value;
  for (let i = 1; i < power; i++) {
    sum += sum;
  }
  return sum;
};
const round = value => {
  const decimal = (value % 1) * 10;
  const wholeValue = parseInt(value);
  if (decimal >= 5) {
    return parseInt(value / 1) + 1;
  }
  return wholeValue;
};
// Don't change the exported names.
export {
  sqrt,
  power,
  round,
};
