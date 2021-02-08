function foo() {
    x = 1;

    function x() {}
    var x = '2';
    return x;
}
alert(typeof foo()); // string

function foo() {
    return x;
    x = 1;

    function x() {}

    var x = '2';

}
console.log(typeof foo()); // "function"


var x = 1;

function foo() {
    x = 10; // this modifies the local x
    return;

    function x() {}
}
foo();
console.log(x); // 1