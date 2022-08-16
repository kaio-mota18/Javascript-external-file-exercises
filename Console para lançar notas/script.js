//Esse projeto tem por intuito simular um diário online no qual o professor poderia lançar as notas de uma determinada turma

alert(
  'Bem-vindo professor(a)!' +
    '\nAqui está o seu diário online para que você lance as notas dos alunos'
)

// classe para criar um aluno e armezar seu nome e nota final
class students {
  constructor(studentsName) {
    this.studentsName = studentsName
  }

  totalGrade(test1, test2, mockTest) {
    this.finalGrade = test1 + test2 + mockTest
  }
}

//função para inserir aluno e notas
function insertGrades() {
  let ssname = prompt('Digite o nome do aluno')

  let testOne = parseFloat(
    prompt(
      'Nota do primeiro teste',
      'Apenas números inteiros ou separados por ponto'
    )
  )

  let testTwo = parseFloat(
    prompt(
      'Nota do segundo teste',
      'Apenas números inteiros ou separados por ponto'
    )
  )

  let simuladinho = parseFloat(
    prompt(
      'Nota do simuladinho',
      'Apenas números inteiros ou separados por ponto'
    )
  )

  let ssGrades = new students(ssname)
  ssGrades.totalGrade(testOne, testTwo, simuladinho)

  return ssGrades
}

//array para armazenar e listar notas enomes dos alunos futuramente
var classroomGrades = []

//função para exibir os nomes dos alunos e suas notas finais
function showClassomroomGrades(classroom) {
  //o parêmetro 'classroom' desta função vai ser a array setada acima
  let studentsList = ' '
  classroom.forEach((student, index) => {
    studentsList +=
      index +
      1 +
      '- ' +
      student.studentsName +
      '\nNota final: ' +
      student.finalGrade +
      '\n\n'
  })

  alert(studentsList)
}

//função de ocntrole que irá exibir o menu de interação com o usuário
function showMenu() {
  let optionChosen

  do {
    optionChosen = prompt(
      'O que você deseja fazer?' +
        '\n1 - Lançar notas' +
        '\n2 - Visualizar as notas' +
        '\n3 - Sair'
    )

    switch (optionChosen) {
      case '1':
        let newGrade = insertGrades()
        classroomGrades.push(newGrade)
        break
      case '2':
        showClassomroomGrades(classroomGrades)
        break
      case '3':
        alert('Tenha um bom dia, professor(a)')
        break
      default:
        alert('Opção inválida')
        break
    }
  } while (optionChosen != '3')
}

showMenu()
