const originalObj = {
    name: "Gayathri",
    details :{
        age: 33,
        hobbies:["reading", "cooking", "music"],
    },
    greet(){
        console.log(`Hello my name is ${this.name}!`);
    }
};
function deepClone(obj) {
     if(obj === null || typeof obj != "object")
        return obj;

if(obj instanceof Array) {
    let copy =[];
    for(let i = 0; i < obj.length; i++){
        copy[i] = deepClone(obj[i]);
    }
    return copy;
}
if(obj instanceof Function){
    return obj.bind({});
}
if(obj instanceof Object){
    let copy = {};
    for(let key in obj){
        copy[key] = deepClone(obj[key]);
    }
    return copy;
}
throw new Error("Unable to copy object. It's type is not supported");
}
const cloneObj = deepClone(originalObj);
cloneObj.greet();
cloneObj.name = "Aadhvik";
cloneObj.details.age = 4;
console.log(originalObj.name);
console.log(originalObj.details.age);

// const originalObj = {
//     name: "Alice",
//     details: {
//     age: 30,
//     hobbies: ["reading", "cycling", "hiking"]
//     },
//     greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//     }
//     };
//     function deepClone(obj) {
//     if (obj === null || typeof obj !== "object") {
//     return obj;
//     }
//     if (obj instanceof Array) {
//     let copy = [];
//     for (let i = 0; i < obj.length; i++) {
//     copy[i] = deepClone(obj[i]);
//     }
//     return copy;
//     }
//     if (obj instanceof Function) {
//     return obj.bind({});
//     }
//     if (obj instanceof Object) {
//     let copy = {};
//     for (let attr in obj) {
//     if (obj.hasOwnProperty(attr)) {
//     copy[attr] = deepClone(obj[attr]);
//     }
//     }
//     return copy;
//     }
//     throw new Error("Unable to copy obj! Its type is not supported.");
//     }
//     // Clone the object
//     const clonedObj = deepClone(originalObj);
//     // Test the method
//     clonedObj.greet(); // Should output: "Hello, my name is Alice!"
//     // Verify that changes to the cloned object do not affect the original
//     clonedObj.name = "Bob";
//     clonedObj.details.age = 25;
//     console.log(originalObj.name); // Outputs: "Alice"
//     console.log(originalObj.details.age); // Outputs: 30
