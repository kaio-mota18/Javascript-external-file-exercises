var documentForTrip =
  'O seu nome é Caio da Mota, você têm 27 anos e sua viagem é para Buenos Aires'

function updateName(string, oldName, newName) {
  if (string.includes(oldName) === false) {
    return string
  } else {
    string = string.replace(oldName, newName)
    return updateName(string, oldName, newName)
  }
}

alert(documentForTrip)
alert(updateName(documentForTrip, 'Caio', 'Kaio'))
