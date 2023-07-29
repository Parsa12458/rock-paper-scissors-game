import game from "./game.mjs";

export default function () {
  document.querySelector(".main").remove();
  const container = document.querySelector(".container");
  const html = document.createElement("div");
  html.innerHTML = `
    <main class="main main--1">
        <div class="option__container option--paper" data-option="paper">
          <img src="./assets/images/icon-paper.svg" alt="Paper Image" />
        </div>
        <div class="option__container option--scissors" data-option="scissors">
          <img src="./assets/images/icon-scissors.svg" alt="Scissors Image" />
        </div>
        <div class="option__container option--rock" data-option="rock">
          <img src="./assets/images/icon-rock.svg" alt="Rock Image" />
        </div>
      </main>
  `;
  container.insertBefore(html.firstElementChild, container.children[1]);
  game();
}
