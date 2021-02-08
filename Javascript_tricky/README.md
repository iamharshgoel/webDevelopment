# JavaScript Tricky Concepts:-

* value !== value is true only for NaN 
* NaN are not comparable

* console.log(0.3 - (0.1+0.2) <Number.EPSILON) returns true.
* false, "", 0, undefined, null are the 5 falsy values of JavaScript.
* 10 > 9 > 8 === true will return false as it follows right to left rule so 10 >9 which is true but true is not greater than 8 thats why it will return false.

* (function() {})() this is known as IIFE expression of functions.

* 2 scopes for a variable declared with var keyword:- global scope and function scope

* variable will always take the recent scope.
* The scope of inner function is just like any other variable.

* An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created. IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations.

* Use IIFE when you want a block level scope and another is when you want to avoid global level scope.

