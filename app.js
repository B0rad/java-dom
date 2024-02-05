// document.body.children[1].children[0].href = 'https://www.google.ca';

let anchorElement = document.getElementById("external-link");
anchorElement.href = 'https://www.red.com';

document.querySelector('a'); // this is a CSS element selector
anchorElement.href = 'https://www.wittentechnology.com';


//ADD AN ELEMENT
// 1 . Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = "https://reddit.com";
newAnchorElement.textContent = "this leads to the worst place on the webbernets"


// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p')

// 3 . Insert the new element into the parent element content

firstParagraph.append(newAnchorElement)

//REMOVE ELEMENTS
// 1. Select element(s) to be removed

let firstH1Element = document.querySelector('h1');

// 2. Remove it

firstH1Element.remove()

//Move elements around the page

firstParagraph.parentElement.append(firstParagraph)

// innerHTML

console.log(firstParagraph.innerHTML)
firstParagraph.innerHTML = 'Hi. THis is <strong>important</strong>'