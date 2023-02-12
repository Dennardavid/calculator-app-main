function reset() {
  document.getElementById("display").innerHTML = " ";
}

function display(value) {
  document.getElementById("display").textContent += value;
}
function del(){
  document.getElementById("display").textContent -= value;
}