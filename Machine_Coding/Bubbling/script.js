const grandparent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

// grandparent.addEventListener('click', function(){
//     console.log("Grandparent Clicked");
// });
// parent.addEventListener('click', function(){
//     console.log("Parent Clicked");
// });
// child.addEventListener('click', function(){
//     console.log("Child Clicked");
// });

grandparent.addEventListener('click', function(){
    console.log("Grandparent Clicked, (Capturing)");
}, true);
parent.addEventListener('click', function(){
    console.log("Parent Clicked, (Capturing)");
}, true);
child.addEventListener('click', function(){
    console.log("Child Clicked, (Capturing)");
}, true);