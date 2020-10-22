
function duplicateLetters(...args) {
  const charMap = {};
  for (const char of args[0]) {
    if (!(char in charMap)) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }
  const maxCount = Math.max(...Object.values(charMap));
  if (!maxCount || maxCount === 1)
    return false;
  return maxCount;
}
duplicateLetters('asdfghjklqwerftyuiop');
export {
  duplicateLetters,
};
