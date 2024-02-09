// let productNameInputElement = document.getElementById('product-Name');
// let remainingCharsElement = document.getElementById('remaining-chars');

// let maxAllowedChars = productNameInputElement.maxLength;

// function updateRemainingCharacters(event) {
//     let enteredText = event.target.value;
//     let enteredTextLength = enteredText.length;

//     let remainingCharacters = maxAllowedChars - enteredTextLength;

//     remainingCharsElement.textContent = remainingCharacters;
// }

// productNameInputElement.addEventListener('input', updateRemainingCharacters)
// monitorEvents(window, 'input')

const productNameInputElement = document.getElementById('product-Name');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters)