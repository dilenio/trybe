const sum = require('./exercise1');

test('Testa se o retorno da soma de 4 + 5 é 9', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('Testa se o retorno da soma de 0 + 0 é zero', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('Testa se o retorno da soma de 4 + "5" (string) retorna uma mensagem de erro', () => {
  expect(() => sum(4, '5')).toThrow();
});
