const arr = [1, 2, 3,, 4, 5];
const sum = arr.reduce((acc, curr) => acc + curr, 10);
console.log(sum);

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callback, initialValue){
        if(typeof callback !== 'function'){
            throw new TypeError(callback + 'is not a function');
        }
        //empty array with no initial value
        if(this.length == 0 && arguments.length == 1){
            throw new TypeError('reduce of empty array with no initial value');
        }
        //set the initial index and accumalator
        let accu = arguments.length == 1 ? this[0] : initialValue;
        let startIndex = arguments.length == 1 ? 1 : 0;
        for(let i = startIndex; i < this.length; i++){
            if(i in this){
                accu = callback(accu, this[i], i, this);
            }
        }
        return accu;
    }
}

const arr1 = [1, 2, 3, 4, 5];
const res1 = arr1.myReduce((acc, curr) => acc + curr, 10);
console.log(res1);

//If arguments.length == 1, means it has no initial value, it has only acc and curr.
//In that case set accu value and start index.
//If length == 1, then acc will be the 0th index of the I/P array and 
//start index will be the 1st index of the I/P array.