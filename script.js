// function selectGear(gear) {
//     document.getElementById('gear').value = gear;
// }
function selectGear(gear) {
  resetButtonColors();

  // Selecione o botão atual e defina a cor para verde
  let currentButton = document.querySelector(".button" + gear);
  currentButton.style.backgroundColor = "green";

  // Seu código existente aqui
}

function resetButtonColors() {
  // Reinicie a cor de todos os botões para a cor padrão
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function(button) {
    button.style.backgroundColor = ""; // Define a cor para a padrão (transparente)
  });
}