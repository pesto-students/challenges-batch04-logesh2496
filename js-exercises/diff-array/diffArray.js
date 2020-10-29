const convertMapKeysIntoAnArray = (mapKeys) => [...mapKeys];

function diffArray(...args) {
  const valuesHolder = new Map();
  for (const arrParam of args) {
    arrParam.map(value => {
      if (!valuesHolder.has(value)) {
        valuesHolder.set(value, 1);
      } else {
        const incrementedValue = valuesHolder.get(value) + 1;
        valuesHolder.set(value, incrementedValue);
      }
    });
  }
  const allKeys = convertMapKeysIntoAnArray(valuesHolder.keys());
  return allKeys.filter(key => valuesHolder.get(key) === 1);
}

export {
  diffArray,
};
