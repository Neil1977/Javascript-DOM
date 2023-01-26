// Select the button element on the page
// In this scenario, the existing code adds an eventListener for a click event on a variable buttonElem. It expects buttonElem to be the button element in the example UI. But, that element is not selected yet.
// Assign the button element to the variable buttonElem. Click the button to verify that the code is working.
// Hint: Make use of the unique id of the button element

const buttonElem = document.getElementById("button");
buttonElem.addEventListener("click", () => {
  const oldText = buttonElem.innerText;
  return (button.innerText = oldText === "ON" ? "OFF" : "ON");
});

// Here, the existing code expects the variables 'buttonElem' and 'inputElem' to represent the button and input elements in the example UI.
// Assign the respective elements to the variables.
// In this case, the two elements do not have unique identifiers - like for example an id. Instead they are direct descendents of a div element with id 'wrapper'. Use an appropriate selector method!
// Click the button to verify that the code is working.

// assign the correct elements to the variables
const buttonElem = document.querySelector("#wrapper button");
const inputElem = document.querySelector("#wrapper input");

buttonElem.addEventListener("click", () => {
  const oldText = inputElem.value;
  return (inputElem.value = oldText === "ON" ? "OFF" : "ON");
});
