//função para controlar a limpeza do formulário caso o usuário deseje fazer uma nova adição à lista de casas
function clean() {
  document.querySelector("input[name='neighbourhood']").value = ''
  document.querySelector("input[name='rented']").checked = false
  document.querySelector("input[name='area']").value = ''
}
