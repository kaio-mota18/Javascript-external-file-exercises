function save() {
  event.preventDefault()
  let name = document.querySelector("input[name='name']").value
  let programmingLang = document.querySelector(
    "select[name='programming-lang'] option:checked"
  ).value

  alert('Nome: ' + name + '\nLinguaguem de programação: ' + programmingLang)
}
