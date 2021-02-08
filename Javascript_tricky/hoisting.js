// function z() {
//      console.log( 'z was called' );
// }

// var x;
// var y;

var x = 1;
var x = 2; // redeclaration is allowed - redeclaration is treated as reassignment

console.log('x = ', x);

var y = 2;
var y;

console.log('y = ', y);

var z = 1;

function z() {
    console.log('z was called');
}

console.log(z); // logs 1
console.log(typeof z); // logs "number"