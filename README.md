TinDog Starting Files

#💡Cards🃏:- 

Cards have a class card then under the class they have one div with class card-header, one with card-body and another with card-footer

To have cards in one row all are included in a div with class card-deck.

#💡Z-indexing:-

By default z-index of an element is equal to 0
Z-index affects the stacking order on the website.
Z-index needs the positioning of the element to be mentioned whether to be absolute, relative, fixed, static, sticky.

* The websites are mobile-friendly as well as desktop-friendly and they have different URLs for them.
For mobile:- m.website.com
For desktop:- website.com

You can also have a Mobile-Friendly Test to check whether your website is mobile-friendly or not
URL:- https://search.google.com/test/mobile-friendly

#💡CSS-Media Queries Breakpoints:-
Media query is a CSS technique introduced in CSS3.
It uses the @media rule to include a block of CSS properties only if a certain condition is true.

@media<type><feature>

1.Do Nothing
2.Make a separate website for Mobile
3.Make it Responsive


#Why code refactoring is needed?🤔
1. Readability
2. Modularity
3. Efficiency
4. Length


* codegolf.stackexchange.com is a better platform to learn how to refactor or restructure the code.

#Combining Selectors:-

1. Multiple Selectors
Format:- selector1, selector2{

}

2. Hierarchical Selectors
Format:- selector1 selector2{

}
Selector1 should be from parent and selector2 should be from child

3. Combined Selectors
Format:- selector1#selector2{

}

#💡💡💡
element .class  vs  element.class

* element.class means they are in one element only.
* element .class defines parent-child relationship.

#Selector Priority:-

id > class > tag in external CSS but if we change any style in internal CSS thenit will override the external CSS

So, internalCSS > externalCSS(id > class > tag)

* Avoid inline styles at all cost because it is a vey bad practice while debugging or have poor readability.


#WEB DESIGN PRINCIPLES:-

1. Colour Theory
2. Typography
3. User Interface Design
4. User Experience Design

**COLOUR THEORY**

1. Red:- Love, Energy, Intensity
2. Yellow:- Joy, Intellect, Attention
3. Green:- Freshness, Safety, Green
4. Blue:- Stability, Trust, Serenity
5. Purple:- Royal, Wealth, Feminity

When combining the colors for a website picking adjacent colors from the Color Wheel creates an analogous color palette

When combining the colors for a website picking two colors from opposite ends ofthe Color Wheel creates an complementary or clashing color palette

There are other ways to combine colors also:-
1. Triadic Color Pallete(equilateral triangle)
2. Making a perfect square

* colorhunt.co
* Adobe Color

**TYPOGRAPHY**

1. Serif:- Serif family have little feet at the end of their central beams
a. Old Style
b. Transitional
c. Modern
d. Slab-Serif

2. Sans-Serif:- They have perfect right angles
a. Grotesque
b. Neo-Grotesque
c. Humanist
d. Geometric

**USER INTERFACE DESIGN**

User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms—e.g., voice-controlled interfaces.

Main points to be remembered while creating UI:-
1. Hierarchy
2. Layout
3. Alignment
4. White Space
5. Audience   

**USER EXPERIENCE DESIGN**

User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function.

Main points to be remembered while creating UX:-
1. Simplicity
2. Consistency
3. Reading Patterns(use the F-Layout or the Z-Layout)
4. All Platform Design
5. Don't use your designs for evil

* canva.com is a online graphics editing program and you don't have to download anything.

**JAVASCRIPT**
The language that powers the Web

Evolution of JavaScript:-
LiveScript << EScript << ECMAScript << JavaScript

**JavaScript** is an interpreted programming language whereas **Java** is an compiled programming language

What is a JavaScript Engine?
It converts high level JavaScript code to machine level language code so that computer can understand

Popular JavaScript Engines:-
1. Chrome:- V8 Engine
2. Firefox:- SpiderMonkey
3. Safari:- JavaScriptCore
4. Edge:- Chakra

**THE CHROME V8 ENGINE**
* A multi-thread program written in c++
* Converts javascript code into optimized machine code
* Employs a technique called 'just in time' or JIT compilation
* used in node runtime as well chrome v8

V8 THREADS!

1. The main thread:-  FETCH => COMPILE => EXECUTE
2. compiler thread:- FULL-CODEGEN  CRANKSHAFT
3. profiler thread:- Monitor cpde and finds out "hot" sections
4. Garbage Collector thread:- Garbage collection

💡CRANKSHAFT IN ACTION

**OPTIMIZATIONS**
1. inling:- All the function calls in the "hot paths" are replaced with the actual code from the function to improve code performance.

2. Hidden classes:- The compiler generates something called hidden classes which maintain the pointers to every object property in a class structure so that it need not be looked up everytime.

3. inline caching:- A cache of the object type that is most likely to be passed to a function is maintained so that unnecessary lookups are avoided every time.

#HOT SWAPPING OF CODE!

CODE => HYDROGEN GRAPH => LITHIUM => REGISTER ALLOCATION => MACHINE CODE => ON STACK REPLACEMENT

In latest version of Chrome there are new features:-
Full-codegen is replaced by Ignition
Crankshaft is replaced by Turbofan

There are 3 types of print statements in JavaScript:-
1. alert("")
2. prompt("")
3. console.log("")


* **var** keyword is used for denoting variables.

* Variable names cannot contain spaces.
* Variable names must begin with a letter, an underscore (_) or a dollar sign ($).
* Variable names can only contain letters, numbers, underscores, or dollar signs.
* Variable names are case-sensitive. 

* Concatenation is done by using + sign in between the variables or strings.
* name.length gives you the length of the string
* .slice(x,y) is the function used for slicing
The slice() method returns the selected elements in an array, as a new array object. The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

* .toUpperCase() converts everything to upper case.
* .toLowerCase() converts everything to lower case.

* increment operator:- x++ or x = x + 1
* decrement operator:- x-- or x = x - 1
* x += y or x -= y is used to increment or decrement the variable by ceratin value.

**FUNCTIONS**

Functions allow you to create a series of instructions, package it into a block of code

* Math.floor(value):- Round off the number passed as parameter to its nearest integer in Downward direction.

* Math.ceil(value):- Return the smallest integer greater than or equal to a given number.

* Math.random():- Random Number Generation
It generates numbers ranging from 0 to 0.9 upto 16 decimal places

* === Is **equal** to
* !== Is **not equal** to
* > Is **greater** than
* < Is **lesser** than
* >= Is **greater or equal** to
* <= Is **lesser or equal** to

* There is a difference between === and == , as === also checks whether the data types are matching or not whereas with two equal signs it doesn't care
 
* && AND
* || OR
* ! NOT

* .includes() returns a boolean value for this function 
* .push() function is used to push the elements into an array.
* .pop() function is used to remove the elements from an array.

💡LOOPS:-

1. while loop:- It is used when you want to essentially check for a **state**.
while (something is true){
   //Do Something
}

2. For loops:- It is used when you're essentially trying to **iterate**.
for(start; end; change){
  //Do Something
}


* www.draw.io can be used to draw neat and digital flowcharts

* For using inline javascript we can use script tag with type="text/javascript"
*CSS File is always put at the top of the HTML file whereas JavaScript file is always put at the end because HTML script runs line by line.

**DOCUMENT OBJECT MODEL**

* You can change the inner HTML of the tag by using
document.firstElementChild.innerHTML = " ";

* document.querySelector() looks inside our entire document for the object 
* Objects inside the DOM can have Properties and Methods
Properties explains something about the object and the Methods are the things that the object can do.

* document.getElementsByTagName("") searches for the tag by name
* document.getElementsByClassName("") allows you to select elements based on the name of the class.

* document.getElementById() only get you back one item instead of an array because Id's are always unique.

* document.querySelectorAll() selects all the tags.
* DOM consists all the properties in camelCase
* .classList.add("") or .classList.remove("") are used to add or remove classes to the element.
* .classList.toggle("") means if the class is present then remove it or if not then add that particular class from the element.

* While using innerHTML gives you all of the HTML that is inside that element tags, including any other HTML tags and when you use textContent it will only give you the content in that tag

* .getAttribute() is used to get the specific value inside the attribute
* .setAttribute() is used to set the value of specific attribute to some other value. It takes two values inside parameters first is the attribute and second is the value that what we want wo set the value of attribute.


**ADVANCE DOM CONCEPTS**:-

1. EventListener:- EventTarget.addEventListener()
The EventTarget method **addEventListener()** sets up a function to be called whenever the specified event is delivered to the target. Common targets are Elements, Document, and Window

addEventListener() works by adding a function or an object that implements EventListener to the list of event listeners for the specified event type on the EventTarget on which it's called.

* To play audio in JavaScript make variable:-
var audio = new Audio('file_name');
audio.play();

* Constructor Function Example:-
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var person1 = new Person("Harsh","Goel",20,"black");

**SWITCH STATEMENT**

The switch statement is used to perform different actions based on different conditions.

The JavaScript Switch Statement
Use the switch statement to select one of many code blocks to be executed.

Syntax:-
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

This is how it works:

* The switch expression is evaluated once.
* The value of the expression is compared with the values of each case.
* If there is a match, the associated block of code is executed.
* If there is no match, the default code block is executed.


* In Keyboard events we have to pass event in the function as a parameter and when the other function is called then it is called as functionName(event.key)

* Higher order functions are those functions which are able to other functions a s input.

#CallBack Function:-
* A JavaScript Callback Function is a function that is passed as a parameter to another JavaScript function, and the callback function is run inside of the function it was passed into. JavaScript Callback Functions can be used synchronously or asynchronously.


