const longestWord = (phrase) => {
  const words = phrase.split(' ');
  let longest = 0;
  let word = '';
  for (let index = 0; index < words.length; index += 1) {
    if (words[index].length > longest) {
      longest = words[index].length;
      word = words[index];
    }
  }
  return word;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'
