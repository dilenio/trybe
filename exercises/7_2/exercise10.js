const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'manhã',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const verifyKeyValue = (object, key, value) => {
  const arrayObject = Object.entries(object);
  let isEqual = false;
  for (let index in arrayObject) {
    if (key === arrayObject[index][0] && value === arrayObject[index][1]) {
      isEqual = true;
    }
  }
  return isEqual;
}

console.log(verifyKeyValue(lesson3, 'professor', 'Maria Clara'));
console.log(verifyKeyValue(lesson3, 'turno', 'Maria Clara'));
