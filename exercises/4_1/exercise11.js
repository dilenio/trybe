let salarioBruto = 5000;
let salarioBase, salarioLiquido, impostoINSS, impostoRenda = 0;

if (salarioBruto <= 1556.94) {
  impostoINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92 ) {
  impostoINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82 ) {
  impostoINSS = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
  impostoINSS = 570.88;
}

salarioBase = salarioBruto - impostoINSS;

if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  impostoRenda = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05 ) {
  impostoRenda = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68 ) {
  impostoRenda = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68) {
  impostoRenda = (salarioBase * 0.275) - 869.36;
}

salarioLiquido = salarioBase - impostoRenda;

console.log(salarioLiquido)