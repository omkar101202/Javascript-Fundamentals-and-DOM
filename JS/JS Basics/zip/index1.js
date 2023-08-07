
console.log("lets start...");

// object creation
let rectangle = {
    length : 1,
    breadth : 2,

    draw: function() {
        console.log('drawing');
    },
};

//factory function
// function createRectangle(len, bre) {
//     return rectangle = {
//         length : len,
//         breadth : bre,
    
//         draw() {
//             console.log('drawing rectangle...');
//         },
//     };
//     // return rectangle;
// }

// let rectangleObj1 = createRectangle(5,4);
// let rectangleObj2 = createRectangle(2,3);
// let rectangleObj3 = createRectangle(8,9);



//constructor function ->> pascal notation(first letter of every word is Capital-> NumberOfStudents)
function Rectangle(len , bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing rectangle...');
    }
}

let rectangleObj = new Rectangle(4,6);

rectangleObj.color = 'yellow';
console.log(rectangleObj);

delete rectangleObj.color;
console.log(rectangleObj);
