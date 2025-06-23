Promise.myAll = function(values) { //Promise-constructor func. which is also an obj, 
// myAll-static method, func.(values)-func. which takes i/p value which will be 
// an array of promises
return new Promise((resolve, reject) => { //new promise- to return instance of promise, 
//oly in instance of promise we can consume .then, .catch instance methods
let result = []; //for each of the i/p promise, there will be a final o/p, 
// to strore the resolves values
let total = 0; //to keep track of number of resolved promises
if (values.length === 0) resolve([]); //if initial values items are 0
values.forEach((items, index) => { //items-are promise.iterate on each of the promise 
// and capture the index. index-the order of the result should be the same in 
// which promises got triggered.
Promise.resolve(items) //to resolve promise, directly call the resolve static 
// method on the promise constructor func., safety check, whether the item 
// returning a promise. array might have a non-promise value, then this will 
// return a promise value. also when promise resolves 2 things happen either 
// success or reject. manually trying to resolve each of the promise. 
// for each of the promises we are trying to resolve, on resolve 2 things happen res, rej
.then((res) => {
    result[index] = res; //if promise resolves store the result in appropriate index
    total++; //increase the counter
    //when to call the final resolve, when the res length is equal to the total items
    if(total === values.length){
        resolve(result);
    }
})
.catch((err) => {
    reject(err); //call the reject callback as soon as any 1 promises reject.
   });
  });
});
return promise;
}

//consume promise.all
let promises1 = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
Promise.myAll(promises1)
.then((results) => console.log("All resolved:", results))
.catch((error) => console.error("Rejected:", error.message));

let promises2 = [
    Promise.resolve(10),
    Promise.reject(new Error("Failed")),
    Promise.resolve(30),
];
Promise.myAll(promises2)
.then((results) => console.log("All resolved:", results))
.catch((error) => console.error("Rejected:", error.message));
