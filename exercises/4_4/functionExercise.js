// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palavra){
  let newWord = '';
  let palindrome = false;

  for (let i in palavra){
    newWord += palavra[palavra.length - 1 - i];
  }
  if (newWord === palavra) {
    palindrome = true;
  } 
  return palindrome;
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));