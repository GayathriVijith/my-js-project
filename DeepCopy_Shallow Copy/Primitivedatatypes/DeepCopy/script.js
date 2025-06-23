// const zoo = {
//     name: "amazing Zoo",
//     location: "Melbourne, Australia",

// animals:[
//     {
//         species: "Lion",
//         favouriteTreat: "burger"
//     },
//     {
//         species: "Panda",
//         favouriteTreat: "leaf"
//     }
// ],

// greet: function(){
//     console.log(`Welcome to ${this.name}!`);
// }
// }
// const zooString = JSON.stringify(zoo);
// console.log(zooString); //flattened obj
// const deepCopy = JSON.parse(zooString);
// console.log(deepCopy); //copy of original obj
// deepCopy.animals[0].favouriteTreat = "Meat";
// console.log(zoo.animals); //original obj, no changes
// console.log(deepCopy.animals); //copy obj is updated
// console.log(zoo.animals === deepCopy.animals);


// console.log(2 === '2'); //checks for data-type and value behind the scene the right data-type 
// // is converted to the left data-type (i.e) string is converted to number 
// // and then value is checked. This is called type-coersion.
// console.log(2 == '2'); //checks for value, 


// List of falsy values
// const falsyValues = [false, 0, -0, "", null, undefined, NaN];
// // Test each falsy value in an if statement
// falsyValues.forEach((value) => {
// if (value) {
// console.log(`${value} is truthy`);
// } else {
// console.log(`${value} is falsy`);
// }
// });


function greet(name) {
name = name || "Guest";
console.log(`Hello, ${name}!`);
}