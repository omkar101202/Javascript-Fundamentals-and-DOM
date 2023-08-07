
//1->Adding 100 para-
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let newelement = document.createElement('p');
//     newelement.textContent ='THIS IS PARA ' + i;

//     document.body.appendChild(newelement);
// }
// const t2 = performance.now();
// console.log('1 this took' + (t2-t1) + ' ms');


//2-> optimtsing a little bit
// const t3 = performance.now();
// let mydiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'THIS IS PARA ' + i;

//     mydiv.appendChild(element);
// }
// document.body.appendChild(mydiv);
// const t4 = performance.now();
// console.log('2 this took ' + (t4-t3) + ' ms');

//## way to check the perofrmance of the code in JS we have a method as performanance.now() & this is very accurate,

//3-> more optimized using document fragment-> here no of reflows & repaints are very less
// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//     let newelement = document.createElement('p');
//     newelement.textContent ='THIS IS PARA ' + i;
    
//     fragment.appendChild(newelement);
// }
// document.body.appendChild(fragment);

/* ------------------------------------------- */

//->call stack 
// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'js is single threaded';
//     document.body.appendChild(para);
// }
// function newMessage() {
//     let para = document.createElement('p');
//     para.textContent = 'kya hal chal';
//     document.body.appendChild(para);
// }

// addPara();
// newMessage();

/* ------------------------------------------- */


//## Event Loop -> 
/*
async code in js[ setTimeout, eventListener etc are async  ] is executed by the event loop .
when ever a async function is encountered it comes to call stack and then it is sent to browswe [web apis] and removed from call stack and continues the program execution. but when the action is done/completed then it comes to callBack Queue and then the queue checks weather the call stack is empty or not if it is empty then the function is sent to call stack and the function is executed. 
*/