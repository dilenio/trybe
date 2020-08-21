const assert = require('assert')

const myList = [1, 2, 3]

const swap = (array) => array.sort((a, b) => b - a);
// Não entendi como funciona o destructuring no caso abaixo.
// const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(myList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)
