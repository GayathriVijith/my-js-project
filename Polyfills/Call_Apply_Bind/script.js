// const person1 = {
//     name: "Mr.X",
//     age: 25,
//     printNameAndAge: function(location){
//         console.log(`I am ${this.name} and I am ${this.age} years old I live in ${location} `);
//     },
// };

// const person2 = {
//     name: "Mr.Y",
//     age: 27,
// };
// person1.printNameAndAge('New York');
// person1.printNameAndAge.call(person2, 'USA');
// ----------------------------------------------------

// const person1 = {
//     name: "Mr.X",
//     age: 30,
//     describe: function(location, hobby){
//         console.log(`I am ${this.name} I am ${this.age} years old I live in ${location} I like to play ${hobby}`);
//     }
// };

// const person2 = {
//     name: "Mr.Y",
//     age: 35
// }
// person1.describe("Chennai", "Tennis");
// person1.describe.apply(person2, ["BAngalore", "Cricket"]);
// -----------------------------------------------------------------
// const numbers = [5, 6, 7, 8];
// console.log(Math.max(numbers));
// -----------------------------------
// const numbers = [4, 5, 3, 9];
// const maxNumber = Math.max.apply(null, numbers);
// console.log(maxNumber);
// -----------------------------------
// const maxNumbers = Math.max.call(null, 5, 6, 7, 8);
// console.log(maxNumbers);
// -----------------------------------------------------
// const numbers = [2, 3, 4, 5];
// const maxNumbers = Math.max(...numbers);
// console.log(maxNumbers);
// ---------------------------------------
// let user = {
//     name: "Alice",
//     age: 27,
//     greet: function(){
//         console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
//     }
// };

// const user2 = {
//     name: "Bob",
//     age: 34
// }
// let boundGreet = user.greet.bind(user); //creates a new function, whrn bind() is called
// const boundGreet2 = user.greet.bind(user2);
// boundGreet();
// boundGreet2();
// // You create a new function (boundGreet) from user.greet, but explicitly bind it to the user object.
// // So when boundGreet() is called, this.name will be "Alice" and this.age will be 27.
// --------------------------------------------

// const alice = {
//     name: "Aadh",
//     age: 4,
//     bound: function(){
//         console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
//     }
// };

// const button = document.getElementById('introduceButton');
// const boundAlice = alice.bound.bind(alice);
// button.addEventListener('click', boundAlice);
