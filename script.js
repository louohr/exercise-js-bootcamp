// Syntax n stuff

// 1
let datatypes = ["String", "Number", "Boolean", "Object", "Undefined", "Null"];
console.log(datatypes);

// 2
/* let a = 1;
let b = "1";
if (a == b) // false */

// 3
// let name = "Greta Thunberg";
// var name = "Greta Thunberg";
// The difference between let and var is in the scope of the variables they create: Variables declared by let
// are only available inside the block where they're defined. Variables declared by var are available throughout
// the function in which they're declared

// 4
// Hur tar man reda på vad en variabel har för datatyp?
// Använda typeof operator

// 5
/* [] // A 
() // B
{} // C */ // kodblock skrivs med måsvingar (curly brackets)

// 6
/* el.on("click", () => {
  alert("Ariba!");
}); */
// koden innanför måsvingarna kommer exekveras när click-händelsen triggas på el

// 7
var greeting = "Good bye world!"; // global variabel

{
  let greeting = "Hello World"; // block-scoped variabel greeting deklareras
}

console.log(greeting); // globala variabeln greeting loggas till konsolen
// var greeting kommer exekveras för att det är en global variabel.
// let greeting existerar bara i kodblocket.

// 8
/* "Hello World" // A // Dubbelcitationstecken
'Hello World' // B // Enkelcitationstecken
`Hello World` // C */ // Backticks
// Alla dessa sätt är korrekta

// 9
let sentence =
  "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one.";
console.log(sentence.length);
console.log(`There are ${sentence.length} characters in this string`);

// 10
//let name = prompt("Vad heter du?");
let name = "Bullebo";
console.log(`Hej ${name} din gamle knasboll!`);

// Arrays

// 11
let frukter = ["Banan", "Vattenmelon", "Äpple", "Persika", "Ananas"];
console.log(frukter);

// 12
frukter.push("Kiwi");
console.log(frukter);

// 13
frukter.unshift("Vindruva");
console.log(frukter);

// 14
let nyFrukt = "Papaya";
frukter.splice(2, 0, nyFrukt);
console.log(frukter);

// 15
/* let fruits = ["apple", "orange", "pear", "kiwi"];
let clonedFruits = fruits.slice();
let pineappleIndex = clonedFruits.indexOf("pineapple");
if (pineappleIndex !== -1) {
  clonedFruits.splice(pineappleIndex, 0, "apple");
}

console.log(clonedFruits); */

// 16
let num = [1, 5, 78, 7, 122, 3, 4, 65, 40, 2, 8];
num.sort((a, b) => b - a);
console.log(num);

// 17
/* let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c); */

// 18
/* let a = ["My", "has", "many", "open"];
let b = ["brain", "to", "tabs", "!"];

let mixedArray = [];
for (let i = 0; i < a.length; i++) {
  mixedArray.push(a[i]);
  mixedArray.push(b[i]);
}
console.log(mixedArray); */

// 19
let a = [1, 2, 7, 8, 9, 10];
let b = [3, 4, 5, 6];
a.splice(2, 0, ...b);
console.log(a);

// 20
/* let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
let upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames); */

// 21
/* let names = [
  { name: "sixten", age: 32 },
  { name: "Eva", age: 19 },
  { name: "Ali", age: 67 },
  { name: "Kim", age: 13 },
  { name: "Greger", age: 30 },
  { name: "Alicia", age: 82 },
];

let filteredPeople = names.filter((person) => person.age < 30);
console.log(filteredPeople); */

// 22
let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];

let containsEwa = names.includes("Ewa");
console.log(containsEwa);
// prints out false

// 23
/* for (let i = 0; i < 1000; i++) {
  console.log("Du är på varv " + i);
}
 */

// 24
for (let i = 100; i >= 0; i--) {
  console.log("You are on the turn " + i);
}

// 25
let fruits = ["apple", "orange", "pear", "kiwi", "pineapple"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
