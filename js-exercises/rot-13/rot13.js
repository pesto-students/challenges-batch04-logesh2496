const noOfPlacesToShift = 13;
const minCharCode = 64; //65 actually represents A
const maxCharCode = 90;

//This function only handles Capitalized letters.
function rot13(sentence) {
  if (!sentence || (typeof sentence !== 'string' && !(sentence instanceof String))) {
    return
  }
  let encodedStr = '';
  let charIndex = 0;
  let calculatedCharIndex;
  while (charIndex < sentence.length) {
    const currentCharCode = sentence.charCodeAt(charIndex);
    if (currentCharCode <= minCharCode || currentCharCode > maxCharCode) {
      calculatedCharIndex = currentCharCode;
    } else {
      calculatedCharIndex = currentCharCode + noOfPlacesToShift;
    }
    if (calculatedCharIndex > maxCharCode) {
      calculatedCharIndex = (calculatedCharIndex - 90) + minCharCode;
    }
    encodedStr += String.fromCharCode(calculatedCharIndex);
    charIndex += 1;
  }
  return encodedStr;
}
export {
  rot13,
};
