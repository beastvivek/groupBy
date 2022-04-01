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

const includes = function (element, array) {
  for (let index = 0; index < array.length; index++) {
    if (element.length !== undefined) {
      if (areArraysEqual(element, array[index])) {
        return true;
      }
    }
    if (element === array[index]) {
      return true;
    }
  }
  return false;
};

const uniqueElements = function (elements) {
  const unique = [];
  for (let index = 0; index < elements.length; index++) {
    if (!includes(elements[index], unique)) {
      unique.push(elements[index]);
    }
  }
  return unique;
};

const countOccurrences = function (element, array) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (element.length !== undefined) {
      count += areArraysEqual(element, array[index]) ? 1 : 0;
    } else if (element === array[index]) {
      count += 1;
    }
  }
  return count;
};

const countUnique = function (unique, elements) {
  const count = [];
  for (let index = 0; index < unique.length; index++) {
    count[index] = countOccurrences(unique[index], elements);
  }
  return count;
};

const repeat = function (element, count) {
  const repeatedElement = [];
  for (let counter = 1; counter <= count; counter++) {
    repeatedElement.push(element);
  }
  return repeatedElement;
};

const repeatElements = function (unique, count) {
  const groupedElements = [];
  for (let index = 0; index < unique.length; index++) {
    groupedElements[index] = repeat(unique[index], count[index]);
  }
  return groupedElements;
};

const groupElements = function (elements) {
  const unique = uniqueElements(elements);
  const count = countUnique(unique, elements);
  return repeatElements(unique, count);
};

const main = function () {
  console.log(groupElements([1, 2, 1]));
  console.log(groupElements([1, 2, 3, 1, 2, 4]));
  console.log(groupElements([[1, 1], 1, [1, 1], 1]));
  console.log(groupElements([[2, 1], 1, [1, 2], 1, [1, 2, 3], [1]]));
  console.log(
    groupElements([[2, 1], 1, [1, 2], 1, [1, 2, 3], [1], [1, 2, 3], [1]])
  );
};

main();
