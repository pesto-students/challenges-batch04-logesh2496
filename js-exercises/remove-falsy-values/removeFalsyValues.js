
function removeFalsyValues(array) {
  return array.filter(value => value && (typeof (value) === 'number' || value.length));
}

export {
  removeFalsyValues,
};
