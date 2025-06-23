let car = {
    name: "BMW",
    color: "white",
};
function buyCar(price, year){
    console.log(`I bought ${this.color} ${this.name} for ${price} on ${year}`);
};
const buyMyCars = buyCar.bind(car, "3crore");
buyMyCars("2020");

Function.prototype.myBind = function(context, ...boundArgs){ //You're adding a method called myBind 
// to all functions (via the prototype).
if(typeof this !== "function"){
    throw new Error(this + "is not callable");
}
const targetFunction = this;
return function(...args){ //return the called function - buyCar
       return targetFunction.apply(context, [...boundArgs, ...args]); //buyCar.apply(car, ["3crore", "2020"])
};
}
const buyMyCar = buyCar.myBind(car, "3crore");
buyMyCar("2020");

// context → the object you want to bind this to (in this case, car).
// ...boundArgs → arguments passed during binding (like "3crore").
//context = car, targetFunction = buyCar.
//This is the new function being returned by your custom myBind method.
//It’s a wrapper function.
//When you later call this function (e.g. buyMyCar("2020")), this is what gets executed.