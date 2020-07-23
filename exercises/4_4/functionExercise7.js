// Crie uma função que receba uma string word e outra string ending.
// Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.

function wordEndChecks(word, ending){
  let count = word.length - ending.length;
  let equal = '';

  for ( let i = count; i < word.length; i += 1 ){
    equal += word[i];
  }

  if ( ending === equal ) {
    return true;
  } else {
    return false;
  }
}

console.log(wordEndChecks("trybe", "be"));