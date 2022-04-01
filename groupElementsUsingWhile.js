const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  const length = Math.max(array1.length, array2.length);
  for (let index = 0; index < length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

const groupElements = function (data) {
  const elements = data.slice(0);
  const groupedElements = [];
  let similarElements = [];
  let startIndex = 0;
  let endIndex = 0;

  elements.sort();
  while (elements[startIndex] !== undefined) {
    if (
      typeof elements[startIndex] === 'object' &&
      typeof elements[endIndex] === 'object'
    ) {
      if (!areArraysEqual(elements[startIndex], elements[endIndex])) {
        startIndex = endIndex;
        groupedElements.push(similarElements);
        similarElements = [];
      }
    } else if (elements[startIndex] !== elements[endIndex]) {
      startIndex = endIndex;
      groupedElements.push(similarElements);
      similarElements = [];
    }
    similarElements.push(elements[endIndex]);
    endIndex += 1;
  }
  return groupedElements;
};

const main = function () {
  console.log(groupElements([1, 2, 1]));
  console.log(groupElements([1, 2, 3, 1, 2, 4]));
  console.log(groupElements([[1, 1], 1, [1, 1], 1]));
  console.log(groupElements([[2, 1], 1, [1, 2], 1, [1, 2, 3], [1]]));
};

main();
