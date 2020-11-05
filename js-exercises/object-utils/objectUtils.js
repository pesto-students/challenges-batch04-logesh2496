// your implementation
const map = (obj, fn) => {
  return Object.fromEntries(Object.entries(obj).map(fn));
}
const filter = (obj, fn) => {
  return Object.fromEntries(Object.entries(obj).filter(fn));
}
const invert = (obj) => {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => ([value, key])));
}
const merge = (...args) => {
  return args.reduce((objOne, objTwo) => ({ ...objOne, ...objTwo }));
}
const all = (obj, fn) => {
  return Object.entries(obj).every(fn);
}
const some = (obj, fn) => Object.entries(obj).some(fn);
export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
