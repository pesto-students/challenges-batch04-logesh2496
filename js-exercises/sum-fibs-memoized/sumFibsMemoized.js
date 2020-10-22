function sumFibs(maxNum) {
  let numOne = 0;
  let numTwo = 1;
  let sum;
  let oddSum = 0;
  for (let i = 0; i < maxNum; i++) {
    //Not distubing the flow of fib
    sum = numOne + numTwo;
    numOne = numTwo;
    numTwo = sum;
    //Keep adding the previous odd nos and break the loop when it reaches the given max number 
    if (numOne % 2 !== 0) {
      if (numOne > maxNum) {
        i = maxNum;
        break;
      }
      oddSum += numOne;
    }
  }
  return oddSum;
}

function cacheFunction(fn) {
  const cache = {};
  return (value) => {
    if (!(value in cache)) cache[value] = fn(value);
    return cache[value];
  };
}

export { sumFibs, cacheFunction };
