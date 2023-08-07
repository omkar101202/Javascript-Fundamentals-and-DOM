console.log('variables');

/*
//1. let -> 1.block scope & 2.No-redecleration
//var->global scope
var v1 = 1234;

{
    let v2 = 567;
    var v3 = 989;
    console.log('v1- ' + v1);
    console.log('v2- ' + v2);
}

console.log('v1- ' + v1);
console.log('v2- ' + v2); //-> error scope of v2 is within the block
console.log('v3- ' + v3);

*/

/*-------------------------------------- */

// const -> 1.cant redeclared , 2.cant reassigned & 3.have block scope
// {
//     const c1 = '1298';
//     console.log('c1- ' + c1);
// }
// console.log('c1- ' + c1); //-> error scope of c1 is within the block

const c2 = '123';
// c2 = 23; // -> error reassigning is not allowed
// const c2 = 'omkar'; // -> error redecleration is not allowed
console.log('c2- ' + c2);

/*
premitive datatype in JS-
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/

//JavaScript evaluates expressions from left to right
let x = 16 + 4 + "Volvo";
//as first numbers are encountered it will add them and then join with the string as -> 20Volvo

let y = "Volvo" + 16 + 4;
//as first string is encountered it will cinsider 16 & 4 as string and join them as, -> Volvo164