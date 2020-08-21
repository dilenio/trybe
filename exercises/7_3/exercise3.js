const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const newArray = [1, 2, 3, 4];
assert.deepStrictEqual(myRemoveWithoutCopy(newArray, 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy(newArray, 3), [1, 2, 3, 4]);
assert.deepStrictEqual(myRemoveWithoutCopy(newArray), newArray);
assert.deepStrictEqual(myRemoveWithoutCopy(newArray, 5), newArray);
