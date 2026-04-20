const firstAnswer = document.getElementById("first-answer");
const secondAnswer = document.getElementById("second-answer");
const thirdAnswer = document.getElementById("third-answer");
const fourthAnswer = document.getElementById("fourth-answer");
const firstButton = document.getElementById("first-button");
const secondButton = document.getElementById("second-button");
const thirdButton = document.getElementById("third-button");
const fourthButton = document.getElementById("fourth-button");

firstButton.addEventListener("click", () => {
    firstAnswer.classList.toggle("hidden");

    const img = firstButton.querySelector("img");

    if (firstAnswer.classList.contains("hidden")) {
        img.src = "image/icon-plus.svg";
    } else {
        img.src = "image/icon-minus.svg";
    }
});

secondButton.addEventListener("click", () => {
    secondAnswer.classList.toggle("hidden");

    const img =secondButton.querySelector("img");

    if (secondAnswer.classList.contains("hidden")) {
        img.src = "image/icon-plus.svg";
    } else {
        img.src = "image/icon-minus.svg";
    }
});

thirdButton.addEventListener("click", () => {
    thirdAnswer.classList.toggle("hidden");

    const img = thirdButton.querySelector("img");

    if (thirdAnswer.classList.contains("hidden")) {
        img.src = "image/icon-plus.svg";
    } else {
        img.src = "image/icon-minus.svg";
    }
});

fourthButton.addEventListener("click", () => {
    fourthAnswer.classList.toggle("hidden");

    const img = fourthButton.querySelector("img");

    if (fourthAnswer.classList.contains("hidden")) {
        img.src = "image/icon-plus.svg";
    } else {
        img.src = "image/icon-minus.svg";
    }
});