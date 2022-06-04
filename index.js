
const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("res")

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
          if(e.target.id === "reset") {
              result.textContent = "";
          }
          else {
              result.textContent += e.target.id;
          }
  });  
});

equal.addEventListener("click", () => {
    result.textContent = eval(result.textContent);
});