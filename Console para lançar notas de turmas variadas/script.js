//Esse programa roda no browser e sua função é de funcionar como um lançador de notas para turmas do Fundamental Anos Iniciais

class classroom {
  constructor(studentsName, grade, behaviour) {
    this.studentsName = studentsName
    this.grade = grade
    this.behaviour = behaviour
  }

  //método para mostrar se o aluno teve desempenho mínimo requerido
  approved(gradeOfStudents) {
    if (gradeOfStudents < 15) {
      this.approvation = 'APROVADO'
    } else {
      this.approvation = 'REPROVADO'
    }
  }
}

class firstGradeElementary extends classroom {
  constructor(studentsName, grade, behaviour, pesDevelopment) {
    super(studentsName, grade, behaviour)
    this.pesDevelopment = pesDevelopment
  }
}
