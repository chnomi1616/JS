// primitivive data types
let age = 22;               // Number
let name = "Zeeshan";       // String
let isOnline = true;        // Boolean
let x;                      // Undefined
let empty = null;           // Null
let big = 123456789123n;    // BigInt
let id = Symbol("userID");  // Symbol

// console.log(typeof age);          // number
// console.log(typeof name);         // string
// console.log(typeof isOnline);     // boolean

// non-primitive data types

let user = { name: "Noman", age: 25 }; // Object
let fruits = ["apple", "banana"];      // Array
function greet() { console.log("Hi"); } // Function
let today = new Date();                // Date

let a = "50";
let b = Number(a);   // ?
let c = Boolean(b);  // ?

console.log(typeof b); // ?
console.log(c);        // ?
