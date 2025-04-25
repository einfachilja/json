
// kein valides JSON, sondern Object
let myObject = {
    "name": "Ilja",
    job : function () {
        console.log("no job!");
    }
};

myObject.job();

// valides JSON, da Syntax "" und Key/Value Pairs korrekt
let mySJON = {
    "name": "Paul",
    "age": 24,
    "good_guy": true
};

console.table(mySJON)