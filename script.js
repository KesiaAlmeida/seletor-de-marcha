function selectGear(gear) {
  resetButtonColors();

  // Selecione o botão atual e adicione a classe 'active'
  let currentButton = document.querySelector(".button:contains('" + gear + "')");
  currentButton.classList.add("active");

  // Seu código existente aqui
}

function resetButtonColors() {
  // Remova a classe 'active' de todos os botões
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function(button) {
      button.classList.remove("active");
  });
}
