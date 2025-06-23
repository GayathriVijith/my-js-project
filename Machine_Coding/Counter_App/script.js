let incrementValue = document.getElementById("increment");
let additionBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");
let resetBtn = document.getElementById("reset");
let numberValue = document.getElementById("number");
let integerValue = 1;

incrementValue.addEventListener("change", function(e){
    integerValue = parseInt(e.target.value);// gets the current value of the input field. 
    // converts this value (which is a string) into an integer and stores it in integerValue.
});
additionBtn.addEventListener("click", function(e){
    let total = parseInt(numberValue.innerText) + integerValue;
    numberValue.innerText = total;
});
subtractBtn.addEventListener("click", function(e){
    let total = parseInt(numberValue.innerText) - integerValue;
    numberValue.innerText = total;
});
resetBtn.addEventListener("click", function(e){
    numberValue.innerText = 0;
});


