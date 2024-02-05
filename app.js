let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
//   let enteredText = inputElement.value; --> This and the variable below execute the same way but uses an external value
let enteredText = event.target.value
  console.log(enteredText);
//   console.log(event)
}

inputElement.addEventListener("input", retrieveUserInput);
