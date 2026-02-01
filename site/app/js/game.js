import elements from "./elements.js";
import questions from "./questions.js";
import Balloon from "./Balloon.js";
import { jq } from "./utils.js";

const game = {
  balloons: [],
  addNewBalloons: function (number = 10, finale = false) {
    new Array(10)
      .fill(1)
      .map(() => new Balloon())
      .forEach((balloon) => this.addBalloon(balloon, finale));
  },
  addNewBalloon: function (finale = false) {
    this.addBalloon(new Balloon(), finale);
  },
  addBalloon: function (balloon = new Balloon(), finale = false) {
    if (this.balloons.indexOf(balloon) === -1) {
      this.balloons.push(balloon);
    }
    balloon.setGameReference(game);
    balloon.setFinale(finale);

    elements.game.insertAdjacentHTML("beforeend", balloon.generateHTML());
    elements.confetti.insertAdjacentHTML(
      "beforeend",
      balloon.generateConfettiHTML(),
    );

    balloon.getElement().addEventListener("click", () => balloon.pop());
  },
  nextQuestion: function () {
    if (questions.nextQuestion()) {
      this.balloons
        .filter((balloon) => !balloon.popped)
        .reverse()
        .forEach((balloon, index) => {
          balloon.question = questions.current.answers[index];
          balloon.updateView();
        });
      elements.caption.style.opacity = "1";
      jq.changeText(elements.answer, questions.current.question);
      if (questions.more.length === 0) {
        document.title = "Pop the Question";
        jq.removeClass(elements.titleCard.orig, "show");
        jq.addClass(elements.titleCard.real, "show");
      }
    } else {
      elements.caption.style.opacity = "0";
      elements.answer.style.opacity = "0";
      this.addNewBalloons(10, true);
      elements.celeImgs.forEach((el) => jq.addClass(el, "show"));
    }
  },
  showSadPage: function (selectedAnswer) {
    // Hide game elements
    elements.game.style.display = "none";
    elements.caption.style.display = "none";
    elements.answer.style.display = "none";

    // Show sad page
    const sadPage = document.getElementById("sad-page");
    sadPage.style.display = "flex";
  },
  retryFinalQuestion: function () {
    // Just keep showing the sad page - no retry functionality
  },
};

window.cheat = function () {
  [...document.getElementsByClassName("correct")].forEach((el) => el.click());
};

export default game;
