// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palavra){
  let newWord = '';
  for (let i in palavra){
    newWord += palavra[palavra.length - 1 - i];
  }
  if (newWord === palavra) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));