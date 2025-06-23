// const fs = require("fs")

// fs.readFile("f1.txt", function (err, data){
//     if(err){
//         console.log(err)
//         return
//     } else{
//         const processedData = data.toString();
//         fs.writeFile("f2.txt", processedData, function(err){
//             if(err){
//                 console.log(err)
//             } else{
//                 console.log("File Written successfully");
//             }
//         });
//     }
// });
// ------------------------------------

// function fetchUser(userId) {
//     fetchUserData(userId, function(err, userData){
//         if(err) handleError("Fetching user data", err);
//         else{
//             log("User data fetched", userData);
//         fetchUserPosts(userDataId, function(err, posts){
//             if(err) handleError("Fetching User Posts", err);
//             else{
//                 log("User Posts Fetched", posts);
//                 for(let i = 0; i < posts.length; i++){
//                     fetchCommentsByPosts(postsId, function(err, comments){
//                         if(err) handleError("Fetching Comments for Posts", err);
//                         else{
//                             log("Comments for Posts", post.id, comments);
//                         }
//                     });
//                 }
//             }
//         })
//         }
//     })
// }
// --------------------------
// const coinTossPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         const isHeads = Math.random() > 0.5;
//         if(isHeads){
//             resolve("Heads");
//         } else{
//             reject("Tails");
//         }
//         }, 1000);
// });
// console.log(coinTossPromise);

// coinTossPromise
//     .then(function(result){
//      console.log(result);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
//     .finally(function(){
//         console.log("Promise settled");
//     })
// -------------------
// const coinTossProblem = function(success, fail){
//     setTimeout(function(){
//          if(true){
//             success()
//          }else{
//             fail()
//          }
//     }, 1000)
// }
// --------------------------------
// const cleanRoom = function(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if(Math.random() > 0.5){
//                 resolve("I cleaned my room");
//             } else{
//                 reject("I can't clean the room");
//             }
//         })
//         }, 3000)
// }

// const eatFood = function(message){
//     return new Promise(function(resolve, reject){
//         if(Math.random() > 0.5){
//             resolve(message + " I ate my food");
//         } else{
//             reject("I'm not hungry");
//         }
//     })
// }

// const getCandy = function(message){
//     return new Promise(function(resolve, reject){
//         resolve(message + " Get candy");
//     })
// }
// console.log("I'm the first line");
// cleanRoom()
// .then(function(result){
//     console.log(result);
//     return eatFood(result);
// })
// .then(function(result){
//     console.log(result);
//     return getCandy(result);
// })
// .then(function(result){
//     console.log("finished " + result);
// })
// .catch(function(err){
//     console.log("Error:" , err)
// })
// .finally(function(){
//     console.log("All done");
// })
// console.log("I'm the last line");
// -------------------------------------------
const fs = require("fs");
fs.readFile("f1.txt", cb)
function cb(err, data){
    if(err){
        console.log(err)
    } else{
        console.log(data + "")
    }
}
const promiseReadFile = fs.promises.ReadFile("f1.txt");
console.log(promiseReadFile);
promiseReadFile.then(function(data){
    console.log("this is file data" + data)
})
promiseReadFile.catch(function(err){
    console.log("this is error" + err); 
})