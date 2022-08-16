class newResidence {
  constructor(house, area, neighborhood) {
    this.house = house
    this.area = area
    this.neighborhood = neighborhood
  }
}

//função que tem por objetivo recolher via DOM as informações dos inputs, criar um novo objeto e esse objeto será consumido pelas próximas funções que adicionarão elementos à pagina HTML

function save() {
  let residence = document.querySelector(
    "select[name='house-type'] option:checked"
  ).text
  let totalArea = document.querySelector("input[name='area']").value
  let neighborhood = document.querySelector("input[name='neighbourhood']").value

  let newRegister = new newResidence(residence, totalArea, neighborhood)

  let printingInfo =
    'Imóvel: ' +
    newRegister.house +
    '\nBairro: ' +
    newRegister.neighborhood +
    '\nÁrea: ' +
    newRegister.area +
    'm²\n'

  return printingInfo
}
