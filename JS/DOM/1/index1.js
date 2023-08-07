
//1.add event listeners
// document.addEventListener('click', function(){
//     console.log('i have clicked on document');
// });

/* ----------------------------------------------------------------*/

/*2.remove event listeners
3 conditions-
1-> same target [document...]
2->same type    [click...]
3->same function ##
*/
function eventfunction(){
    console.log('hello hiiii');
} 

document.addEventListener('click',eventfunction);

document.removeEventListener('click',eventfunction);

/* ----------------------------------------------------------------*/

/*
3.phases of an event -> 1.capturing, 2.At target, 3.Bubbling, phase.

*/

/* ----------------------------------------------------------------*/

//4.event object-> contains info of the event

// const obj = document.querySelector('#wrapper');

// obj.addEventListener('click', function(omkar){
//     console.log(omkar);
// });

/* ----------------------------------------------------------------*/

//5.the default action-
//e.g. anchor tag opens link so it is the default action of that tag - we have a method to prevent these actions that is, [ .preventDefault ]

// let links = document.querySelectorAll('a');
// let secondlink = links[1];

// secondlink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('default action prevented');
// });

/* ----------------------------------------------------------------*/

//6.Avoide too many events -> [1.event.target & 2. event.nodeName these properties ]
