import toggleModal from "./modules/modal.mjs";
import game from "./modules/game.mjs";
import { setScore } from "./modules/updateScore.mjs";

const controlModal = function () {
  const btnOpenModal = document.querySelector(".btn--modal");
  const btnCloseModal = document.querySelector(".modal__close");
  const overlay = document.querySelector(".overlay");
  [btnOpenModal, btnCloseModal, overlay].forEach((el) =>
    el.addEventListener("click", toggleModal)
  );
};

const getScore = function () {
  const storedScore = localStorage.getItem("score");

  if (storedScore) {
    // Update the score value in updateScore.mjs
    setScore(+storedScore);

    // Update score on UI
    const scoreEl = document.querySelector(".header__score");
    scoreEl.textContent = storedScore;
  }
};

const init = function () {
  controlModal();
  game();
  getScore();
};

init();
