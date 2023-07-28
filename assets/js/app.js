import toggleModal from "./modules/modal.mjs";

const controlModal = function () {
  const btnOpenModal = document.querySelector(".btn--modal");
  const btnCloseModal = document.querySelector(".modal__close");
  const overlay = document.querySelector(".overlay");
  [btnOpenModal, btnCloseModal, overlay].forEach((el) =>
    el.addEventListener("click", toggleModal)
  );
};

const init = function () {
  controlModal();
};

init();
