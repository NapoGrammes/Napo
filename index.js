const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

btn1.addEventListener("click", () => {
    response.style.visibility = "visible";
    questionContainer.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.style.visibility = "visible";
    questionContainer.style.background = "red";
});