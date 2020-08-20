
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names
    .reduce((acc, element) => acc + element
      .split('')
      .reduce((acc, element) => ((element.toLowerCase() === 'a') ? acc + 1 : acc), 0), 0);
}

assert.deepEqual(containsA(), 20);
