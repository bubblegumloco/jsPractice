let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".closeBtn");

window.onload = function () {
  modal.showModal();
};

closeBtn.addEventListener("click", () => {
  modal.close();
});
