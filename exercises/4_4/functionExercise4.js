// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];;

function biggestWord(words){
  let biggest = words[0];

  for (let index in words) {
    if (words[index].length > biggest.length) {
      biggest = words[index];
    }
  }

  return biggest;
}

console.log(biggestWord(testArray))
