// //ep 3
// getName();
// console.log(x);
// console.log(getName); //we can call even before defining it
// var x = 7;
// console.log(getNamev2); //this assigns an value "undefined"
// //to function getnamev2 since we declared it as a variable
// //arrow funciton undefined

// //function is regestered in memory creation phase
// function getName() {
//   console.log("namaste javascript");
// }
// //x is hoisted
// var getNamev2 = () => {
//   console.log("namaste javascript v2");
// };

// // var getnamev3 = function(){
// //     console.log("namaste javascript v3");
// // } same as v2

// //ep4--------------------------------------
// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }
// //console x will look for function level reference before going to search in  parent component
//------------------------------------

// //------ep5------------------
// var a = 10;
// function b() {
//   var x = 20;
// }
// console.log(window.a); //same
// console.log(a); //same
// console.log(this.a); //same output
// //----------------end---------

// //--------------ep6------------
// console.log(a);
// var a = 7;
// //undefined is like placeholder in js
// console.log(a);
// a = "varun";
// console.log(a);
// //javascript is a loosely typed language
// //it does not attach datatype to any specific variable
// //if var a = "varun" then can be changed to a = 10;
// // a = undefined is ok
// // a = null is ok
//**************end */

// //----------------ep7---------------scope of variable
// function a() {
//   var b = 10;
//   //   console.log(b);
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// a();
// //lexical envi is created with execution context
// //console.log(b) == b is not defined
// //lexical environment of parent is present in child that is how it has access to b
// //this is also called scope chain
// //simple example of closure also

// //-----------ep8---------------
// //let and const declarations are hoisted but is in temporal dead zone
// console.log(b); //undefined
// console.log(a); //error
// let a = 10; //attached to different memory space same for const
// //we cannot access until we assign some value
// var b = 100; //attached to global context
// //
// // {
// //     console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
// //     let myVar = "Hello, World!";
// //     console.log(myVar); // This will log "Hello, World!"
// //   }
// //that phase from hosting till it is intialized with some value is called temporal dead zone
// // a will not attached to window object == global object
// let x;
// x = 10; //allowed
// // const y;
// // y =1000;//not allowed
// const y = 1000; //allowed
// //const value cannot be changed ==  type error
// //syntax error    type error   reference error
// //const =  type error const b; b =1000;
// //syntax error  = const b;
// //accesing a even before intialzing it == "TEMORAL DEAD ZONE" == REFERENCE ERROR
// //use const , let ,  dont use var
//----------------------end--------------

//----------------------ep10-----------------------
/*
@0xFOXHOUND
3 years ago (edited)
First Love your explanation with examples Akshay sir, videos are exact on point!!!
For Revision:
Q) What is block in JavaScript?
> multiple js statements formed in a group enclosed in brackets and it forms a block

Q) What is need of a block/Grouping?
> JavaScript sometimes expect to run a single statement to run, but we need to run commands with multiple statements which is only possible by block

eg. on 4:14

write a simple function:
// even empty script is perfectly valid js script, what about empty brackets!!
{
 var a = 10;
 let b = 20;
 const c =30; 
}

When a js script get hoisted (a Global Execution Context) gets created 'var' listed towards 'Global environment' and other variables 'let' and 'const' declarations go to the 'Block environment' 

This become especially important when deciding the scope of a particular variable, since b and c are located in 'Block environment' and for a as we know exists in 'Global environment' any statement out of the "Block" can access 'a' ie.  ' Variable in Global environment' and other are not!

so when we understand the extent of Global and local environment variables and their 'Scopes' == Environment that forms the lexical hierarchy of 'Scopes' and 'Scopes' have Levels like 'Scope inside scope'

see script in 7:03

 var a = 100;
{
 var a = 10;
 let b = 20;
 const c =30; 
 console.log(a);
 console.log(b);
 console.log(c);
}
 console.log(a);
 console.log(b);
 console.log(c);

So in block " var a = 10;" influences the value within the block hence  console.log(a); >> 10 and outside of the block 'Variable in Global environment' influences value of a hence console.log(a); >> 100

Illegal shadowing:

let a = 200;
{
 var a =20;
}

as 'var' declaration goes to 'Global environment' and sets in Memory context, it cannot be set using 'Block environment' value Hence:    Uncaught SyntaxError: Identifier 'a' has already been declared
*/
//start
//below is block
// {
//block is a compound statement
//use to combine multiple statements into one group
//why to group
//to use multiple statements where js excepts one statements
//   var a = 10;
//   console.log(a);
// }
// //block scope for var,  let, const
// {
//   var a = 10;
//   let b = 12;
//   const c = 324;
//   console.log(a); //prints all the 3
//   console.log(b);
//   console.log(c);
// }
// console.log(a); //prints cause a is in global context
// console.log(b); //error
// console.log(c); //error
// //shadowing in js
// var a = 100;
// {
//   var a = 10;
//   console.log(a);//here ouput 10 a shadows outer a
// }
// console.log(a)//output 10 since a is modified in global context
// //applies only for var keyword
// //---------------------------------------
// let a = 100;
// {
//   let a = 10; //shadowing as default
//   console.log(a); //here ouput 10 a shadows outer op 10
// }
// console.log(a); //not modified the outer b op 100
//same thing for const
//SHADOWING IS SAME FOR FUNCTION
//illegal shadowing
// let a = 20;
// {
//   var a = 20;
// }
//throws error
// var a = 20;
// {
//   let a = 20; ///works
// }
//*********end */

//---------------ep10--------------
//closures case 1
// function x() {
//   var a = 7;
//   function y() {
//     // a = 22;
//     console.log(a);
//   }
//   y();
// }
// x();
//functions binds together with its lexical environment --  closure
//closure case 2
// function x() {
//   var a = 7;
//   /*return*/ function y() {
//     // a = 22;
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);
// z(); //returns 7
//here after x() is executed the execution context is destroyed but also after that
// the a(in function y) has access to a's value in function x() becausse
//the lexical enviroment is not forgotten
//so z returns 7 even if its invoked after 1000's lines of code
//closure case 3
// function x() {
//   var a = 7;
//   /*return*/ function y() {
//     // a = 22;
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// var z = x();
// console.log(z);
// z(); //return 100-------------imp since a holds the reference it returns 100 instead of 7
//case 4
// function g() {
//   a = 800;
//   function x() {
//     function y() {
//       // a = 22;
//       console.log(a);
//     }
//     y();
//   }
//   x();
// }

// var z = g();
// console.log(z);
// z();
//-----------end------------------

//-------------ep 11--------------
// function x() {
//   //   var a = 7;
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("Namaste js");
// }
// x();
//example to print 1 to 5 without using let keyword
//------------------settimeout and closures
//---------------end----------------------

//--------------ep12--------------
/*
a function along with its reference to its outer environment
*/
