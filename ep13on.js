// a(); //prints log
// b(); //throws and error -- b is defined undefined in memory creation phase
// //function statement aka function declararion
// function a() {
//   console.log("Hello, World!");
// }
// //function expression
// var b = function () {
//   //functions acts like value
//   console.log("b called");
// };
//diff between fun statement vs function expression is hoisting
//**************************** */
//what is an anonymonus function
//function without name is called anonymous functions
//does not have its own identity ---  invalid syntax
//its is used when functions are used as values for other functions
//in function statament we cannot use anonymous functions
// function (){

// // }

// //Named function expression//diff parameters vs arguements
// var b = function xyz(param1, param2) {
//   //parameters
//   console.log("xyz called");
//   //   console.log(xyz);//allowed
// };
// b("varun", "varun"); //allowed//arguements
// xyz(); //throws error

//what are first class functions
//functions can be sent as arguement to other functions
// var b = function xyz(param1) {
//   //parameters
//   console.log(param1);
// };
// b(function () {
//   console.log("hello");
// });

// function can be returned inside other functions
// const and let behaves the same for below case
// var b = function xyz(param1) {
//   //parameters
//   return param1;
// };
// function xyz() {
//   console.log("hello");
// }
// var gf = b(xyz);
// console.log(gf);
// // functions are first class citizens ==  first class fuctions

// //arrow functions
// //---------------------------------------------------

// //ep 14------------------

// // //what is a callback function in javascript
// setTimeout(() => {
//   console.log("timer");
// }, 5000);
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// }); //fnc y is called callback function

//javascript is a syncronous and single threaded language

//blocking the main thread

//power of callbacks

//deep about event listeners

//closures demo with event liseners

//scope demo with event liseners

//garbage collections and removeEventListenets

// function attacheventlistenr() {
//   let count = 0;

//   document.getElementById("clickme").addEventListener("click", 
//     function xyz() {
//     console.log("button clicked", ++count);
//   }
// );
// }
// attacheventlistenr();
//function that is passed as arguement to another function is called callback function
//setTimeout helps turn js which is singleThreaded and syncronous into asynchronous
//event listeners can also invoke closures with scope
//event listeners consume a lot of memory which can potntially slow down the website therefore it is good practice to remove if it is not used
/*1. JS runtime environment contains all elements required to run JS.
2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
3. JS engine is a piece of code.
4. Process includes Parsing ---> Compilation -----> Execution.
5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
7. Execution and Compilation are done together.
8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
*/

//------------------------------------ep17-----------------
// console.log("start");
// setTimeout(() => {
//   console.log("Call back");
// }, 5000);

// console.log("end");

let startdate = new Date().getTime();
let enddate = startdate;
while (enddate < startdate + 3000) {
  enddate = new Date().getTime();
}
console.log("while ended");
// ----------------------end-----------------------------

// ---------------------ep18----------------------------
// a function which takes another function as an arguement or return a function from it
function x() {
  console.log("namaste");
}
function y(x) {
  x();
}
//x is callback, y is higher order
//
const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(calculateArea(radius));

//optimised way
// const area = function (radius){
//   return Math.PI*radius*radius;
// };

// const circumference = function (radius){
//   return 2*Math.PI*radius;
// };

// Array.prototype.calculate = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }
//   return output;
// };

// console.log(radius.calculate(area));
// console.log(radius.calculate(circumference));
//------------------------------------end--------------------

//--------------------------------ep19--------------------------
const arr = [5, 1, 3, 2, 6];

//double
//triple
//binary

// function double(x) {
//   return x * 2;
// }
// function binary(x) {
//   return x.toString(2);
// }

// const output = arr.map(binary);

// console.log(output);
// //filter odd values
// const ouput = arr.filter((x) => {
//   return x > 2;
// });
// console.log(ouput);
// //reduce
// //sum or max
// // function findsum(arr) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     sum = sum + arr[i];
// //   }
// //   return sum;
// // }
// // console.log(findsum(arr));

// console.log(
//   arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
//   })
// );
// //max
// console.log(
//   arr.reduce(function (acc, curr) {
//     if (curr > acc) {
//       acc = curr;
//     }
//     return acc;
//   }, 0)
// );

// const users = [
//   { firstname: "varun", lastname: "scooby", age: 26 },
//   { firstname: "varun", lastname: "scooby", age: 21 },
//   { firstname: "varun", lastname: "scooby", age: 27 },
//   { firstname: "varun", lastname: "scooby", age: 26 },
// ];
// //list of full name
// const out = users.map((x) => {
//    return x.firstname + "   "+x.lastname
// })
// console.log(out)
// //reduce
// const outte = users.reduce((acc,curr) => {
//   if(acc[curr.age]){
//       acc[curr.age] = ++acc[curr.age];
//   }else{
//     acc[curr.age] = 1;
//   }
//   return acc;
// },{})
// console.log(outte);
// //filter
// const outt = users.filter((x) => {
//   if(x.age < 25){
//     return x.firstname;
//   }

// }).map((x) => x.firstname)//chaining

// console.log(outt);
/*
const output = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);  //if age of current user is < 30, push there firstName into the acc array
    }
    return acc;
}, [ ]);  //initially, the acc will be an empty array

console.log(output);
*/

