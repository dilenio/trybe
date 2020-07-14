// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 10;
let res;

if (nota >= 90 && nota <= 100) {
  res = 'A';
} else if (nota >= 80 && nota < 90) {
  res = 'B';
} else if (nota >= 70 && nota < 80) {
  res = 'C';
} else if (nota >= 60 && nota < 70) {
  res = 'D';
} else if (nota >= 50 && nota < 60) {
  res = 'E';
} else if (nota <= 50 && nota >= 0) {
  res = 'F';
} else {
  res = 'Nota inválida!';
}

console.log(res)