export default function (user, house) {
  let userWin;
  if (
    (user === "rock" && house === "scissors") ||
    (user === "paper" && house === "rock") ||
    (user === "scissors" && house === "paper")
  ) {
    userWin = true;
  }

  if (
    (house === "rock" && user === "scissors") ||
    (house === "paper" && user === "rock") ||
    (house === "scissors" && user === "paper")
  ) {
    userWin = false;
  }

  return userWin;
}
