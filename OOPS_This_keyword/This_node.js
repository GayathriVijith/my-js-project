// // //Non-Strict Mode
// //Scenario 1 Global level
// console.log("Scenario 1:");
// console.log(this); // {} empty obj

//  //Scenario 2 Regular Invocation
//  console.log("Scenario 2:");
//  function fnGlobal(){
//     console.log(this); // global obj
//  }
//  fnGlobal();

//  //Scenario 3 Method Invocation
//  console.log("Scenario 3:");
//  var obj = {
//     fn: function(){
//         console.log(this); // obj itself
//     }
//  }
//  obj.fn();

//  //Scenario 4 Nested Function Invocation
//  console.log("Scenario 4:");
//  var obj2 = {
//     fn: function() {
//         console.log(this); //obj itself
//         var nestedFn = function(){
//             console.log(this); //global obj
//         };
//         nestedFn();
//     }
//  };
//  obj2.fn();

//-----------------------------------------------------------------

//Strict Mode

// "use strict";
// //Scenario 1 Global Level
// console.log("Scenario 1:");
// console.log(this); //{} empty obj

// //Scenario 2 Regular Invocation
// console.log("Scenario 2:");
// function exampleFunction(){
//     console.log(this); //undefined
// }
// exampleFunction();

// //Scenario 3 Method Invocation
// console.log("Scenario 3:");
// var obj = {
//     prop: 'I am a property',
//     fn: function(){
//         console.log(this.prop); //Obj itself
//     }
// };
// obj.fn();

// //Scenario 4 Nested Function Invocation
// console.log("Scenario 4:");
// var obj2 = {
//     prop: 'I am a property',
//     fn: function(){
//      console.log(this);
//     var nestedFunction = function(){
//         console.log(this); //undefined
//     }
//     nestedFunction();
//   }
// };
// obj2.fn();

// const car = {
//     make: "Toyota",
//     engine: {
//     make: "Toyota",//this is printed
//     start: function(){
//         console.log(`Car started: ${this.make}`);
//     }
//     }
//   };
//   car.engine.start();
// ------------------------------------------
// global.nickName = "Adi";
// const joe = {
//     nickName: "Joey",
//     arrow: () => {
//         console.log(`arrow: ${global.nickName}`); //Node.js, this at the top level of a 
//         // module, ${this.nickName} this does not refer to global — it refers to 
//         // an empty object ({}).
//     },
//     fn: function(){
//         console.log(`function: ${this.nickName}`);
//     }        
// }

// // window.nickName = "Gayu"; // This line is commented out

// joe.arrow();
// joe.fn();

// console.log("typeof this in outer scope:", typeof this);
// console.log("value of this in outer scope:", this);