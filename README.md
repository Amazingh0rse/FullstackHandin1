**Gruppe Medlemmer**


- [Alexander Pihl](https://github.com/AlexanderPihl)
- [Jean-Poul Leth-Møller](https://github.com/Jean-Poul)
- [Mick Larsen](https://github.com/MivleDK/)
- [Morten Rasmussen](https://github.com/Amazingh0rse)
- [Per Kringelbach](https://github.com/cph-pk)



# Læringsmål

## Period-1 Vanilla JavaScript, Es-next, Node.js, Babel + Webpack and TypeScript-1

### Explain and Reflect:

# Period-1 Vanilla JavaScript, Es-next, Node.js, Babel + Webpack and TypeScript-1

#
## Explain and Reflect:
- **Explain the differences between Java and JavaScript + node. Topics you could include:**

  - *Java is a compiled language and JavaScript a scripted language.*

  * Java is an object oriented programming language and JavaScript is an object based scripting language.*

  - *Java supports multithreading and JavaScript dont.*

  - *Java has a thread based approach to concurrenc where Javascript has event based approach to concurrency.*

  - *Java is a strongly typed language, which means that the user has to decide the data type of the variable before declaring and using it.
    Example an "int a" variable can only store the value of a type integer.*

    *JavaScript is a loosely typed language, which means that the user does not have to worry about the data-type of the variable before and after the declaration.
    Example a "var a" variable can store the value of any data-type.*

  - Blocking vs. non-blocking:
     *Blocking refers to operations that block further execution until that operation finishes while non-blocking refers to code that doesn’t block execution. Java is a blocking type language where Javascript is not.*

- **Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.**
* - node.js is an open source server enviroment, runs on various platforms, uses JavaScript on the server and is a asynchronous programming language.*
 *npm is an online repository for the publishing of open-source Node.js projects and a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.*

- **Explain about the Event Loop in JavaScript, including terms like; blocking, non-blocking, event loop, callback queue and "other" API's. Make sure to include why this is relevant for us as developers.**
-*The event loop continuously checks the call stack to see if there's any function that needs to run. While doing so, it adds any function call it finds to the call stack and executes each one in order.*
-*Heap - Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory*
-*Stack - This represents the single thread provided for JavaScript code execution. Function calls form a stack of frames (more on this below)*
-*The event queue is responsible for sending new functions to the track for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution.*
-*Any JavaScript code that takes too long to return back control to the event loop will block the execution of any JavaScript code in the page, even block the UI thread, and the user cannot click around, scroll the page, and so on.
Almost all the I/O primitives in JavaScript are non-blocking. Network requests, Node.js filesystem operations, and so on. Being blocking is the exception, and this is why JavaScript is based so much on callbacks, and more recently on promises and async/await.*
-*Browser or Web APIs are built into your web browser, and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. They are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code.*

- **What does it mean if a method in nodes API's ends with xxxxxxSync?**

If it ends with a suffix of "Sync", then it is synchronous.
If it's any kind of I/O operation and it accepts a callback and does not have "Sync", then it's asynchronous.
If there are two options offered and one ends with a suffix of "Sync", then the other one is asynchronous.
If it does not accept a callback or return a promise or use an eventEmitter (or something similar) to provide event notifications, then it is not asynchronous because there would be no way for it to communicate to you when it's done.


- **Explain the terms JavaScript Engine (name at least one) and JavaScript Runtime Environment (name at least two)**
A javascript engine executes JavaScript (JS) code. 

JavaScript engines are typically developed by web browser vendors, and every major browser has one. In a browser, the JavaScript engine runs in concert with the rendering engine via the Document Object Model.

In order to start coding in JavaScript, you don’t have to install any additional software. Each modern web browser comes with a JavaScript engine. You can simply run scripts you write inside your favorite browser.

The use of JavaScript engines is not limited to browsers. For example, the V8 engine is a core component of the Node.js and Deno runtime systems. 



  **What are the most important JavaScript engines?**

    Chrome V8 – As you probably guessed the engine shipped in Google Chrome. It’s an open source project written in C++. V8 is also used in Opera, NodeJS, and Couchbase.

    SpiderMonkey – The open source engine implemented in C++. It’s maintained by Mozilla Foundation. You can find it in Firefox.
  
    Nitro – The engine developed by Apple. It’s used in Safari.
  
    Chakra – Developed by Microsoft as the JavaScript engine for Edge browser.
  
  **JavaScript Runtime Environment**
In the web development, you don’t usually use the engine directly. The JavaScript engine works inside an environment, which provides additional features to your scripts that you can use at runtime.

These can be utility libraries or APIs which allow communicating with the world surrounding the engine. An example here might be access to information about the web browser in which your script is executed. Or a notification about a mouse click.
<br /><br />

- **Explain (some) of the purposes with the tools Babel and WebPack and how they differ from each other. Use examples from the exercises.**

 - Babel:
    - JavaScript compiler that converts ECMAScript 2015+ nto a backwards compatible version of JavaScript in current and older browsers or environments.
    - It does the following:
      - Transform syntax
      - Polyfill features that are missing in your target environment (through @babel/polyfill)
      - Source code transformations (codemods)
  - Webpack:
-  is a module bundler that bundles your code into 1 or 2 files that you define. It also compiles TypeScript to JavaScript. You need a webpack config file to handle your configurations.

## **Explain using sufficient code examples the following features in JavaScript (and node)**

- **Variable/function-Hoisting**([Example in code](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/exercises/hoisting.js))
 - Hoisting (lifting up) means to lift a variable or a reference point to the top of the function scope.
  If there is no function it will be lifted to the top of the global scope.
  If you don't want to lift a variable make use of let of const, since it will stay in the blockscope (just like we know from java).
  A function will always be lifted to the top of the scope but if you have declared the function with a variable(reference point),
  the reference point will be lifted but not the function itself.
  The design rule for clean code when using var (before ES6) is to declare the variables at the top of the scope and the
  definitions(defined) at the bottom of the scope. Then there will be no confusion about when you can call a variable.

- **this in JavaScript and how it differs from what we know from Java/.net.**

#### **this**
A way to think about “this” is that in regular functions (with the function keyword or the object function short-hand), resolve to “the nearest object”, which is the object that they are bound to. For example:
[Explanation & example](https://github.com/cph-pk/4sem-Fullstack-Flow1/blob/main/Day-1/JavaScriptEx_day1/day1-ex-this.js)

A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.
In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).


- **Function Closures and the JavaScript Module Pattern**([Example in code](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/exercises/closures.js))
  - Closure is a special kind of object which stores variables who has been terminated, so function further in the scope (childs) can make 
  use of the variables. The closure combines two things - a function and the environment in which
  the function was created. The environment consists of any local variables that
  were in-scope at the time that the closure was created.
  Functions in JavaScript form closures.


- **User-defined Callback Functions (writing functions that take a callback)**

- **Explain the methods map, filter and reduce**
    
    #### **.map()**
    *creates a new array by taking 2 arguments, a callback and an optional context (which will be referred to as ```this``` in the callback). The callback runs for each value in the array, and returns each new value in the new array.
    Parameter details.
    callback − Function that produces an element of the new Array from an element of the current one.
    thisObject − Object to use as this when executing callback.*

    [Example of .map method being used line 71-80](https://github.com/Amazingh0rse/FullstackHandin1/blob/main/day1/myFilter.js)
 
  #### **.filter()**
  filter() method creates a new array with all elements that pass the test implemented by the provided function.

     [Example of .map method being used line 21-22](https://github.com/Amazingh0rse/FullstackHandin1/blob/main/day1/myFilter.js)

  #### **.reduce()**
  *Applies a function against two values of an array, and reduces it to a single value*

  *The reducer function takes four arguments:
  Accumulator
  Current Value
  Current Index
  Source Array
  Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.*

  [Example of .reduce method being used line 67-74
  ](https://github.com/Amazingh0rse/FullstackHandin1/blob/main/day1/reduce.js)
  - Provide examples of user-defined reusable modules implemented in Node.js (learnynode - 6)




- **Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, destructuring objects and arrays,   maps/sets etc.**

  #### **let**

  #### **arrow function**
The arrow function is alternative to the way you normally write a function
```
// Traditional Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;

```

  #### **this**
A way to think about “this” is that in regular functions (with the function keyword or the object function short-hand), resolve to “the nearest object”, which is the object that they are bound to. For example:

[Explanation & example](https://github.com/Amazingh0rse/FullstackHandin1/blob/main/Day-1/JavaScriptEx_day1/day1-ex-this.js)
  #### **rest**

  #### **parameters**

  #### **destructuring objects and arrays**

  #### **maps/sets**
  Circle back when we have made this in class (example missing)
  <br /><br />

- **Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.**

- **Explain and demonstrate, how to implement event-based code, how to emit events and how to listen for such events**

## **ES6,7,8,ES-next and TypeScript**

- **Provide examples with es-next, running in a browser, using Babel and Webpack**

- **Explain the two strategies for improving JavaScript: Babel and ES6 + ES-Next, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers**

- **Provide examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics**

- **Explain how we can get typescript code completion for external imports.**

- **Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)**
TC39 or the 39nth Technical Committee by its full name, is a group under ECMA International containing ECMA members - which are JavaScript developers, implementers, academics and more; from various companies and institutions. The committee collaborates with the community to maintain and evolve the definition of the ECMAScript specification.
The committee meets regularly with a neat agenda, in order to plan and make decisions regarding the specification. It’s worth mentioning that the decisions are made by consensus, meaning most of the members should agree when nobody extremely disagrees or veto.



## **Callbacks, Promises and async/await**
**Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:**

- **Example(s) that demonstrate how to implement our own promise-solutions.**

- **Example(s) that demonstrate error handling with promises**

- **Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel**

**Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.**

**Provide examples to demonstrate**
- **Why this often is the preferred way of handling promise**
 
-  **Error handling with async/await**
 
- **Serial or parallel execution with async/await.**
