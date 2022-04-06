const isArray = function (array) {
  return Array.isArray(array);
}

const areEqual = function (element1, element2) {
  if (!isArray(element1) || !isArray(element2)) {
    return element1 === element2;
  }
  if (element1.length !== element2.length) {
    return false;
  }
  if (element1.length === 0) {
    return true;
  }
  if (!areEqual(element1[0], element2[0])) {
    return false;
  }
  return areEqual(element1.slice(1), element2.slice(1));
};

const getIndexOfGroup = function (element, array) {
  for (let index = 0; index < array.length; index++) {
    const group = array[index];
    if (areEqual(element, group[0])) {
      return index;
    }
  }
  return -1;
};

const groupSimilarElements = function (elements) {
  const similarElementGroups = [];
  for (let index = 0; index < elements.length; index++) {
    let groupIndex = getIndexOfGroup(elements[index], similarElementGroups);
    if (groupIndex < 0) {
      groupIndex = similarElementGroups.length;
      similarElementGroups.push([]);
    }
    similarElementGroups[groupIndex].push(elements[index]);
  }
  return similarElementGroups;
};

const main = function () {
  console.log(groupSimilarElements([1, 2, 1])); // [[1, 1], [2]]
  console.log(groupSimilarElements([1, 2, 3, 1, 2, 4])); // [[1, 1], [2, 2], [3], [4]]
  console.log(groupSimilarElements([[1, 1], 1, [1, 1], 1])); // [[[1, 1], [1, 1]], [1, 1]]
  console.log(groupSimilarElements([[2, 1], 1, [1, 2], 1, [1, 2, 3], [1]])); // [[[2, 1]], [1, 1], [[1, 2]], [[1, 2, 3]], [[1]]]
  console.log(groupSimilarElements([1, [1, 2], 1, [1, 2, 3], [1], [1, 2, 3], [1]])); // [[1, 1], [[1, 2]], [[1, 2, 3], [1, 2, 3]], [[1], [1]]]
  console.log(groupSimilarElements([[2, 1], [1, 2], [[1], [2]], [[1], [2]]])); // [[[2, 1]], [[1, 2]], [[[1], [2]], [[[1], [2]]]]]
};

main();
