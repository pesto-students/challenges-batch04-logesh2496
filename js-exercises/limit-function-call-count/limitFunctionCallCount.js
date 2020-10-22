const limitFunctionCallCount = (callback, maxCount) => {
  let noOfTimes = 0;
  return (...args) => {
    noOfTimes += 1;
    if (noOfTimes > maxCount) return null;
    return callback.apply(this, args);
  }
};
export {
  limitFunctionCallCount,
};
