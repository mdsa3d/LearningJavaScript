// document.getElementById("count-el").innerText = "5";

// initialise the count as 0
let count = 0;
let saveCount = 0;
// get the element with the id of count-el (dom manipulation)
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
// define a increment function
function increment () {
    count += 1; // increment the count
    countEl.innerText = count; // change the inner text of the element with the id of count-el
}

// create a function to save or log the count
function save() {
    if (saveCount == 0) {
        countStr = count;
    } else {
        countStr = "-" + count ;
    }
    saveEl.innerText += countStr
    countEl.textContent=0; //textContent is the same as innerText 
    count=0;
    saveCount += 1;
    console.log("the button was clicked, count = " + count);
}