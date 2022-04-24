
let lapCompleted = 0;

function lapincrement() {
    // lapCompleted = lapCompleted + 1;
    return lapCompleted++;
}

lapincrement();
lapincrement();
lapincrement();

console.log(lapCompleted)