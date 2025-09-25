const blurEl = document.getElementById("blur");
const buttonEl = document.getElementById("button");
const modalEl = document.getElementById("modal");
const closeEl = document.getElementById("close");

buttonEl.addEventListener("click", () => {
  modalEl.classList.remove("modal-hidden");
  blurEl.classList.remove("blur-hidden");
});
closeEl.addEventListener("click", () => {
  modalEl.classList.add("modal-hidden");
  blurEl.classList.add("blur-hidden");
});
blurEl.addEventListener("click", () => {
  modalEl.classList.add("modal-hidden");
  blurEl.classList.add("blur-hidden");
});
