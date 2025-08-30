// Seleciona elementos do modal
const modalWrapper = document.querySelector(".modal-wrapper");
const modalForm = document.querySelector(".modal-form");
const openButton = document.querySelector(".new-schedule button"); // botão "NOVO AGENDAMENTO"
const closeButton = document.getElementById("close"); // botão X dentro do modal

// Abre o modal ao clicar no botão
openButton.addEventListener("click", () => {
  modalWrapper.classList.add("open");
});

// Fecha ao clicar no botão de fechar (X)
closeButton.addEventListener("click", () => {
  modalWrapper.classList.remove("open");
});

// Fecha ao clicar fora do formulário (no fundo escuro)
modalWrapper.addEventListener("click", (event) => {
  if (event.target === modalWrapper) {
    modalWrapper.classList.remove("open");
  }
});


// Fecha modal com tecla ESC
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalWrapper.classList.remove("open");
  }
});