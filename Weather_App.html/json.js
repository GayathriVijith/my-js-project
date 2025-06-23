const toys = {
    toy1 : {name: "Teddy Bear", color: "Peach"},
    toy2 : {name: "Puzzles", color: "multi-color"},
    toy3 : {name: "doll", color: "pink"}
}
console.log(toys);

const toysJSONString = JSON.stringify(toys);
console.log("Packed Toys:", toysJSONString);

