const charAttributes = ['(', ')', '{', '}', '[', ']'];
const isClosingTagMatch = (prev, current) => {
  return (prev === '(' && current === ')') || (prev === '{' && current === '}') || (prev === '[' && current === ']');
}
const isOpenTags = (char) => ['(', '[', '{'].includes(char);
const checkOpenAndClosing = (prevChars, char) => {
  if (isOpenTags(char)) {
    prevChars.push(char);
    return true;
  } else {
    return isClosingTagMatch(prevChars.pop(), char)
  }
}
function balancedBraces(chars) {
  var prevChars = [];
  for (const char of chars) {
    if (charAttributes.includes(char)) {
      const isClosedProperly = checkOpenAndClosing(prevChars, char);
      if (!isClosedProperly) {
        return false;
      }
    }
  }
  if (prevChars.length) {
    return false;
  }
  return true;
}
export {
  balancedBraces,
};
