const areEqual = function (lhs, rhs) {
  if (!Array.isArray(lhs) || !Array.isArray(rhs)) {
    return lhs === rhs;
  }
  if (lhs.length !== rhs.length) {
    return false;
  }
  for (let index = 0; index < lhs.length; index++) {
    if (!areEqual(lhs[index], rhs[index])) {
      return false;
    }
  }
  return true;
};

const main = function () {
  console.log('(1, 1 ) : ', areEqual(1, 1)); // true
  console.log('(1, 2 ) :', areEqual(1, 2)); // false
  console.log('abc, abc :', areEqual('abc', 'abc')); // true
  console.log('[1], [1] :', areEqual([1], [1])); // true
  console.log('[1], [2] :', areEqual([1], [2])); // false
  console.log('[1], [1, 2] :', areEqual([1], [1, 2])); // false
  console.log('[1, 2], [1, 2] :', areEqual([1, 2], [1, 2])); // true
  console.log('[[1], [2]], [[1], [2]] :', areEqual([[1], [2]], [[1], [2]])); // true
  console.log('[[[1]], [[1],[2]]], [[[1]], [[1], [2]]] :', areEqual([[[1]], [[1], [2]]], [[[1]], [[1], [2]]])); // true
  console.log('[[[1]], [[1], [2]]], [[[1]], [[1], 2]] :', areEqual([[[1]], [[1], [2]]], [[[1]], [[1], 2]])); // false
};

main();
