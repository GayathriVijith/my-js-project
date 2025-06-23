Promise.myAny = function(values){
    return new Promise((resolve, reject) => {
       let result = [];
       let total = 0;
       if(values.length === 0){
        reject( new AggregateError(result, "No promises were provided"));
       }
       values.forEach((item, index) => {
        Promise.resolve(item)
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
           result[index] = error;
           total++;
           if(total === values.length){
               reject(new AggregateError(result, "All Promise were rejected"));
           }
        });
       });
    });
}

let promises1 = [Promise.resolve(1),
    Promise.reject(new Error("Failed")),
    Promise.resolve(3),
];

Promise.myAny(promises1)
.then((result) => {
    console.log("Resolved Successfully", result);
})
.catch((err) => {
    console.log("Rejected", err.message);
})

let promises2 = [Promise.reject(new Error("Failed")),
    Promise.reject(new Error("Error")),
    Promise.reject(new Error("Problem")),
];

Promise.myAny(promises2)
.then((result) => {
    console.log("Resolved Successfully", result);
})
.catch((err) => {
    console.log("Rejected", err.errors.length, "errors");
})