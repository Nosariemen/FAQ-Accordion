const firstAnswer = document.getElementById("first-answer");
const secondAnswer = document.getElementById("second-answer");
const thirdAnswer = document.getElementById("third-answer");
const fourthAnswer = document.getElementById("fourth-answer");

const firstButton = document.getElementById("first-button");
const secondButton = document.getElementById("second-button");
const thirdButton = document.getElementById("third-button");
const fourthButton = document.getElementById("fourth-button");



function closeAllAnswers() {
    firstAnswer.classList.add("hidden");
    secondAnswer.classList.add("hidden");
    thirdAnswer.classList.add("hidden");
    fourthAnswer.classList.add("hidden");

    firstButton.querySelector("img").src = "image/icon-plus.svg";
    secondButton.querySelector("img").src = "image/icon-plus.svg";
    thirdButton.querySelector("img").src = "image/icon-plus.svg";
    fourthButton.querySelector("img").src = "image/icon-plus.svg";
}



firstButton.addEventListener("click", () => {
    const isHidden = firstAnswer.classList.contains("hidden");

    closeAllAnswers();

    if (isHidden) {
        firstAnswer.classList.remove("hidden");
        firstButton.querySelector("img").src = "image/icon-minus.svg";
    }
});



secondButton.addEventListener("click", () => {
    const isHidden = secondAnswer.classList.contains("hidden");

    closeAllAnswers();

    if (isHidden) {
        secondAnswer.classList.remove("hidden");
        secondButton.querySelector("img").src = "image/icon-minus.svg";
    }
});



thirdButton.addEventListener("click", () => {
    const isHidden = thirdAnswer.classList.contains("hidden");

    closeAllAnswers();

    if (isHidden) {
        thirdAnswer.classList.remove("hidden");
        thirdButton.querySelector("img").src = "image/icon-minus.svg";
    }
});



fourthButton.addEventListener("click", () => {
    const isHidden = fourthAnswer.classList.contains("hidden");

    closeAllAnswers();

    if (isHidden) {
        fourthAnswer.classList.remove("hidden");
        fourthButton.querySelector("img").src = "image/icon-minus.svg";
    }
});