let ponto = document.getElementById('pontos')
let ponto2 = document.getElementById('pontos2')
let pontoHome = 0
let pontoGuest = 0

function add1_home() {
  pontoHome += 1
  ponto.textContent = pontoHome
}
function add2_home() {
  pontoHome += 2
  ponto.textContent = pontoHome
}
function add3_home() {
  pontoHome += 3
  ponto.textContent = pontoHome
}
function add1_guest() {
  pontoGuest += 1
  ponto2.textContent = pontoGuest
}
function add2_guest() {
  pontoGuest += 2
  ponto2.textContent = pontoGuest
}
function add3_guest() {
  pontoGuest += 3
  ponto2.textContent = pontoGuest
}
function reset() {
  pontoHome = 0
  pontoGuest = 0
  ponto.textContent = 0
  ponto2.textContent = 0
}
