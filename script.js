// 06 - JSON vs. Object
// kein valides JSON, sondern Object
/*
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
*/
// 07 - JSONArray: filter-Methode
let myArray = [
    {
        "name": "Ilja",
        "good_guy": true,
        "age": 25,
        'of_legal_age': true
    },
    {
        "name": "Michael",
        "good_guy": true,
        "age": 16,
        'of_legal_age': false
    },
    {
        "name": "Daniel",
        "good_guy": false,
        "age": 17,
        'of_legal_age': false
    },
    {
        "name": "Jannik",
        "good_guy": true,
        "age": 24,
        'of_legal_age': true
    },
    {
        "name": "Arne",
        "good_guy": false,
        "age": 19,
        'of_legal_age': true
    }
];

let result = myArray.filter((element) => {return element['good_guy'] == true});
console.table(result);

let old = myArray.filter((element) => {return element['age'] < 18});
console.table(old);


