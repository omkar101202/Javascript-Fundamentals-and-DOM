console.log('i am running js code in vs code.....');

/*
* The setTimeout() is a method inside the window object, it calls the specified function or evaluates a JavaScript expression provided as a string after a given time period only once.
* The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
*/

//1-> syntax : setTimeout(function, time);
// console.log('hiii');

// setTimeout(function () {
//     console.log('hello timeout...');
// }, 3000);

// console.log('second hiii...');

//2-> timeout with 0 ms time,
console.log('hiii');

setTimeout(function () {
        console.log('hello timeout...');
}, 0);

console.log('second hiii...');
//here we might think that 'hello timeout' may get printed just after 'hiii' but it is wrong , As setTimeout is a async method it will be handeled by event loop as soon ia it comes in call stack it will be moved to browser web APIs and immidiately moved to callback queue and then event loop will check weathwe call stack is empty or not then the function in settimeout will be sent to call stack and executed.

//## the time mentioned here is the minimum time that we have to wait before executing the function after completing the timer if call stack is not empty it has to wait for more time. 