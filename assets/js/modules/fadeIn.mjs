export default function (element, time) {
  element.classList.add("fade");
  setTimeout(() => {
    document.querySelector(".fade").style.transition = "opacity 1s ease";
    element.classList.remove("fade");
  }, time);
}
