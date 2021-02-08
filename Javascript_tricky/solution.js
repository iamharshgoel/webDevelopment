// (function() {})()  //IIFE

// global scope vs function scope
(function() {
    // var a = b = 3;   //function scope variable
    b = 3; //this is a global variable - no var used
    var a = b;
})();

// global scope
console.log('a defined?' + (typeof a !== 'undefined')); //function scope
console.log('b defined?' + (typeof b !== 'undefined')); //global scope


// scopes-iife

for (var i = 0; i < 10; i++) { // i is global - it is not within a function
    console.log(i);
}

console.log('i outside for loop = ', i);