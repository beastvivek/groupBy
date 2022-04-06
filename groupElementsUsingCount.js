const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  if (array1.length === 0) {
    return true;
  }
  if (!areEqual(array1[0], array2[0])) {
    return false;
  }
  return areEqual(array1.slice(1), array2.slice(1));
};

const areEqual = function (element1, element2) {
  if (Array.isArray(element1) && Array.isArray(element2)) {
    return areArraysEqual(element1, element2);
  }
  return element1 === element2;
};

const includes = function (element, array) {
  for (let index = 0; index < array.length; index++) {
    const arrayElement = array[index];
    if (areEqual(element, arrayElement[0])) {
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
    if (Array.isArray(element)) {
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
  console.log(groupElements([1, 2, 1])); // [[1, 1], [2]]
  console.log(groupElements([1, 2, 3, 1, 2, 4])); // [[1, 1], [2, 2], [3], [4]]
  console.log(groupElements([[1, 1], 1, [1, 1], 1])); // [[[1, 1], [1, 1]], [1, 1]]
  console.log(groupElements([[2, 1], 1, [1, 2], 1, [1, 2, 3], [1]])); // [[[2, 1]], [1, 1], [[1, 2]], [[1, 2, 3]], [[1]]]
  console.log(groupElements([1, [1, 2], 1, [1, 2, 3], [1], [1, 2, 3], [1]])); // [[1, 1], [[1, 2]], [[1, 2, 3], [1, 2, 3]], [[1], [1]]]
  console.log(groupElements([[2, 1], [1, 2], [[1], [2]], [[1], [2]]])); // [[[2, 1]], [[1, 2]], [[[1], [2]], [[[1], [2]]]]]
};

main();
