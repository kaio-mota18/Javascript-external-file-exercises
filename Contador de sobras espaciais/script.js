let spaceship = prompt('Qual o nome da nave?', 'Digite o nome da nave aqui')
let confirmation = confirm('Deseja entrar em dobra espacial?')

let count = 0

if (confirmation == true) {
  count = count + 1
  confirmation = confirm('Deseja refazer a dobra espacial?')

  while (confirmation == true) {
    count++
    confirmation = confirm('Deseja refazer a dobra espacial?')
  }

  alert('Nave: ' + spaceship + '\nNúmero de dobras espaciais feitas: ' + count)
} else {
  alert('Nave: ' + spaceship + '\nNúmero de dobras espaciais feitas: ' + count)
}
