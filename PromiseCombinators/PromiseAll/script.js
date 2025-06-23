// function fetchUserData(){
//     return new Promise((resolve, reject) => {
//           setTimeout(() => resolve({userId: 1, username: "John"
//     }), 500);
//     });
// }

// function fetchUserPosts(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(["Britto1", "Britto2", "Britto3"]),
//     1000);
//     });
// }

// Promise.all([fetchUserData(), fetchUserPosts()])
//         .then((results) => {
//             console.log("UserData:", results[0]); //As promise.all takes an array of promises results[0][1]
//             console.log("UserPosts:", results[1]);
//         })
//         .catch((error) => {
//             console.log("An error occured", error);
//         })
// resolve completes in 500ms, and reject completes in 1000ms,
// So why isn't { userId: 1, username: "John" } logged?
// Because Promise.all() doesn’t emit any output unless all promises succeed. 
// Even though fetchUserData() finishes first and successfully, 
// the .then() block is never triggered, because one of the promises failed later.
// This is how Promise.all() is designed — all or nothing.
// -----------------------------------------------
// function fetchUserData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve ({userId: 1, username: "John"}),
//     500);
//     });
// }
// function fetchUserPosts(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject (new Error("Failed to fetch posts"). message),
//          1000);
//     });
// }
// Promise.allSettled([fetchUserData(), fetchUserPosts()])
// .then((results) => {
//     // nonExistentFunction();
//     console.log("UserData:", results[0]);
//     console.log("UserPosts:", results[1]);
// })
// .catch((error) => {
//     console.log("error occured", error);
// })
// ✅ .catch() gets executed if there’s a JavaScript runtime error.
// ❌ .catch() does not get executed just because a promise was rejected
//  not with Promise.allSettled().
// --------------------------------------------

// function quickResolve(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve ("Quick Resolve"), 500);
//     });
// }
// function slowResolveOrQuickReject(){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Slow Resolve"), 1000);
//     setTimeout(() => reject(new Error("Quick Reject")), 2000);
// });
// }
// Promise.race([quickResolve(), slowResolveOrQuickReject()])
// .then((results) => {
//     console.log("Result:", results);
// })
// .catch((error) => {
//     console.error("error occured:", error);
//  })
// ------------------------------------------------
// Promise.any([
//     new Promise((resolve, reject) => setTimeout(reject(1), 1000, 'Reject1')), //reject is the reject callback
//     new Promise((resolve, reject) => setTimeout(resolve(2), 2000, 'Resolve2')), //resolve is the success callback
//     new Promise((resolve, reject) => setTimeout(reject(3), 1000, 'Reject3')),
// ])
// .then((result) => {
//     console.log("Resolve", result);
// })
// .catch((error) => {
//     console.log("Reject", error);
// });
 