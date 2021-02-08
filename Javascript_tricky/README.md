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

# JavaScript Hoisting:-
Hoisting is JavaScript's default behavior of moving declarations to the top.

* In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.

* Functions are hoisted to the top of the scope even before the variables are hoisted.

* Redeclaration is allowed - redeclaration is treated as reassignment.
* If we assign variable and initialize it with a value and if we again assign the same variable but not initialize it then it will be ignored.

* If you have some code after return statement that is unreachable and simply ignored.

* "use strict"; Defines that JavaScript code should be executed in "strict mode".
* With strict mode, you can not, for example, use undeclared variables.
 
