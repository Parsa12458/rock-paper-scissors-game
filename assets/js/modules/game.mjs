import fadeIn from "./fadeIn.mjs";
import checkWin from "./checkWin.mjs";

const housePickGenerate = function (userPick) {
  const options = ["rock", "paper", "scissors"];
  let housePick;
  do {
    const randomInt = Math.trunc(Math.random() * 3);
    housePick = options[randomInt];
  } while (housePick === userPick);
  console.log(housePick);
  return housePick;
};

export default function () {
  const main = document.querySelector(".main");
  document.querySelector(".main--1").addEventListener("click", function (e) {
    const userPick = e.target.closest(".option__container")?.dataset.option;
    if (!userPick) return;

    // STEP 2
    main.className = "main main--2";
    fadeIn(main, 50);
    main.innerHTML = `
      <div>
        <span class="pick-label">you picked</span>
        <div class="user-pick option__container option--${userPick}">
          <img src="./assets/images/icon-${userPick}.svg" alt="${userPick} image" />
        </div>
      </div>
      <div>
        <span class="pick-label">the house picked</span>
        <div class="house-pick-placeholder">&nbsp;</div>
      </div>
      `;

    // STEP 3
    let housePick = housePickGenerate(userPick);
    document.querySelector(
      ".house-pick-placeholder"
    ).className = `house-pick option__container option--${housePick}`;
    fadeIn(document.querySelector(".house-pick"), 500);
    document.querySelector(
      ".house-pick"
    ).innerHTML = `<img src="./assets/images/icon-${housePick}.svg" alt="${housePick} Image" />`;

    // TODO: Show lose/win page
  });
}
