
function curry(fn) {
  const curried = (...args) => {
    if (args.length === fn.length) {
      return fn(...args);
    }
    return (...args2) => {
      return curried(...args.concat(args2));
    }
  }
  return curried;
}
export {
  curry,
};
