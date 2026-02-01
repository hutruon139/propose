import game from "./game.js";
import elements from "./elements.js";
import { jq } from "./utils.js";

// Make game globally accessible for the retry button
window.game = game;

game.addNewBalloons(10);
elements.startBtn.addEventListener("click", () => {
  game.nextQuestion();
  elements.welcome.style.display = "none";
  jq.addClass(elements.titleCard.orig, "show");
});
