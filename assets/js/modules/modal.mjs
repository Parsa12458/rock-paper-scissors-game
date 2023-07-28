const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
export default function () {
  [modal, overlay].forEach((el) => el.classList.toggle("hidden"));
}
