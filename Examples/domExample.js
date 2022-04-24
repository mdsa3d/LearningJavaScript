let countEl = document.getElementById("count-el"); // dom manipulation
let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count; // changing inner text of html document
}