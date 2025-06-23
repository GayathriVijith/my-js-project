const fs = require('fs');
console.log("starting");
// const content = Math.random().toString(36).repeat(100000);
// fs.writeFileSync('file1.txt', content);
const data1 = fs.readFileSync('file1.txt');
console.log("Data1 file is:", data1.toString());
const data2 = fs.readFileSync('file2.txt');
console.log("Data2 file is:", data2.toString());