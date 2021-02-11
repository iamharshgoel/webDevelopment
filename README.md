**Web Development Bootcamp**

💡**Bootstrap Cards**🃏

Cards have a class card then under the class they have one div with class card-header, one with card-body and another with card-footer

To have cards in one row all are included in a div with class card-deck.

💡**Z-indexing**

By default z-index of an element is equal to 0
Z-index affects the stacking order on the website.
Z-index needs the positioning of the element to be mentioned whether to be absolute, relative, fixed, static, sticky.

* The websites are mobile-friendly as well as desktop-friendly and they have different URLs for them.
For mobile:- m.website.com
For desktop:- website.com

You can also have a Mobile-Friendly Test to check whether your website is mobile-friendly or not
URL:- https://search.google.com/test/mobile-friendly

💡**CSS-Media Queries Breakpoints**
Media query is a CSS technique introduced in CSS3.
It uses the @media rule to include a block of CSS properties only if a certain condition is true.

@media<type><feature>

1. Do Nothing
2. Make a separate website for Mobile
3. Make it Responsive


Q. Why code refactoring is needed?🤔
1. Readability
2. Modularity
3. Efficiency
4. Length


* codegolf.stackexchange.com is a better platform to learn how to refactor or restructure the code.

**Combining Selectors**

1. Multiple Selectors
Format:- selector1, selector2 {

}

2. Hierarchical Selectors
Format:- selector1 selector2 {

}
Selector1 should be from parent and selector2 should be from child

3. Combined Selectors
Format:- selector1#selector2 {

}

*💡 element .class  vs  element.class

* element.class means they are in one element only.
* element .class defines parent-child relationship.

#Selector Priority:-

**id > class > tag** in external CSS but if we change any style in internal CSS thenit will override the external CSS

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


**jQuery**

* jQuery is a lightweight, "write less, do more", JavaScript library.

* The purpose of jQuery is to make it much easier to use JavaScript on your website.

* jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

Example:- document.querySelector("h1") === $("h1")

* There are two ways to incorporate jQuery in your code:-

1. Use $(document).ready(function(){
      //jQuery Code
]);

2. Link the Javascript and jQuery files in the HTML file just before the closing body tag.

NOTE:- Both the ways will do exactly the same thing.

* www.minify.org is the website on which you can minify your code of JavaScript or CSS.

* There is no difference between selectiong one or selecting many in jQuery as it is selected by the same $ symbol.
document.querySelector("h1") => $("h1")
document.querySelectorAll("button") => $("button")

We can manipulate the styles in JQuery by using .css("property", "propertyValue") method

* If you are having one property in .css method then you are getting the value of that property or if you are having two properties in .css method then you are setting the value of that property.

* .addClass("") is used to add class to specific element using jQuery.
* .removeClass("") is used to remove class from specific element using jQuery.
* .hasClass("") is used to check whether the element is having that particular class or not. It will return boolean value.

* .text() or .html() methods are used to manipulate texts using jQuery.
.text() method is used to manipulate text only whereas .html() method can manipulate text as well styles to that particular text.

* .attr("") returns the value of that specific attribute whereas .attr("", "") sets the value of attribute to the second parameter.

* In jQuery it is so easy to add event listener just by using .click(function(){
});

* .on("event", function(){

});
on() method is used to add event to the selected element.

* .before() method is used to add new element just before the opening tag of the selected element
* .after() method is used to add new element just after the closing tag of the  selected element
* .prepend() method is used to add new element just before the content of the selected tag and right after the opening tag

* .append() method is used to add new element just after the content of the selected tag and inside the tag only.

* .remove() method is used to remove the selected element.
* .hide() method is used to hide the selected element.
* .show() method is used to show the hidden element.

* .fadeOut() method:- The fadeOut() method gradually changes the opacity, for selected elements, from visible to hidden (fading effect).
$(selector).fadeOut(speed,easing,callback)

* .fadeIn() method:- The fadeIn() method gradually changes the opacity, for selected elements, from hidden to visible (fading effect).
$(selector).fadeIn(speed,easing,callback)

* .fadeToggle() method:- The fadeToggle() method toggles between the fadeIn() and fadeOut() methods.

If the elements are faded out, fadeToggle() will fade them in.
If the elements are faded in, fadeToggle() will fade them out.
$(selector).fadeToggle(speed,easing,callback)

* The slideUp() method slides-up (hides) the selected elements.
* The slideDown() method slides-down (shows) the selected elements.
* The slideToggle() method toggles between slideUp() and slideDown() for the selected elements.

This method checks the selected elements for visibility. slideDown() is run if an element is hidden. slideUp() is run if an element is visible - This creates a toggle effect.

* The animate() method performs a custom animation of a set of CSS properties.

This method changes an element from one state to another with CSS styles. The CSS property value is changed gradually, to create an animated effect.
(selector).animate({styles},speed,easing,callback)

* .setTimeOut(function(){ 
 //
}, 1000);

The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

Tip: 1000 ms = 1 second.

** UNIX COMMANDS **'

ls - List
cd - Change Directory
mkdir - Make Directory
ctrl + A take you to the starting of the command line.
ctrl + E take you to the ending of the command line.
ctrl + U clears your entire line
touch filename => used to make new file
rm is used to remove a file
pwd print working directory-> it will provide you the path to your destination
rm * remove all the files inside the folder
rm -rf removes a directory

sudo rm -rf --no-preserve-root/ => This command will wipe out your Hard Disk where you cannot recover anything.


**BACK-END DEVELOPMENT**

* Eventbrite

Client-Side + Server + Database  =  Full-Stack Development

#Node.js:-

* Node.js allows us to use JavaScript to interact directly with the hardware of the computer. 
Example:- To create a desktop application

**What is Node.js?**
1. Node.js is an open source server environment
2. Node.js is free
3. Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
4. Node.js uses JavaScript on the server

Why Node.js?
Node.js uses asynchronous programming!

A common task for a web server can be to open a file on the server and return the content to the client.

#Here is how Node.js handles a file request:

1. Sends the task to the computer's file system.
2. Ready to handle the next request.
3. When the file system has opened and read the file, the server returns the content to the client.
4. Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.

**What Can Node.js Do?**
1. Node.js can generate dynamic page content
2. Node.js can create, open, read, write, delete, and close files on the server
3. Node.js can collect form data
4. Node.js can add, delete, modify data in your database

**What is a Node.js File?**
1. Node.js files contain tasks that will be executed on certain events
2. A typical event is someone trying to access a port on the server
3. Node.js files must be initiated on the server before having any effect
4. Node.js files have extension ".js"

#Here is how PHP or ASP handles a file request:

* Sends the task to the computer's file system.
* Waits while the file system opens and reads the file.
* Returns the content to the client.
* Ready to handle the next request. 

* node filename.js is used to run a file using command line.
* When we type node in command line and hit enter then it will take you to Node REPL (Read Evaluation Print Loops)

* To exit the REPL you can type .exit and hit enter or press ctrl+C two times.

* **const** keyword is used to create a constant and assigning it a value, lateron I can't change the value.

* NPM => Node Package Manager

To use NPM, first run the command **npm init** in the right directory. It is used to initialize a package file and this is called package.json

**Express**  
Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. Following are some of the core features of Express framework −

1. Allows to set up middlewares to respond to HTTP Requests.
2. Defines a routing table which is used to perform different actions based on HTTP Method and URL.
3. Allows to dynamically render HTML Pages based on passing arguments to templates.

npm install express --save is the command to install express.js
--save basically adds Express int your package.json under the dependencies.

* A port is just a channel that we've tuned our server to
* .listen() method is used to create a server that listens on port xxxx on your computer.
xxxx => 4 digit integer

* If we wanted to be able to see when our port is set up and when our server is running, we can add a callback function to this method listen.

#Handling Requests and Responses:-

* localhost:3000 just represents the route or home page of our website.
* .get() method that's provide by Express that allows us to specify what should happen when a browser gets in touch with our server and makes a get request
The first parameter it takes is the location of the get request, the route of the website is represented by a forward slash "/", and the second parameter will be a callback function which will take two parameters request and response.
*This callback function tells the server what to do when that request happens.

* response.send("") method is used to send response.
* response.sendFile(__dirname + "/fileName") method is used to send file as a response.

** __dirname returns the path of the file in which directory it is located.
** npm install body-parser
This allows us to pass the information that we get sent from the post request.
* body-parser is used with express therefore .use() function is used to run body-parser package.

* When you are trying to parse data that comes from an HTML form always use .urlencoded({extended: true}).
By setting that extended option to true, that basically just allows us to post nested objects.

* body-parser allows you to go into any of your routes, and you can tap into something called request.body and this is the parsed version of HTTP request.

* If you are working with numbers in js file never forget to typecast number using Number() method.


**APIs**
Application Programming Interfaces

An **Application Programming Interface** (API) is a set of commands, functions, protocols, and objects that programmers can use to create software or interact with an external system.

API includes:-
* Endpoint
* Paths:- The data after the last forward slash
* Parameters: -The Parameters come after a question mark(?) and then they are set as a key value pair with an equal sign(=) and if you want to have more than one parameter, you separate each of the key value pairs with an ampersand(&).

* Authentication:- Every time you make a request through the API, they have to be able to identify you as the developer and they have to keep track of how often you're using their server to get data

* API Key is known as appid

#JSON (JavaScript Object Notation):-

* JSON Viewer Awesome is the free tool which converts JSON input into a tree structure, or a chart structure, or the original JSON input.

* There are 5 ways to make HTTP Requests in NOde.js
1. https
2. Request
3. Axios
4. SuperAgent
5. Got

* https is a native node module which is already bundled within our Node project

**HTTP response status codes**
HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

1. Information responses(100-199)
2. Successful responses(200-299)
3. Redirects(300-399)
4. Client errors(400-499)
5. and Server errors(500-599) 

* response.statusCode gives you the status response of the Server
* JSON.parse() is used to convert JSON format data into JavaScript object format.
* JSON.stringify() is used to convert JavaScript format into a string.
* When we want to have multiple res.send() then we use res.write() function then pass single res.send() which will display all the res.write().

* If we want to serve up static files to the server then we have to use .use(express.static("public")) and make the publuc folder in root directory and move the static files into that public folder.

* https.request(url, options, function(response){
	response.on("data", function(response(data){
	})
}) 

* response.redirect("") function is used to take back to the directory you want.

**HEROKU**

* Use the heroku login command to log in to the Heroku CLI
* In app.listen method we have to use port of HEROKU so we have to use command process.env.PORT instead of 3000.

* Using process.env.PORT || 3000 then your app will work both on Heroku as well as our local system.

* Define a **Procfile**, this is the file that Heroku is going to check to see how to launch your app and this Procfile is made without any extension.

* To launch your app you have to run command:-
web: node File.js
You can also use nodemon instead of node so that you dont have to run the server again and again. nodemon will automatically sync the changes.

* **heroku create** :- The heroku create CLI command creates a new empty application on Heroku, along with an associated empty Git repository. If you run this command from your app's root directory, the empty Heroku Git repository is automatically set as a remote for your local repository.

* Type the command **git init**
* Then add all the files using **git add .** command
* Then commit the changes writing a message using **git commit -m "message"** command
* The final thing that you have to do befor you can get your app live is to write **git push heroku master**

* After this completion of process it will show you verifying deploy done and you can access it at the previous location.

NOTE:- You might get an application error when you try to load up the site immediately. It's important that you give Heroku just a few minutes for it to set up of this complicated stuff. So login after 5 or 10 minutes.

* heroku logs --tail is used to check your logs for details.

Total CRUX of Heroku Deployment:-
1. heroku login
2. Change PORT in app.listen method from 3000 to process.env.PORT || 3000
3. touch Procfile
4. web: node fileName.js => write this command in Procfile
5. heroku create
6. git init
7. git add .
8. git commit -m ""
9. git push heroku master

* To update the changes done in the app you have to run the commands from 6 to 9as mentioned above.

* https://quiet-wildwood-79619.herokuapp.com

**GIT, GITHUB AND VERSION CONTROL**

* Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

* `git init` -> It is used to make git repository.
* `git add` -> This is used to add file to the git repository.
* `git add .` -> It is used to add all the files in the root directory to the git repository.

* `git commit -m ""` -> It helps you to keep track of what changes you have made in each commit.

* `git status` -> The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git. Status output does not show you any information regarding the committed project history.

* `git log` -> git log lists the commits made in that repository in reverse chronological order; that is, the most recent commits show up first.

* Working directory is the folder where you initialize your git repository.

* `git checkout` -> This command git checkout is used to revert back or rollout to the last position in our local repository.

* `git diff` -> Diff command is used in git to track the difference between the changes made on a file. 

*`git remote add origin URL` -> It is used to add your git local repository to your git repository.

* `git push -u origin master` -> Use git push to push commits made on your local branch to a remote repository. -u is a just a flag. The git push command takes two arguments: A remote name, for example, origin. A branch name, for example, master. 

* Remote Repository is GitHub which hosts our code and also host all of the changes that were made in between the different commits.

* `git ignore` -> A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.
This file is created by using .gitignore command and this file is hidden and untracked.

* `git rm --cached -r .` -> Remove a file from index with git rm --cached before commit.

* When you type names of files inside .gitignore file and mention *.txt that means when you commit your project all of the that have a text extension will be ignored.

* The . gitignore file tells Git which files to ignore when committing your project to the GitHub repository . gitignore is located in the root directory of your repo. / will ignore directories with the name.

* `git clone` -> git clone is a Git command line utility which is used to target an existing repository and create a clone, or copy of the target repository.

* To make a branch in your repository use the command **git branch <branchName>**

* You can check the number of branches in a repository by using command **git branch**.

* `git checkout <branchName>` is used to switch to the respected branchName in git repository.

* `git merge <remote>/master` -> This command combines the commits on a remote repo with the commits on your local repo.

1. Creates a new commit that has multiple parents: called a "merge commit".
2. every commit has a black pointer to its parent.
3. When you run git merge you are pulling together other information and update your local repository based on that information.

* README (as the name suggests: “read me”) is the first file one should read when starting a new project. It's a set of useful information about a project and a kind of manual. It is the first file Github or any Git hosting site will show when someone opens your repository.

* Link:- https://learngitbranching.js.org/  
* git fork:- Forking is done on the GitHub Account while Cloning is done using Git. When you fork a repository, you create a copy of the original repository (upstream repository) but the repository remains on your GitHub account.

* Pull requests:- A pull request occurs when a developer asks for changes committed to an external repository to be considered for inclusion in a project's main repository. It is important to note that “pull requests” are a workflow method, and are not a feature of the version control system itself.

* `git fetch` :- Git "fetch" Downloads commits, objects and refs from another repository. It fetches branches and tags from one or more repositories. It holds repositories along with the objects that are necessary to complete their histories to keep updated remote-tracking branches.

**EJS**

* .getDay() is used to get the days of the week as a number.

* ejs.co is one of the best tool for EJS Templating.
* EJS is a simple templating language which is used to generate HTML markup with plain JavaScript. It also helps to embed JavaScript to HTML pages.

* app.set("view engine", "ejs")  -> This is the most important line in EJS.

* res.render() uses the view engine that we set up here to render a particular page.

* <%= variableName %> :- This is a marker that tells file to replace whatever is inside here with the value of the variable.

#Tags in EJS:-

* <% 'Scriptlet' tag, for control-flow, no output
* <%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
* <%= Outputs the value into the template (HTML escaped)
* <%- Outputs the unescaped value into the template
* <%# Comment tag, no execution, no output
* <%% Outputs a literal '<%'
* %> Plain ending tag
* -%> Trim-mode ('newline slurp') tag, trims following newline
* _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

Note:- You have to add opening and closing tag on every JavaScipt line of code.

* Date.toLocaleDateString() :- The toLocaleDateString() method converts the date (not the time) of a Date object into a readable string, using locale conventions.

* There are different formats of date in JavaScript for different languages:-
1. "en-US" :- For English
2. "hi-IN" :- For Hindi

* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric');

When this option is included in the .toLocaleDateString() as parameter then date is formatted according to different date formats of JavaScript.

#SCOPE:- 
In JavaScript there are two types of scope:

1. Local scope
2. Global scope
JavaScript has function scope: Each function creates a new scope.

Scope determines the accessibility (visibility) of these variables.

Variables defined inside a function are not accessible (visible) from outside the function.

#Local JavaScript Variables
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables have Function scope: They can only be accessed from within the function.

Example:-
// code here can NOT use carName

function myFunction() {
  var carName = "Volvo";

  // code here CAN use carName

}
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.

#Global JavaScript Variables
A variable declared outside a function, becomes GLOBAL.

A global variable has global scope: All scripts and functions on a web page can access it. 

Example:- 
var carName = "Volvo";

// code here can use carName

function myFunction() {

  // code here can also use carName 

}


* var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope.

* If we want to add CSS File to our dynamic website then we have to tell Express explicitly to serve up the CSS files.
app.use(express.static("folderName"))

folderName will the folder which contain all your static files.

#Layouts:- 

npm install express-ejs-layouts

* Layouts enable us to dynamically fix content or elements to a page in such a way that even if a different page is requested, the content remains but the page is successfully accessed.

* <%- include("header") -%>
* <%- include("footer") -%> 
These two commands are use to add header and footer dynamically via ejs

* module.exports exports the content of current directory into another directory.
* module.exports is an JavaScript object.
* **module.exports** and **exports** refer to the same thing.
* Array.forEach() method of arrays llows you to loop through each item inside an array.

#Route Parameters:-
Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

For Example:- 
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

NOTE:- When you type rs in nodemon while server is running then it forces nodemon to restart.

* lodash is simply a utility library that makes it easier to work with JavaScript inside your Node apps.

* Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
Lodash’s modular methods are great for:

1. Iterating arrays, objects, & strings
2. Manipulating & testing values
3. Creating composite functions


**DATABASES**

SQL vs NoSQL :-

* SQL:- Structured Query Langugae
* NoSQL:- Not Only Structured Query Language

* SQL is Structured Query Language, which is a computer language for storing, manipulating and retrieving data stored in a relational database.

SQL is the standard language for Relational Database System. All the Relational Database Management Systems (RDMS) like MySQL, MS Access, Oracle, Sybase, Informix, Postgres and SQL Server use SQL as their standard database language.

* SQL inserts NULL if there is any empty block in the database.

* NoSQL databases (aka "not only SQL") are non tabular, and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph. They provide flexible schemas and scale easily with large amounts of data and high user loads.

* NoSQL is horizontally scalable.
* NoSQL is JSON formatted document structure.
* NoSQL databases are more flexible to changes.

* SQL databases requires a schema.
* SQL databases scales vertically.
* SQL databases are table structured.

* Every single database the first thing to do is to get yourself used to doing CRUD
**C**reate
**R**ead
**U**pdate
**D**estroy

* The CREATE TABLE statement is used to create a new table in a database.

Syntax:-
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);

* The PRIMARY KEY constraint uniquely identifies each record in a table. Primary keys must contain UNIQUE values, and cannot contain NULL values. A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields).

* The NOT NULL constraint enforces a column to NOT accept NULL values.

* The INSERT INTO statement is used to insert new records in a table.
INSERT INTO table_name

* The VALUES statement is used to put values in the table.
SYNTAX:-
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

* SELECT * FROM 'table_name';  is used to read the data
-> * is used to select everything from the table.

* The UPDATE statement is used to modify the existing records in a table.
SYNTAX:-
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition; 

* The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.

The ALTER TABLE statement is also used to add and drop various constraints on an existing table.

SYNTAX:-
ALTER TABLE table_name
ADD column_name datatype;

* The DELETE statement is used to delete existing records in a table.
SYNTAX:-
DELETE FROM table_name WHERE condition;

* The FOREIGN KEY constraint is a key used to link two tables together.

A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.

SYNTAX:-
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);

* The INNER JOIN keyword selects records that have matching values in both tables.
SYNTAX:-
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

**MONGODB**

Step1:- Download the mongodb community current release version.
Step2:- Unzip the downloaded file
Step3:- Use command
        sudo mv "Path of the mongodb file" /usr/local/mongodb

Step4:- Type the Password which you use to logon to your macbook
Step5:- Type the command 
        open /usr/local/mongodb

Step6:- Make a file naming .bash_profile under home directory
Step7:- ls -a to check whether the file has been made or not.
Step8:- Open the file using vim editor and type export PATH=$PATH:/usr/local/mongodb/bin

Step9:- Then make the folder to save the data of your database
        mkdir -p /data/db

Step10:- Then type command sudo chown harshgoel /data/db to get read and write access.

Second Way to install mongodb is given below:-
from the official docs https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

install homebrew and run the following commands

sudo chown -R $(whoami) $(brew --prefix)/*

then

brew tap mongodb/brew

then

brew install mongodb-community@4.2

and

brew services start mongodb-community

or

mongod --config /usr/local/etc/mongod.conf

then

ps aux | grep -v grep | grep mongod

and

mongo

to verify you can run show dbs in the mongo shell


#CRUD Operations:-

1. Create:- 
Use command use <databaseName> to create new database
then by putting the command db will tells you that you're currently working in which databse.
* db.collection.insertOne() is used to add one entry to the database in one time.
* db.collection.insertMany() is used to create many entries to the database in the moment.
NOTE:- Both the functions will take Javascript Object as an parameter.

* show collections command will return the total collections

2. Read Queries:-
* db.collection.find(query, projection)¶
* query is of document type. Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}).
* projection is also document type. Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter.
* Returns: A cursor to the documents that match the query criteria. When the find() method “returns documents,” the method is actually returning a cursor to the documents.
 
* The projection parameter determines which fields are returned in the matching documents. The projection parameter takes a document of the following form:
{ <field1>: <value>, <field2>: <value> ... }

* <field>: <1 or true> :-	Specifies the inclusion of a field.
* <field>: <0 or false> :- Specifies the exclusion of a field.

3. Update:- 
Update operations modify existing documents in a collection. MongoDB provides the following methods to update documents of a collection:

* db.collection.updateOne()
* db.collection.updateMany()
* db.collection.replaceOne()
In MongoDB, update operations target a single collection. All write operations in MongoDB are atomic on the level of a single document.

You can specify criteria, or filters, that identify the documents to update. These filters use the same syntax as read operations.

4.Delete:-
Delete operations remove documents from a collection. MongoDB provides the following methods to delete documents of a collection:

* db.collection.deleteOne()
* db.collection.deleteMany()
In MongoDB, delete operations target a single collection. All write operations in MongoDB are atomic on the level of a single document.

You can specify criteria, or filters, that identify the documents to remove. These filters use the same syntax as read operations.

#Native Driver in MongoDB:-
To connect Node.js app with the database we need MongoDB Native driver and ODM(Object Document Mapper) that's called mongoose.

Step 1: Make Directory
Step 2: Make app.js file
Step 3: npm init
Step 4: npm install mongodb

* assert just validates our data entry and our connection to the MongoDB datbase.
* The official MongoDB Node.js driver provides both callback-based and Promise-based interaction with MongoDB, allowing applications to take full advantage of the new features in ES6. The 2.x series of the driver is powered by a brand new core driver and BSON library.


*Why the -y?
If you specify the -y option in the command, NPM automatically accepts the default values for the command. Omit the -y flag to interactively select your project settings.

* Avoid “current URL string parser is deprecated” warning by setting useNewUrlParser to true
If this warning occurs then use this code:-
If you are using version >= 3.1.0, change your mongo connection file to ->

MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })
There is another update use { useUnifiedTopology: true } in MongoDB constructor.

* The insert command returns an object with the following fields:

1. result:- Contains the result document from MongoDB
2. ops:- Contains the documents inserted with added _id fields
3. connection:- Contains the connection used to perform the insert

#Error:-
If You Have Forgotten to Quit the Mongod Server
You can use CTRL + C in your Terminal to shut down your mongod connection.

If you have closed down Terminal or Hyper and forgot to close down your mongod connection, you might get an error that says:
2018-11-04T16:17:53.473+1300 E STORAGE  [initandlisten] Failed to set up listener: SocketException: Address already in use
2018-11-04T16:17:53.474+1300 I CONTROL  [initandlisten] now exiting
2018-11-04T16:17:53.474+1300 I CONTROL  [initandlisten] shutting down with code:48

In this case, you'll have to follow these steps to manually shut down the mongod process:

1. Open up a fresh Hyper Terminal tab

2. Paste the command below into Hyper:

sudo pkill -f mongod

3. Now enter the password that you use to log on to the Mac.

4. Open a new Hyper terminal, you should now be able to run the mongod command again.


#Mongoose:-
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

The main objective of this framework is to simplify the writing of validation code, the writing of your business logic boilerplate and just to make the code just shorter and easier to work with.

npm install mongoose
This command is used to install mongoose using npm package.

* To delete database from mongoDB then use this command process:-
1. use databaseName
2. db.dropDatabase()

mongoose.connect("mongodb://localhost:27017//databaseName") this command is used to connect with database at port 27017 using mongoose.
If the databaseName doesn't exist, then it will create his brand new database.

* If you want to add many items at once in the database using mongoose then
model.insertMany([], callbackFunc(){} ) is used.

* To read from your database with mongoose model.find(function(error, whatToFind){}) is used.

* Whenever you are working with mongoDB and mongoose always close the connection at last of the module using mongoose.connection.close();

* When you have to validate your data then you have to mention type and required field.
For eg:- const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your entry, no name specified"]
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

* To update the data there are 3 methods to update:
1. Model.updateOne()
2. Model.update()
3. Model.updateMany()

* To delete the document:
1. Model.deleteOne()
2. Model.deleteMany()

* To avoid deprecation warning always include {useNewUrlParser: true} in the mongoose.connect();

* Mongoose Document

const <constantName> = new <ModelName> ({
      <fieldName> : <fieldData>,
      ....

});

* Mongoose insertMany()

<ModelName>.insertMany(<documentArray>, function(err){
    //Deal with error or log success.
});

* Mongoose find()

<ModelName>.find({conditions}, function(err, results){
    //Use the found result ocs.
});

* To submit the form when checkbox is checked then add this attribute in the input tab
onChange = "this.form.submit()"

* Mongoose findByIdAndRemove()

<ModelName>.findByIdAndRemove(<Id>, function(err){
   //Handle any errors or log success.
});

* Express Route Parameters

app.get("/category/:<paramName>", function(req, res){
    //Access req.params.paramName
});

* Mongoose findOne()

<ModelName>.find({conditions}, function(err, results){
    //Use the found results docs.
});


* Mongoose findOneAndUpdate()

<ModelName>.findOneAndUpdate(
   {conditions},
   {updates},
   function(err, results){}
);

In actual {updates} is equal to {$pull: {field: {query}}}

#MongoDB Atlas:-

* Create a cluster using aws and slecting North Virginia(us-east-1) then setup the security using appropriate version.

#Deploying app with DATABASE using heroku:-

Follow the documentation.

* Create git repository.
* login to heroku CLI using command heroku login
* then use command heroku create
* then create Procfile using command touch Procfile and write web: node app.js in the Procfile.
* Use a database or object storage instead of writing to your local filesystem
* use command git push heroku master to push the app to heroku


#REST :-

REST means REpresentational State Transfer

HTTP:- Hyper Text Transfer Protocol

HTPPS:- Hyper Text Transfer Protocol secured

API building is like building the menu of things that our server can respond.
REST is an architectural style for designing APIs.

* These are the 5  HTTP verbs that we should use in order to make our API RESTful:-
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE  

GET is basically same as read
POST corresponds to the create word in our CRUD functions.
PUT and PATCH update our database.

PUT is updating your database by sending an entire etry to replace the previous one.
PATCH is sending the piece of data that needs to be updated.


DELETE is same as DELETE in CRUD

* For creating database using Robo 3T download robo 3T from the website robomongo.org 

* You can create chainable route handlers for a route path by using app.route(). Because the path is specified at a single location, creating modular routes is helpful, as in reducing redundancy and typos. 

* UPDATE

<ModelName>.update(
   {conditions},
   {updates},
   {overwrite: true}
   function(err, results){}
);

* {overwrite: true} tells MongoDB that we want to overwrite the entire document with what is specified in the update.

* .get() method uses .findOne() method to get a specific article.
* .put() method uses .update() method to put a specific article.

* When we only want to update a specific field in a specific document then the HTTP method patch is used.

* In .patch() method also .update() method is used.
<ModelName>.update(
  {conditions},
  {$set: updates},
  function(err, results){}
);

* For deleting a specific article use .deleteOne() method.
<ModelName>.deleteOne(
  {conditions},
  functions(err){}
);


#Authentication & Security:-

In security, authentication is the process of verifying whether someone (or something) is, in fact, who (or what) it is declared to be. Authentication: Verifying the identity of a user, process, or device, often as a prerequisite to allowing access to resources in an information system.

LEVEL 2 of authentication includes Database Encryption
With database encryption, an encryption algorithm transforms data within a database from a readable state into a ciphertext of unreadable characters. With a key generated by the algorithm, a user can decrypt the data and retrieve the usable information as needed.

Encryption basically means just scrambling something so that people can't tell what original was.

mongoose-encryption is the npm package that we need in encrtyption.

When we have to encrypt only certain fields then we have to add "encryptedFields" option into the JavaScript object at the end of that plugin code.

* During save, documents are encrypted and then signed. During find, documents are authenticated and then decrypted.

#Using Environment Variables to Keep Secrets Safe

* Environment variables are basically a very very simple file that we're going to keep certain sensitive variables such as encryption keys and API keys.

Usage
* As early as possible in your application, require and configure dotenv
require('dotenv').config()

* ls -a command is used to see hidden files from the terminal.

* Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE.

For Example:- 
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3

* By using **process.env.propertyName** we can access the property from .env file

#Hashing:-
Encryption is a two-way function where information is scrambled using an encryption key and unscrambled later using a decryption key.
         
           Hash
Password ---------> Hash
	  Function

Hash functions are mathematical equations that are designed to make it almost impossible to go backwards.
It is impossible to turn a hash back into a password.
* Decoding is not allowed in hash functions.

npm i md5

* when you run hash function on the same string, the hash that's created is always going to be the same.

# Hashing and Salting:-

                   Hash
Password + Salt --------------> Hash
                 Function

# Level 4 with bcrypt:-
The bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt.

* With "salt round" they actually mean the cost factor. The cost factor controls how much time is needed to calculate a single BCrypt hash. The higher the cost factor, the more hashing rounds are done. Increasing the cost factor by 1 doubles the necessary time.

* If you want to upgrade or degrade the version of node then install nvm using this link:-
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

then run the command nvm install {the version which you want to install}

Procedure:-
1. Before installing nvm, run this in terminal: touch ~/.bash_profile

2. After, run this in terminal:
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

3. Important... - DO NOT forget to Restart your terminal OR use command source ~/.nvm/nvm.sh (this will refresh the available commands in your system path).

4. In the terminal, use command nvm --version and you should see the version

Usage:-
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});

Compare:- 
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});

# Cookies and Sessions:-

* Session is a period of time whena browser interacts with a server.
* Cookies are small data that are stored on a client side and sent to the client along with server requests.

Passport.js :-
Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

npm install
* passport
* passport-local
* passport-local-mongoose
* express-session NOT express-sessions


* Serialize means storing the information or the message of the user.
* Deserialize means passport is able to crumble the cookie and discover the message inside which is who this user is.

* If you encounter some deprectaion warning like this:-
DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
then add this line in your code below mongoose.connect()
💡mongoose.set("useCreateIndex", true);

* Whenever your server gets restarted your cookie gets deleted and your session gets restarted.

# Level6 :-

* OAuth :- Open Authorisation
By using OAuth we're able to access pieces of information on these third party websites.

1. OAuth allows you to grant Granular Access Levels
2. It allows for either read only or read and write access.
3. Revoke Access at any point on their website

Steps for OAuth:-
1. Set Up Your App :- We have to set up pur app in their developer console and in return we get what's called an app id or a client id and we or our website is then the client which will make their request to Facebook, Gmail etc. to authenticate our user.

2. Redirect to Authenticate
3. User Logs In 
4. User Grants Permissions
5. Receive Authorisation code :- Website will receive an authorization code from Facbook or Gmail and this allows us to check to make sure that the user actually successfully signed on to Facebook.

6. Exchange AuthCode for Access Token

* passport-local-mongoose and mongoose-findorcreate are added as plugins to the schemas.




