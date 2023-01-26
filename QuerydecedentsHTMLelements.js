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

// In this scenario, we are looking for a list of elements gathered in one variable - rather than only one element.
// Assign the list items in the view to the variable 'listItems' by using an appropriate selector method.
// Once you have completed the code below, verify it by hovering over the list items until all items have the value 'ON'

// assign the correct elements to the variable
const listItems = document.querySelectorAll("#list li");

const handleHover = (event) => {
  return (event.target.innerText = "ON");
};
if (listItems.length > 1) {
  listItems.forEach((item) => item.addEventListener("mouseover", handleHover));
}

// Execute function on button click
// The Javascript function handleText fills the input field with the words Hello World. But, there is no code to execute this function.
// Complete the existing code below such that the function is called when the button is clicked. Verify by clicking the button.

const button = document.getElementById("button");
const input = document.getElementById("input");

const handleClick = () => {
  input.value = "Hello World";
};

button.addEventListener("click", handleClick);

// Execute function when cursor moves onto element
// The Javascript function changeText changes the text inside the circle. But again, there is no code to execute this function.
// Complete the existing code below such that the function is called when the cursor moves onto the circle. Verify that your code works by hovering over the circle.

const element = document.getElementById("element");

const changeText = () => {
  element.innerText = "Thanks!";
};

// type in your code here
element.addEventListener("mouseover", changeText);

// Cursor enters and leaves element
// In this scenario we want the color of the circle to change depending on the type of cursor movement. Use the function toggleColor to turn the circle orange when the cursor moves onto it. Reuse the same function to turn it black when the cursor leaves it.
// The tricky part is that you have to call toggleColor with different values for the parameter isEntering. Verify that your code is working by hovering the circle with the mouse cursor and leaving it again.

const element = document.querySelector("#element");

const toggleColor = (isEntering) => {
  element.style.background = isEntering ? "orange" : "black";
};

// type in your code here -**CAN USE MOUSELEAVE ALSO**
element.addEventListener("mouseover", () => toggleColor(true));
element.addEventListener("mouseout", () => toggleColor(false));

// Remove element from the DOM
// You may not see it in the example UI, but underneath the red circle is a green circle. Extend the function removeRedCircle to remove the circle with id red from the DOM.
// Make sure that you really remove the element instead of just hiding it. Confirm that your code works by clicking the button.

const button = document.querySelector("#button");

const removeRedCircle = () => {
  document.querySelector("#red").remove();
};

button.addEventListener("click", removeRedCircle);

// Change id of HTML element
// In this scenario the existing code listens to a click on the button. When the button is clicked, the function changeInput is triggered. changeInput tries to select an input field with id inputEl. But, the existing input field does not have this id. Add some Javascript code to add the id inputEl to the existing input field.
// Verify that your code works by clicking the button.

const button = document.querySelector("#wrapper button");

const changeInput = () => {
  const input = document.querySelector("#inputEl");
  if (input) {
    input.value = "Hello World";
  }
};

button.addEventListener("click", changeInput);

document.querySelector("#wrapper input").id = "inputEl";

// Check the checkbox
// Your first JavaScript DOM exercise. Let's start simple.
// Extend the JavaScript code below to interact with the displayed HTML elements. Once you click the button, the checkbox should be checked.
// Confirm your code by clicking the button!

const button = document.getElementById("button");
button.addEventListener("click", () => {
  // type in your code here
  document.getElementById("checkbox").checked = true;
});

// Get full-name from inputs
// Extend the JavaScript code below to interact with the displayed HTML elements.
// This time we are looking for the full name. When the button is clicked, combine the names of the first two input fields. Insert the full name in the third input field.
// Hint: Check if your code still works if you change the first or last name.
// Confirm your code by clicking the button!

const button = document.getElementById("button");
button.addEventListener("click", () => {
  // type in your code here
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const fullName = document.getElementById("fullName");
  fullName.value = firstName.value + " " + lastName.value;
});

// Stop and restart the moving button
// This is a good exercise to learn about recursive functions. The function move in the code below moves the button 1px to the left or the right. It is recursive because it calls itself again and again. This keeps the button moving.
// Extend the JavaScript code. Once you click the button, it should stop moving. When you click it again, it should move again.
// Confirm your code by clicking the button twice.

const button = document.getElementById("button");
let stopped = false;

function move(isReturning) {
  const width = button.parentNode.clientWidth;
  const left = parseInt(button.style.left, 10) || 0;
  if (!stopped) {
    button.style.left = (isReturning ? left - 1 : left + 1) + "px";
    setTimeout(
      () =>
        move((isReturning && left > 0) || left === width - button.clientWidth),
      10
    );
  }
}

move();

button.addEventListener("click", () => {
  // type in your code here
  stopped = !stopped;
  move();
});
