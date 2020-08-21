const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const newArray = [1, 2, 3, 4];
assert.deepStrictEqual(myRemove(newArray, 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove(newArray, 3), [1, 2, 3, 4]);
assert.deepStrictEqual(newArray, [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove(newArray, 5), [1, 2, 3, 4]);
