// const arr = [1, 2, 3, 4];
// const res = arr.filter((item) => item > 2); //implicit return as using arrow func., no need to return manually
// console.log(res);

// if(!Array.prototype.myFilter){
//     Array.prototype.myFilter = function(callback, thisArgs){
//         if(typeof callback !== 'function'){
//             throw new TypeError(callback + "is not a function");
//         }
//         const result = [];

//         for(let i = 0; i < this.length; i++){
//             if(i in this){
//             const context = thisArgs ? thisArgs : this;
//             if(callback.call(context, this[i], i, this)){
//             result.push(this[i]);
//     }
// }
//     }
//     return result;
//     };
// }
// const arr1 = arr.myFilter((item) => item > 2);
// console.log(arr1);

// var arr = [1, 2, 3, 4];
// var res = arr.filter(function(number){
//     return number % 2 === 0; //regular func. expects manual return, explicit return
// });
// console.log(res);

// if(!Array.prototype.myFilter){
//     Array.prototype.myFilter = function(callback, thisArgs){
//         if(typeof callback !== 'function'){
//             throw new Error(callback + "is not a function");
//         }
//         const result = [];

//         for(let i = 0; i < this.length; i++){
//             if(i in this){
//                 const context = thisArgs ? thisArgs : this;
//             if(callback.call(context, this[i], i, this)){
//             result.push(this[i]);
//         }
//     }
// }
//     return result;
//     };
// }
// const arr1 = arr.myFilter(function(number){
//     return number % 2 === 0;
// });
// console.log(arr1);