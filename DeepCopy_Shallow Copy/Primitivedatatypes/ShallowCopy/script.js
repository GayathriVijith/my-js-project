// let numOne = 50;
// const numTwo = 100;
// numOne = 150;
// console.log(numOne);
// console.log(numTwo);
// ------------------------------------------------
// let object1 = {
//     name: "Gayathri",
//     age: 33
// }
// let object2 = object1;
// object1.age = 30;
// console.log(object1);
// console.log(object2);
// ----------------------------------------------------
let zoo = {
    name: "Amazing Zoo",
    location: "Melbourne, Australia",
    animals: [
        {
            species: "lion",
            favoriteTreat: "burger",
        },
        {
            species: "Panda",
            favoriteTreat: "leaf",
        },
    ]
}

const shallowCopyZoo = {...zoo}; //creating a copy of zoo object
console.log(shallowCopyZoo);
shallowCopyZoo.location = "Kerala, India"; //only copy of the obj location changes, not the original obj
console.log(zoo);
console.log(shallowCopyZoo);
shallowCopyZoo.animals[0].favoriteTreat = "meat";//original obj's animal property changes, 
// because this is shallow copy, only upper part gets duplicated and not deeper.
console.log(zoo.animals);
console.log(shallowCopyZoo.animals);
console.log(zoo.animals === shallowCopyZoo.animals);
console.log(zoo === shallowCopyZoo);
