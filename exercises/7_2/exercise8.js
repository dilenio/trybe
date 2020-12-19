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

const allLessons = Object.assign({ lesson1 }, { lesson2 }, { lesson3 });

function listStudents(object) {
  const newArray = Object.keys(object);
  let sum = 0;
  for (index in newArray) {
    sum += object[newArray[index]].numeroEstudantes;
  }
  return sum;
}

console.log(listStudents(allLessons))
