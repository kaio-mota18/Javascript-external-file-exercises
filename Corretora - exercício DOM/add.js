//Esta função controlará a adição de imóveis à lista por meio do DOM. Tambe´m será criado um botão remover ao lado de cada item da lista para que cada item possa ser removido individualmente.

function addHouse() {
  var infoToBePrinted = save()

  const list = document.createElement('li')
  let available = checkingAvailability()

  if (available == true) {
    let newMark = createRentedMark()
    list.appendChild(newMark)
  }

  list.innerHTML += infoToBePrinted

  const buttonToRemove = document.createElement('button')
  buttonToRemove.type = 'button'
  buttonToRemove.innerText = 'Remover'
  buttonToRemove.setAttribute('onclick', 'removeResidence(this)')
  list.appendChild(buttonToRemove)

  let breakLine = document.createElement('hr')
  list.appendChild(breakLine)

  document.getElementById('house-list').appendChild(list)
}

//botão para remover
function removeResidence(list) {
  let liToRemove = list.parentNode
  document.getElementById('house-list').removeChild(liToRemove)
}

//função para retornar se o imóvel está alugado
function checkingAvailability() {
  let occupiedOrNot = document.querySelector("input[name='rented']").checked
  return occupiedOrNot
}

//Função para criação do elemento span estilizado para indicar que o imóvel está alugado

function createRentedMark() {
  let subtitle = document.createElement('span')
  subtitle.innerText = 'ALUGADO'
  subtitle.style.backgroundColor = 'red'
  subtitle.style.color = 'white'
  return subtitle
}
