let num1 = 40;
let num2 = 9;
let num3 = 11;
let res = 0;

if (num1 > num2 && num1 > num3)  {
  res = num1;
} else if (num2 > num1 && num2 > num3) {
  res = num2;
} else {
  res = num3
}

console.log(res)
