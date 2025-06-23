// const task1 = function(){
//     console.log("Task1");
// }
// const heavyTask = function(){
//     console.log("Heavy Task Started in Sync");
//     const start = Date.now()
//     while(Date.now() - start < 3000){

//     }
//     console.log("Heavy Task Ended");
// }
// const task2 = function(){
//     console.log("Task2");
// }
// task1();
// heavyTask();
// task2();
// ---------------------
// const heavyTaskNonBlocking = function(){
//     console.log("Heavy Task happen in Non Blocking manner");
//     setTimeout(function() {
//         console.log("Heavy Task happens in Async Manner");
//     }, 3000);
// }
// heavyTaskNonBlocking();
// --------------------------------
const data = [];
// const fetchRender = function(fetchAsync){
//     console.log("Render function fetched");
//     const start = Date.now();
//     while(Date.now() - start < 3000){

//     }
//     console.log("Mimic the function");
//     data.push({id:1, name: "Gayathri"});
// };
const fetchRenderNonBlocking = function(render){
    console.log("Non Blocking Call");
    setTimeout(function() {
        console.log("Wait and Print in Async Order");
        data.push({id:1, name: "Gayathri"});
        render();
    }, 9000);
   
}
const fetchAsync = function(){
    console.log("Rendering the response");
    console.log(data[0]. name);

}
fetchRenderNonBlocking(fetchAsync);
// fetchAsync();
