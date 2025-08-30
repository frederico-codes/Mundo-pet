const modalWrapper = document.querySelector(".modal-wrapper");
const modalForm = document.querySelector(".modal-form");
const openButton = document.querySelector(".new-schedule button"); 
const closeButton = document.getElementById("close"); 

openButton.addEventListener("click", () => {
  modalWrapper.classList.add("open");
});

closeButton.addEventListener("click", () => {
  modalWrapper.classList.remove("open");
});

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