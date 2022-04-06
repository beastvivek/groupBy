const isArray = Array.isArray;

const areEqual = function (LHS, RHS) {
  const isOneOfThemNotArray = !(isArray(LHS) && isArray(RHS));
  if (isOneOfThemNotArray) {
    return LHS === RHS;
  }
  const stack = [[LHS, RHS]];

  while (stack.length !== 0) {
    const bothArrays = stack.pop();
    const lhsArray = bothArrays[0];
    const rhsArray = bothArrays[1];

    if (lhsArray.length !== rhsArray.length) {
      return false;
    }

    for (let index = 0; index < lhsArray.length; index++) {
      if (isArray(lhsArray[index]) && isArray(rhsArray[index])) {
        stack.push([lhsArray[index], rhsArray[index]]);
      } else if (lhsArray[index] !== rhsArray[index]) {
        return false;
      }
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
