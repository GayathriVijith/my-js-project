// // map transforms the data, i.e I/P array same as O/P array with modified values
// const arr = [1, 2, 3];
// const result = arr.map((item) => item * 2);
// console.log(result);

// //check if Array. prototype.myMap is already defined
// if(!Array.prototype.myMap){ //custom name for map
//     Array.prototype.myMap = function(callback, thisArg){ //if map doesn't exist on prototype, 
// // we define a func. on prototype and call it myMap
// //first parameter callback that is passed should be a func. so it executes on each of the array element.
// //second parameter thisArg is a context
// //check if callback is a func.
// if(typeof callback !== 'function'){
//    throw new TypeError(`${callback} is not a function`);
// }
// //output array same size as i/p array
// const val = new Array(this.length); //this - as we are calling map method 'this' is 'arr'-i/p array. 
// // this.length-arr.length
// /**loop through the i/p array
//  * call the callback func. on each of the array elements, curr. item, index and i/p array
//  * push the result in the o/p array
//  */
// for(let i = 0; i < this.length; i++){
//     //process the i/p value with the callback func. check if index exist, incase of sparse arr.
//     if(i in this) { //i-index, this-arr. If i is defined in the array, then do processing
//         const context = thisArg ? thisArg : this; //user may or may not pass 'thisArg', so handle that case also.
//         /**if 'thisArg' is passed take that otherwise take 'this' as context. 
//         * If user specifically changing the context then take that context otherwise take 'this' context only */
//     // const mappedValue = callback.call(thisArg, this[i], i, this)//mappedValue-transformed value, callback() is a func., directly invoke the func.
//     const mappedValue = callback.call(context, this[i], i, this)//changing 'thisArg' with context.
//     /**callback(parameters) - while using map all the parameters aren't passed, 
//      * but while implementing all the parameters should be passed.
//      * map method will run for each of the elements in the array, apply callback func.
//      * for each of the i/p element callback func. -(item) => items * 2 will run. */
//     val[i] = mappedValue; //storing/processing the updated value
//     }
//     //thisArg argument is passed where 'this' is a context, code should accept thisArg anytime and process.
//     //to invoke a func. using particular context use 'call' or 'apply'.
//     //'call' helps to accept 'thisArg' and use it anytime.
//     //multiply by 2, callback will pass at the end.
//     return val;
//     //sparse array: one or more elements are not defined.
//     //while creating polyfills for arrays remember to write code for sparse array.
//     //user may or may not pass 'thisArg'
// }

//     }
// }
// const arr1 = [1, 2, 3, 4];
// delete arr1[1];
// console.log(arr1);

const arr = [1, 2, 3, 4];
const res = arr.map((item) => item * 2);
console.log("Map values:", res);

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback, thisArg){
        if(typeof callback !== 'function'){
            throw new TypeError(callback + 'is not a function');
        }

        const val = new Array(this.length);

        for(let i = 0; i < this.length; i++){
            if(i in this){
            const context = thisArg ? thisArg : this;
            const mappedValue = callback.call(context, this[i], i, this);
            //to invoke the context call() used. .call(context, ...) method explicitly 
            //sets the this inside the callback function to context.
            val[i] = mappedValue;
        }
    }
    return val;   
    }
}
const arr1 = [1, 2, 3, 4];
delete arr[1];
console.log("Values:", arr);
const data = arr.myMap((item) => item * 2);
console.log("Polyfills value:", data);

// //In case of thisArg
const thisArg = { multiplier: 2 };
const ans = [1, 2, 3].map(function (element) {
return element * this.multiplier;
}, thisArg); // `this` in the callback is set to `thisArg`
console.log("thisArg Value:", ans); // [2, 4, 6]