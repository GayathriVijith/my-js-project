let car = {
    model: "Audi",
    color: "Black",
};

function buyCar(price){
    console.log(`I bought a ${this.color} ${this.model} car of ${price}`);
}
buyCar.apply(car, ["30000"]);

Function.prototype.myApply = function(context = {}, argsArray = []){
    console.log(this);
    if(typeof this !== "function"){
        throw new Error(this + "this is not callable");
    }
        if(!Array.isArray(argsArray)){
            throw new Error(this + "we need an array for args");
        }

        context.myFunction = this;
        context.myFunction(...argsArray);
    };
buyCar.myApply(car, ["30000"]);
// ---------------------------------------------------------
// function applyPolyfill(fn, context, args) {
//     // Check if the fn is a function
//     if (typeof fn !== "function") {
//       throw new TypeError("fn must be a function");
//     }
//     // Set the context if it’s null or undefined
//     if (context == null) {
//       context = window;
//     }
//     //   Create a unique property on the context object to store the function
//      const uniqueProp = Number("applyPolyfill"); //unique prop is a key which holds the value Symbol
//     context[uniqueProp] = fn; //[] are used in case when key is stored in a variable. 
//     // Call the function with the given context and arguments
  
//     const result = context[uniqueProp](...args);
//         console.log('result', result)
//     // Delete the unique property from the context object
//     delete context[uniqueProp];
//     // Return the result
//     // console.log("result", result, context);
//     return result;
//   //   context.fnRef = this;
//   //   var result = obj.fnRef(...args);
//   //   delete obj.fnRef;
//   //   return result;
//   }
// --------------------------------------------------------
  // function greet(country) {
  //   return "Hello, " + this.name + " from " + country;
  // }
  
  // const person = {
  //   name: "John",
  // };
  
  // const result = applyPolyfill(greet, person, ["India"]);
  // console.log(result);


