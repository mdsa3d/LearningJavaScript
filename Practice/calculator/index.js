let num1 = 4;
let num2 = 5;
document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerText = num2;
let sumEl = document.getElementById("result-el");

function add() {
    let val = num1 + num2;
    sumEl.textContent = "Sum: " + val;
}
function subtract() {
    let val = num1 - num2;
    sumEl.textContent = "Subtract: " + val;
}
function multiply() {
    let val = num1 * num2;
    sumEl.textContent = "Multiply: " + val;
}
function divide() {
    let val = num1 / num2;
    sumEl.textContent = "Multiply: " + val;
}
