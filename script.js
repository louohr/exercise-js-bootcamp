// Syntax n stuff
// Datatyper

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

// Block

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

// Strings

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
/* let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];

let containsEwa = names.includes("Ewa");
console.log(containsEwa); */
// prints out false

// Loops

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

// 26
fruits.forEach((fruit, index) => {
  console.log(`${index}. ${fruit}`);
});

// 27
const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let deck = [];

suits.forEach((suit) => {
  values.forEach((value) => {
    deck.push(`${suit}. ${value}`);
  });
});

console.log(deck);

// Objects

// 28
let book = {
  title: "Odysseus",
  author: "James Joyce",
  genres: "Drama",
  ratings: [1, 2, 3, 4, 5],
};

// 29
/* let person = {
  name: "Sixten Faceplant",
  email: "sixten.faceplant@zocom.se",
  role: "ninjah",
  adress: {
    street: "Karatevägen 3",
    zip: "41477",
    city: "Kablam City",
  },
};

console.log(person.adress.city); */

// 30
// Three methods to clone
/* // Spread Method
let clone = { ...userDetails }

// Object.assign() Method
let clone = Object.assign({}, userDetails)

// JSON.parse() Method
let clone = JSON.parse(JSON.stringify(userDetails)) */

const userDetails = {
  name: "Bob",
  ocupation: "Builder",
  age: 35,
};

let cloneUser = { ...userDetails };

console.log(cloneUser);

// 31
let dog = {
  name: "Buster",
  breed: "Golden retriever",
  bark: function () {
    return `Woof, my name is ${this.name}!`; // this, to define this name and not another name
  },
};

console.log(dog.bark());

// 32
let person = {
  name: "sixten",
  email: "sixten@zocom.se",
  role: "ninjah",
  age: 32,
};

for (let key in person) {
  console.log(`${key} - ${person[key]}`);
}

// Functions

// 33
function add(x, y) {
  return x + y;
}

// Example usage
const result = add(5, 3);
console.log(result);

// 34
const explainDifference = function () {
  return "A named function has a specific name identifier and can be called by that name throughout the code. An anonymous function does not have a name and is often used as a function expression or passed as an argument to other functions.";
};

// Example usage
console.log(explainDifference());

// 35
function getYear(dateString) {
  // Check if the input string is exactly 10 characters long and follows the 'YYYY-MM-DD' format
  if (dateString.length === 10 && dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
    // Extract and return the year part from the date string
    return dateString.slice(0, 4);
  } else {
    throw new Error("Invalid date format. Please use 'YYYY-MM-DD'.");
  }
}

// Example usage
console.log(getYear("2019-10-14"));

// 36
function calcThis(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error("Divided by zero is not allowed.");
      }
    default:
      throw new Error("Invalid operator. Please use '+', '-', '*', or '/'");
  }
}

console.log(calcThis(1, 2, "+")); // Output: 3
console.log(calcThis(1, 2, "-")); // Output:-1
console.log(calcThis(1, 2, "*")); // Output: 2
console.log(calcThis(1, 2, "/")); // Output: 2

// Conditionals

// 37
function comapareThis(num1, num2) {
  return num1 === num2;
}

// Example usage:
console.log(comapareThis(1, 1));
console.log(comapareThis(3, 1));

// 38
function between(num) {
  return num >= 20 && num <= 40;
}

// Example usage:
console.log(between(30)); // Output: true
console.log(between(50)); // Output: false
console.log(between(20)); // Output: true
console.log(between(40)); // Output: true
console.log(between(19)); // Output: false
console.log(between(41)); // Output: false

// 39
function getMeTheLongestArr(arr1, arr2) {
  // Compare the lengths of the two arrays and return the longer one
  if (arr1.length >= arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
}

// Example usage;
console.log(getMeTheLongestArr([1, 2], ["A", "B", "C"])); // Output: ['A', 'B', 'C']
console.log(getMeTheLongestArr(["X", "Y"], ["A", "B"])); // Output: ['X', 'Y']
console.log(getMeTheLongestArr([], [1, 2, 3])); // Output: [1, 2, 3]

// Math objects
// 40
const number = 1337.51;
const roundedDown = Math.floor(number);

console.log(roundedDown); // Output: 1337

// 41
const number2 = 1337.48;
const roundedUp = Math.floor(number);

console.log(roundedUp); // Output: 1337

// 42
const number3 = 1337.497;
const rounded = Math.round(number);

console.log(rounded); // Output: 1338

// 43
function random(max) {
  return Math.floor(Math.random() * max);
}

// Example usage:
console.log(random(1000)); // Outputs a random integer between 0 and 1000

// 44
function randomPassword(n) {
  // Define the characters to choose from
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let password = "";

  // Generate a random password of length n
  for (let i = 0; i < n; i++) {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Example usage:
console.log(randomPassword(7));

// 45
function randomName(names) {
  // Generate a random index based on the length of an array
  const randomIndex = Math.floor(Math.random() * names.length);
  // Return the name at the randomly generated index
  return names[randomIndex];
}

// Example usage:
const names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
console.log(randomName(names)); // Outputs a random name from the array

// Program Flow
// 46
/* let getData = function (url) {};
function getData() {}

// function expression and function declaration
// Function Declaration - can be called before it's defined
console.log(declaredFunction()); // Output: 'Hello'
function declaredFunction() {
  return "Hello";
}

// Function Expression - cannot be called before it's defined
console.log(expressionFunction()); // Throws TypeError: expressionFunction is not a function
let expressionFunction = function () {
  return "World";
}; */

// 47
// Execute
HelloAgainAgain();

function hello() {
  console.log("Hello!");
}

function helloAgain() {
  console.log("Hello Again!");
  hello();
}

function HelloAgainAgain() {
  console.log("Hello Again Again!");
  helloAgain();
}

//Output will be:
/* Hello Again Again!
Hello Again!
Hello! */

// 48

// right flow
/* let pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];
function printPokemons() {}
for (let i = 0; i <= pokemons.length; i++) {}
console.log("One awesome pokemon is " + pokemons[i]);
printPokemons(); */

// 49
/* function reverseString(str) {
  let newString = ""; // Initialize an empty string to store the reversed string
  let i = str.length - 1; // Start from the last character of the input string

  // Loop through the string backwards
  for (; i >= 0; i--) {
    newString += str[i]; // Append each character to newString
  }

  return newString; // Return the reversed string
}

// Example usage:
console.log(reverseString("hello")); // Output: 'olleh' */

// 50
// pending: the promise has been created, and the asynchronous function it's associated with has not succeded or failed yet.
// This is the state you promise is in when it's returned from a call to fetch(), and the request is still being made.
// fulfilled: the asynchronous function has succeeded
// rejected: the asynchronous function has failed

// 51
/* getData(url);
then((data) => {
  console.log(data);
}).catch((error) => {
  console.error("Error fetching data:", error);
});
 */

// 52
/* async function getData(url);
then((data) => {
  console.log(data);
}).catch((error) => {
  console.error("Error fetching data:", error);
}); */

// API-interaktion med fetch

// 53
/* const url = `https://api.chucknorris.io/jokes/random`;

async function chuckMe(url) {
  try {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`);
    }
    let data = await response.json();
    console.log(data.value);
  } catch (error) {
    console.log("Error fetching joke:", error);
  }
}

chuckMe(url); */

// 54
const url = `https://jsonplaceholder.typicode.com/posts`;

let data = {
  id: 1,
  joke: "How many ears does Spock have? - Three; Left, right and the final front ear.",
  funny: true,
};

async function postJoke(url, data) {
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error posting joke:", error);
  }
}

postJoke(url, data);

// 55 ?
/* async function updateJoke(url, data) {
  try {
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error posting joke:", error);
  }
}

updateJoke(url, data); */

// DOM manipulation

// 56

// The code is in the html file

// Select the first h2 element
let h2Element = document.querySelector("h2");

// Get the contents of the h2 element
let h2Content = h2Element.textContent;

// Display the contents
console.log(h2Content);

// 57
let liElement = document.querySelector("ul > li:nth-child(3)");
let liContent = liElement.textContent;

console.log(liContent);

// 58
const liElements = document.querySelectorAll("ul > li");

liElements.forEach((li) => {
  li.textContent = li.textContent.toUpperCase();
});

// Value from input
// 59

// Select the input element by its id
let emailInput = document.getElementById("email");

// Get the value of the input field
let emailValue = emailInput.value;

// Log the value to the console
console.log(emailValue);

// 60
/* let selectElement = document.getElementById("option");

let selectedValue = selectElement.value;

let selectedText = selectElement.options[selectElement.selectedIndex].text;

console.log("Selected value:", selectedValue);
console.log("Selected text:", selectedText);
 */
