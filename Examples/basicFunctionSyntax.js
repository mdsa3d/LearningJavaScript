function myLogger() {
    console.log(42)
}
myLogger();

// function that takers lap and rutrn the total lap time
function lapTime() {
    let totalLapTime = lap1 + lap2 + lap3;
    return totalLapTime;
}
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;
let totalLapTime = lapTime();
console.log(totalLapTime)