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
    if (remainingCharacters <= 10) {
        remainingCharsElement.classList.add('warning')
        productNameInputElement.classList.add('warning')
    } else {
        remainingCharsElement.classList.remove('warning')
        productNameInputElement.classList.remove('warning')
    }
}



productNameInputElement.addEventListener('input', updateRemainingCharacters)

if (10 > remainingCharsElement) {
    console.log('it worked')
}