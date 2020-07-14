let a = 0;
let b = 50;
let c = 100;
let res = null;
let erro = '';

if ((a + b + c) === 180){
  res = true;
} else {
  res = false;
}

if (a <= 0 || b <= 0 || c <= 0 ){
  erro = 'Um ou mais ângulos tem valor zero ou negativo';
}

console.log(res, erro);