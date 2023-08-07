/* 
In JS we have different types of loops
1.for loop
2.while loop
3.do while loop

4.for in loop ->loops through the properties of an object
5.for of loop -> loops through the values of an iterable object
*/

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// } //prints  0 to 9

// let j=0;
// while (j < 5) {
//     console.log(j *j);
//     j++;
// }  //prints quare of 0 to 9

// let k=0;
// do{
//     console.log('iteration' + k);
//     k++;
// }while (k < 5);
//these werw the basic loops above

// ------------------------------------------------

// for-in loop 
/* 
A for-in loop iterates through the properties of an object and executes the loop's body once for each enumerable property of the object.

[enumerable string properties are the properties of an object that can be iterated over using a loop. By default, all properties defined directly on an object are enumerable.]
*/
var student = { name: "omkar", age: 20, degree: "B.Tech" };

for (var item in student) {
    console.log(student[item]);    // => "omkar", then 21, then "B.Tech"
}

//for-of loop
var array = [1,2,3,4,5];

for(var element of array) {
    console.log(element); // =>
}