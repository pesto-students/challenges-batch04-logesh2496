function chunkArrayInGroups(array, chunkSize) {
  const noOfGroupedElements = Math.ceil(array.length / chunkSize);
  let splitStartIndex = 0;
  let splitStopIndex = chunkSize;
  const groupedArray = [];
  while (groupedArray.length < noOfGroupedElements) {
    groupedArray.push(array.slice(splitStartIndex, splitStopIndex));
    splitStartIndex = splitStopIndex;
    splitStopIndex += chunkSize;
  }
  return groupedArray;
}
export {
  chunkArrayInGroups,
};
