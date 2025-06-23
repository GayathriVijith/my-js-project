// function fetchData(){
//     return 'data';
// }
// const dataPromise = fetchData()
// // console.log(dataPromise);
// dataPromise.then(function(res){
//     console.log("the ans is:", res);
// })
// -------------------
// const p1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("Promise resolved");
//     }, 10000)
       
// })

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("Promise resolved");
//     }, 5000)
       
// })
// function fetchData(){
// p.then(function(res){
//     console.log("Promise resolved", res);
//     console.log("create impact");
// })
// }
// fetchData();

// async function handlePromise(){
//     console.log("Scale");
//     const val1 = await p2;
//     console.log("create impact1");
//     console.log(val1);

//     const val2 = await p1;
//     console.log("create impact2");
//     console.log(val2);
// }
// handlePromise();

// async function test(){
//     const data = await fetchData()
//     console.log("data", data);
// }
// // test();
// // console.log(fetchData());
// ------------------------------------------

// function test1(){
//     console.log("This is test1");
// }
// const test2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("test2");
//     }, 7000)
// })
// function test3(){
//     console.log("This is test3");
// }
// async function testData(){
//     const val = await test2
//     console.log(val);
// }
// test1();
// testData();
// test3();
// -------------------------------------

async function placeOrder(drink){
    // return new Promise(function(resolve, reject){
           if(drink === 'coffee'){
            return("We serve coffee")
           } else{
            throw new Error("We only serve coffee")
           }
    }

// function placeOrder(drink){
//     return new Promise(function(resolve, reject){
//            if(drink === 'coffee'){
//             resolve("We serve coffee")
//            } else{
//             reject("We only serve coffee")
//            }
//     });
// }
function processOrder(){
    return new Promise(function(resolve, reject){
        resolve("Order placed and served");
        //reject("We serve nothing");
    })
}
function generateBill(){
    return new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Bill Generated for the Order placed");
    }, 7000)
    
        
    })
}
// placeOrder('coffee')
// .then(function(orderStatus){
//     console.log(orderStatus)
//     return processOrder(orderStatus)
// })
// .then(function(processStatus){
//     console.log(processStatus)
//     return generateBill(processStatus)
// })
// .then(function(bill){
//     console.log(bill);
// })
// placeOrder('tea')
// .catch(function(err){
//     console.log(err)
// })

async function serveOrder(){
    try{
    const orderStatus = await placeOrder("coffee")
    console.log(orderStatus)
    const processStatus = await processOrder(orderStatus)
    console.log(processStatus)
    const bill = await generateBill(processStatus)
    console.log(bill)
}catch(err){
    console.log(err);
}
}
serveOrder();