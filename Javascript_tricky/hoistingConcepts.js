// VARIABLE HOSTING
function demo1() {
    // Pass 1 - allocates memory - creates variables
    // var x, y; // only creates variables in pass 1n- does not assign values

    console.log('x (before declaration) = ', x); //prints undefined - error in other languages - in JS it is not
    var x = 1; // x = 1;
    console.log('x (after declaration) = ', x);

    var y; // does nothing in effect in pass 2 (execution phase)
    console.log('y (after declaration) = ', y); // undefined
}

// FUNCTION HOSTING
foo(); //foo is available here due to hoisting

var x = 1;

function foo() { // syntax #1 for creating functions - the entire declaration is hoisted
    console.log('foo was called');
}

bar(); // undefined() - undefined is not a function and cannot be called

var bar = function() { // syntax #2 for creating functions - this is a variable assignment
    console.log('bar was called');
}; // in effect this would be just bar = function() { ... }