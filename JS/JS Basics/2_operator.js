/*
1. in js we have as usual operators like,
 +[add] , -[sub] , *[multiply] , /[divide] , %[modulo] , ++&--[increment and decrement]
*/

// ** -> exponentiation operator
let n = 2;
let m = 3;
console.log(n**m); // gives n^m or npow(m).

/**
 2. similarly we have assignment operators as usual,
 = , += , -= , *= , /= , %= , **=
*/

//3. comparasion operators
/* 
> greater-than               < less-than
>= greater-than-equal-to     <= less-than-equal-to 

==  loose equality [here value must be same not type]
=== tight equality [here value as well as type must be same.]
*/

//loose & tight equality 
let a = 123;  // a->number
let b = '123'; // b->string

if(a == b)
console.log('loose equality satisfied');
else
console.log('loose equality not satisfied');

if(a === b)
console.log('tight equality satisfied');
else
console.log('tight equality not satisfied');

// + used to concatenate strings
let text = 'java' + '-script';

//4. logical operator
/* 
In js we have &&[and] , ||[or] , ![not] logical operator
*/

//* typeof() ->returnes data type of the variables
let p = 789;
console.log(typeof(p));

let q = 'omkar';
console.log(typeof(q));

let r = [12 , 'abc'];
console.log(typeof(r));


