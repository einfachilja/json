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
/*
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
*/

// 08 - Aufgabe: findIndex-Methode
// Aufgabe Mache das Gleiche wie mit Filter auch mit findIndex(), um den Index von Justus heraus zu finden.
/*
let myObjectArr = [
    {
        "name":"Max",
        "is_a_good_guy": true 
    },
    {
        "name":"Peter",
        "is_a_good_guy": false 
    },
    {
        "name":"Arnold",
        "is_a_good_guy": true 
    },
    {
        "name":"Justus",
        "is_a_good_guy": true 
    },
    {
        "name":"Bombur",
        "is_a_good_guy": false 
    }
];

console.table(myObjectArr.findIndex((element) => {return element['name'] == 'Justus' } )); // 3
console.table(myObjectArr.findIndex((element) => element['name'] == 'Justus')); // kürzer
*/
// 09 - Verschachtelte Objekte

let library = {
  info: {
    name: "Stadtbibliothek",
    location: {
      city: "Musterstadt",
      coordinates: { lat: 48.1351, lon: 11.582 },
    },
  },
  sections: {
    fiction: [
      {
        shelf: 1,
        book: {
          title: "Die Verwandlung",
          author: {
            name: "Franz Kafka",
            born: "1883-07-03",
            died: "1924-06-03",
          },
          year: 1915,
          status: "ausgeliehen",
        },
      },
      {
        shelf: 2,
        book: {
          title: "1984",
          author: {
            name: "George Orwell",
            born: "1903-06-25",
            died: "1950-01-21",
          },
          year: 1949,
          status: "verfügbar",
        },
      },
    ],
    nonFiction: [
      {
        shelf: 3,
        book: {
          title: "Eine kurze Geschichte der Zeit",
          author: {
            name: "Stephen Hawking",
            born: "1942-01-08",
            died: "2018-03-14",
          },
          year: 1988,
          status: "verfügbar",
        },
      },
    ],
  },
};

console.log(library.info.location.city); // Standort der Bibliothek
console.table(library.sections.nonFiction[0].book.status); // verfügbar

let libraryArray = library.sections.fiction;

for (let index = 0; index < libraryArray.length; index++) {
  let bookTitle = libraryArray[index].book.title;
  console.log(bookTitle); // Die Verwandlung & 1984 
}

let libraryArray2 = library.sections.fiction;

for (let i = 0; i < libraryArray2.length; i++) {
    let authorName = libraryArray2[i].book.author.name;
    console.log(authorName);
    
}

// Was passiert hier genau?

// 1. library.sections.fiction
// 	•	Das ist der Pfad zu dem Array, das alle fiktionalen Bücher enthält.
// 	•	In deinem Beispiel sind dort zwei Objekte gespeichert, jeweils mit shelf und book.

// 2. fiction.length
// 	•	Gibt an, wie viele Elemente sich im fiction-Array befinden.
// 	•	In deinem Fall: 2 Bücher → also Schleife von 0 bis < 2.

// 3. for (let i = 0; i < ...; i++)
// 	•	Das ist eine klassische Zählschleife.
// 	•	i startet bei 0 und wird mit jedem Schleifendurchlauf um 1 erhöht.
// 	•	Die Schleife läuft so lange, wie i kleiner als die Anzahl der Bücher ist.

// 4. library.sections.fiction[i]
// 	•	Damit greifst du auf das i-te Buch-Objekt im Array zu.

// 5. .book.title
// 	•	Du gehst innerhalb des Objekts auf das book-Objekt und holst dir daraus den title.

// 6. console.log(bookTitle)
// 	•	Gibt den Titel des aktuellen Buchs in der Konsole aus.
