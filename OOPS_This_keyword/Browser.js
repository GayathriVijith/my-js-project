// function Car(make, model) {
//  this.make = make; 
//  this.model = model; 
//  this.displayInfo = function() { 
//     console.log(`Car: ${this.make} ${this.model}`); 
// }; 
// }
// const myCar = new Car("Toyota", "Corolla"); 
// myCar.displayInfo(); // Outputs: Car: Toyota Corolla
// -------------------------------------------------------------
// function greet(){
//     console.log(`Hi, my name is ${this.name}`);
// }
// const user = {name:'Alice', greet: greet}; //user is an obj. As greet func. is not defined
// // in user obj, it throws an error. without using "greet: greet" simply calling greet 
// // "user.greet();" throws an error
// const admin = {
//   name:'Bob',
//   greet
// };
// user.greet();
// admin.greet();
//-------------------------------------------------------------------------

//Non-Strict Mode
//Scenario 1 Window Obj
// console.log("scenario 1:");
// console.log(this);

// //Scenario 2 Window Obj
// console.log("scenario 2:");
// function exampleFunction(){
//     console.log(this);
// }
// exampleFunction();

// //Scenario 3 Obj itself
// console.log("scenario 3:");
// var obj = {
//     prop: "I am a property",
//     fn: function(){
//         console.log(this.prop);
//     }
// };
// // console.log(obj.prop);
// obj.fn(); //method invocation

// //Scenario 4
// console.log("scenario 4:");
// var obj = {
//     prop: 'I am a property',
//     fn: function(){
//        console.log(this);
//        var nestedFunction = function(){
//            console.log(this);//window obj
//            console.log(this.prop);//there's no property called prop on window - undefined
//        };
//        nestedFunction();
//   }
// };
// window.prop = "some val";
// obj.fn();
// // ----------------------------------------------
//// Strict Mode
// "use strict";
// // Scenario 1 Global Level
// console.log("Scenario 1:");
// console.log(this); //Window Obj

// // Scenario 2 Regular Invocation
// console.log("Scenario 2:");
// function test(){
//     console.log(this); //undefined
// }
// test();

// //Scenaario 3 Method Invocation
// console.log("Scenario 3:");
// var obj = {
//     prop: 'I am a property',
//     fn: function(){
//         console.log(this.prop); //obj itself
//     }
// };
// obj.fn();

// Scenario 4 Nested Function Invocation
// console.log("Scenario 4:");
// var obj2 = {
//     prop: 'I am a property',
//     fn: function(){
//         console.log(this); //Obj
//         var nestedFunction = function(){
//             console.log(this); //undefined
//         };
//         nestedFunction();
//     }
// };
// obj2.fn();
// const fn = obj2.fn; //copies the reference of the method fn from the obj2, 
// // detaches the function from its original object (obj2), so the context (this) 
// // is lost unless manually preserved.
// fn();
// // --------------------------------------------------------
// const add1 = (x, y) => {
//     const a = 10;
//     const val = a + x + y;
//     console.log(val);
//     return x + y;
//     };
//     const value = add1(3, 5);
//     console.log(value);
// ------------------------------------------------------------
// const double = function(x) {
//     return x * 2;
// }
// const double2q = x => x * 2;
// const val = 5;
// console.log(double(val));
// console.log(double2q(val));
// // -----------------------------------------------------------------------------
    // const joe = {
    //     nickName: "joey",
    //     arrow: () => {
    //         console.log(`arrow : ${this}`) //global obj windows
    //         console.log(`arrow : ${this.nickName}`) //undefined
    //     }, 
    //     regular: function() {
    //         console.log(`regular: ${this.nickName}`); //Obj itself
    //     }
    // };
    // joe.arrow(); //arrow func. inside an obj returns undefined
    // joe.regular(); // regular func. inside an obj returns obj itself 
// // ------------------------------------------------------------------------------ 
// const joey = {
//     nickName: "joey",
//     eventuallySayName: function() {
//         // console.log(this);
//         function actuallySayName(){
//             console.log(`first: ${this.nickName}`); //undefined (how this is undefined, 
//             // supposed to be obj), as it is a nested func. 
//             // Nested func's this - global/ window
//         }
//         const actuallySayNameWithArrow = () => {
//             console.log(`second: ${this.nickName}`); //joey, obj itself
//         };
//         setTimeout(actuallySayName,  1000);
//         setTimeout(actuallySayNameWithArrow, 1000);
//     },
// };
// joey.eventuallySayName();
// ------------------------------------------------------------------
// "use strict";
// const obj2 = {
//     name: "JS",
//     sayName: () => {
//       console.log(this.name);
//     }
//   };
//   obj2.sayName(); //undefined
// ----------------------------------
// // "use strict";
// const fn = () => {
//     console.log(this);
// }
// const fn1 = fn();//{}
// console.log(fn1);//The arrow function has no return value, so it returns undefined.
// //That undefined is assigned to fn1.
// -----------------------------------------------
// "use strict";
// const joey = {
//   nickName: "joey",
//   actuallySayName: () => {
//     console.log(`first: ${this}`);
//   },
//   actuallySayNameWithArrow: () => {
//     console.log(`second: ${this}`);
//   }
// };

// joey.actuallySayName();         // Logs: first: [object Object]
// joey.actuallySayNameWithArrow(); // Logs: second: [object Object]
// // console.log(first: ${this}`)is converting this to a string.
// // // If this is {}, then ${this} becomes [object Object] - type coersed