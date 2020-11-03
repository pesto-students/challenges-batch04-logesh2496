const isObject = (value) => typeof (value) === 'object' && !Array.isArray(value);
const deepClone = (newObj, [key, value]) => {
    if (value && isObject(value)) {
        newObj[key] = deepCopyObject(value);
    } else {
        newObj[key] = value;
    }
}
const deepCopyObject = objToCopy => {
    if (!objToCopy || !isObject(objToCopy)) {
        return objToCopy;
    }
    const iterableObj = Object.entries(objToCopy);
    const deepClonedObj = {};
    for (const keyValuePair of iterableObj) {
        deepClone(deepClonedObj, keyValuePair);
    }
    return deepClonedObj;
};
export { deepCopyObject };
