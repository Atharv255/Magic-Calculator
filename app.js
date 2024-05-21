let inputValue = prompt("Enter a number for a special surprise:");
let inputURL = prompt("Enter a URL to open if the result matches the number:");

let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;

    if (result == inputValue) {
      window.open(inputURL, "_blank");
    }
  } catch (e) {
    display.value = "Error";
  }
}
