//classe mãe para criar as espaçonaves
class Spaceship {
  //método estático utilizado para desacelerar a nave em uma taxa de 17%
  static get desacceleration() {
    return 0.17
  }

  constructor(name, crew) {
    this.name = name
    this.crew = crew
    this.currentVelocity = 0
  }

  //método utilizado para acelerar a nave
  speedUp(acceleration) {
    this.currentVelocity += acceleration * (1 - Spaceship.desacceleration)
  }
}

//classe derivada de Spaceship que será utilizada para criar naves de batalha
class battleSpaceship extends Spaceship {
  constructor(name, crew, numberOfWeapons) {
    super(name, crew)
    this.numberOfWeapons = numberOfWeapons
  }
}

//classe derivada utilizada para criar naves de transporte
class transportSpaceship extends Spaceship {
  constructor(name, crew, numberOfSeats) {
    super(name, crew)
    this.numberOfWeapons = numberOfSeats
  }
}

//classe utilizada para acessar as opções de castro, visualização de naves e troca de naves
class App {
  constructor() {
    this.spaceship = null
  }

  start() {
    this.registerSpaceship()
    let chosenOption
    do {
      chosenOption = this.showInitialMenu()
      this.redirectFeaturer(chosenOption)
    } while (chosenOption != '3')
    this.printAndExit()
  }

  registerSpaceship() {
    let name = prompt('Digite o nome da nave')
    let crewQuantity = prompt('Digite o número de tripulantes')
    let spaceshipType = this.describingSpaceship()

    if (spaceshipType == '1') {
      let weaponsQuantity = prompt(
        'Digite o número de armas disponíveis na nave',
        'Apenas números'
      )
      this.spaceship = new battleSpaceship(name, crewQuantity, weaponsQuantity)
    } else {
      let seatsQuantity = prompt('Qual o número de assentos?', 'Apenas números')
      this.spaceship = new transportSpaceship(name, crewQuantity, seatsQuantity)
    }
  }

  describingSpaceship() {
    let chosenOptionTwo
    while (!['1', '2'].includes(chosenOptionTwo)) {
      chosenOptionTwo = prompt(
        'Qual o tipo da nave?\n1- BATALHA\n2- TRANSPORTE'
      )
    }

    return chosenOptionTwo
  }

  showInitialMenu() {
    let whatYouGonnaDo
    while (!['1', '2', '3'].includes(whatYouGonnaDo)) {
      whatYouGonnaDo = prompt(
        'O que deseja fazer?' +
          '\n1 - Acelerarar a nave' +
          '\n2 - Trocar de nave' +
          '\n3 - Visualizar todas as naves e sair'
      )
    }
    return whatYouGonnaDo
  }

  redirectFeaturer(whatYouGonnaDo) {
    switch (whatYouGonnaDo) {
      case '1':
        this.acceleratingSpaceship()
        break
      case '2':
        this.registerSpaceship()
        break
    }
  }

  acceleratingSpaceship() {
    let acceleration = Number(
      prompt(
        'Quanto irá acelerar a nave?',
        'APENAS NÚMEROS - A velocidade tem uma taxa de desaceleração de 17%'
      )
    )
    this.spaceship.speedUp(acceleration)
  }

  printAndExit() {
    let finalMessage =
      'Nome: ' +
      this.spaceship.name +
      '\nTripulantes: ' +
      this.spaceship.crew +
      '\nVelocidade atual: ' +
      this.spaceship.currentVelocity +
      '\n'
    alert(finalMessage)
  }
}

const app = new App()
app.start()
