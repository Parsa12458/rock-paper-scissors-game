let score = 0;
export default function (status) {
  const scoreEl = document.querySelector(".header__score");
  console.log(scoreEl);
  if (status) {
    ++score;
    console.log("USER WIN! Score: ", score);
  }

  if (!status) {
    --score;
    console.log("HOUSE WIN Score: ", score);
  }

  scoreEl.textContent = score;

  // TODO: Store the score in local storage
}
