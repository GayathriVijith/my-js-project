Promise.myRace = function(values){
    return new Promise ((resolve, reject) => {
        if(values.length === 0){
            throw new TypeError("Cannot perform Promise.race on an empty array");
        }
        values.forEach((item) => {
           Promise.resolve(item)
           .then(resolve)
           .catch(reject);
        });
    });
}
let promises1 = [Promise.reject(new Error("Failed")), Promise.resolve(1)];

Promise.myRace(promises1)
.then((res) => {
    console.log("Resolve", res);
})
.catch((err) => {
     console.log("reject", err);
})

