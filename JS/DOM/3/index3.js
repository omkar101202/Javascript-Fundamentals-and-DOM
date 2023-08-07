// console.log('omkar'); 

//1. synchronous promise
// let mypromise = new Promise(function(resolve, reject) {
//     console.log('i am in promise');
//     resolve(1234);//any no.
// });
// console.log('first msg');

//2. async promise
// let mypromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('i am in promise');
//     }, 5000);
//     reject(new Error('promise rejected...'));
// });
// console.log('first msg');


/*------------------------------------ */

//catch and then method in promises-

// let waadaa1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('settimeout1 started');
//     }, 2000);
//     resolve(1234);
// })

// let output = waadaa1.then(() => {
//     let waadaa2 = new Promise(function(resolve , reject){
//         setTimeout(() => {
//             console.log('settimeout2 started');
//         }, 3000);
//         resolve('waada2 has resolved');
//     })
//     return waadaa2;
// })

// output.then((value) => console.log(value));

/*------------------------------------ */

// ## async await ->special syntax used to work with promises
/*
# async function always return a promise.
*/
//way to make a function -> async
// async function abcd() {
//     return 7;
// }

// console.log(abcd());

//-> weather e.g.

/*------------------------------------ */

//Fetch API ->

// async function utility() {
//     let content =await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output =await content.json();
//     console.log(output);
// }
// utility();

//post method in API fetch -> to send data for quthentation for such purpose

// async function helper() {

//     //object of additional info.
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'omkar',
//             body: 'web-developer',
//             userId: 10,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = await content.json();
//     return response;
// }

// async function utility() {
//     let ans = helper();
//     console.log(ans);
// }

// utility();

/*------------------------------------ */

// * closures in js ->
//closure -> nested function -> ##reference[not copy]
// let->block scope, var->global scope
function init(){
    let name = "Mozilla"; //local variable

    function displayName(){
        console.log(name);
    }
    displayName();
}
init();

