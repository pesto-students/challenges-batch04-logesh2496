const isEven = (value) => value % 2 === 0;

const sumOnlyEvenValues = (total, currentValue, i) => {
  if (i === 1) {
    const firstValue = isEven(total) ? total : 0;
    const secondValue = isEven(currentValue) ? currentValue : 0;
    return firstValue + secondValue;
  }
  if (isEven(currentValue)) {
    return total + currentValue;
  }
  return total;
};

const sumEvenArgs = (...args) => {
  if (!args.length) {
    return 0;
  }
  return args.reduce(sumOnlyEvenValues);
};
export { sumEvenArgs };
