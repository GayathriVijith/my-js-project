let car = {
    name: "Mercedes",
    color: "Red",
};

function buyCar(price){
    console.log(`I bought a ${this.color} ${this.name} car of ${price}`);
}
buyCar.call(car, 50);

Function.prototype.myCall = function(context = {}, ...args){  
    console.log(this);
    if(typeof this != "function"){
        throw new Error(this + "is not callable");
    }
    context.myFunction = this;
    context.myFunction(...args); 
};
buyCar.myCall(car, "5Crore");