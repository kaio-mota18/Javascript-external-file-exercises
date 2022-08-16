let distanceLightYear
let distanceConvertion
let measureChosen

distanceLightYear = prompt('Qual a distância em anos luz?')

measureChosen = prompt(
  'Converta para uma das unidades disponíveis\n1 - Persec(pc)\n2 - Unidade astronômica(AU)\n3 - Quilômetros(km)',
  'Insira o número da opção desejada'
)

switch (measureChosen) {
  case '1':
    distanceConvertion = distanceLightYear * 0.306621
    measureChosen = 'Parsec'
    break
  case '2':
    distanceConvertion = distanceLightYear * 63241.1
    measureChosen = 'Unidade Astronômica'
    break
  case '3':
    distanceConvertion = distanceLightYear * (9.5 * Math.pow(10, 12))
    measureChosen = 'Quilômetros'
    break
  default:
    measureChosen = 'não identificada'
    distanceConvertion = 'Conversão fora do escopo'
    break
}

alert(
  'Distância em Anos Luz: ' +
    distanceLightYear +
    '\n' +
    measureChosen +
    ': ' +
    distanceConvertion
)
