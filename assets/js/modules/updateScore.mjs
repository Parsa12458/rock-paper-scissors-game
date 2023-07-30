export let score = 0;

export const setScore = function (newScore) {
  score = newScore;
};

export default function (status) {
  const scoreEl = document.querySelector(".header__score");
  if (status) ++score;
  if (!status) --score;

  scoreEl.textContent = score;

  // Store the score in local storage
  localStorage.setItem("score", score);
}
