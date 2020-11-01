// You can change the `args`
function bind(fn, obj) {
  // return fn.bind(obj);
  return (...args) => {
    return fn.call(obj, ...args);
  }
}

module.exports = { bind };
