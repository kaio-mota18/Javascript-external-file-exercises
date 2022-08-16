const hitchedSpaceships = [
  ['Fenix', 8, true],
  ['Golias', 10, true],
  ['Helmet', 5, false],
  ['Elemental', 3, true],
  ['Darwin', 15, false]
]

var biggerThan9 = hitchedSpaceships
  .filter(spaceship => {
    return spaceship[1] >= 9
  })
  .map(spaceship => {
    return spaceship[0]
  })

var needsToBeHitched = hitchedSpaceships.findIndex(spaceship => {
  return spaceship[2] === false
})

needsToBeHitched += 1

var upcasedSpaceships = hitchedSpaceships.map(spaceship => {
  return spaceship[0].toUpperCase()
})

var spaceshipsInOneString = upcasedSpaceships
  .map(spaceship => {
    return (spaceship += ' ')
  })
  .join()

alert(
  'Naves com mais de 9 tripulantes: ' +
    biggerThan9 +
    '\n\nPróxima plataforma que precisa ser acoplada: ' +
    needsToBeHitched +
    '\n\nNaves com nomes em destaque: ' +
    spaceshipsInOneString
)

hitchedSpaceships.forEach(spaceship => {
  alert('Nave: ' + spaceship[0] + '\nNúmero de tripulantes: ' + spaceship[1])
})
