// //js interview
// //what is closures in js
// // a function along with its reference to its outer environment is called closures
// // it is used to remember the variables of its outer function even after the outer function has returned
// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner; //imp line
// }
// outer()();
// //var close = outer(); close();
// //output:10
// //now if we call inner function without outer function it will throw an error
// //2
// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   var a = 10;
//   return inner; //imp line
// }
// outer()();
// //still output 10
// //3 var -- let
// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   let a = 10;
//   return inner; //imp line
// }
// outer()();
// //still output 10
// //4

// function outer(b) {
//   function inner() {
//     console.log(a, b);
//   }
//   var a = 10;
//   return inner; //imp line
// }
// outer("helloworld")();
//output:10 helloworld
//5
// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     var a = 10;
//     return inner; //imp line
//   }
//   return outer;
// }
// var close = outest()("helloworld");
// close();
//6
// function outest() {
//   return function (b) {
//     return function () {
//       console.log(a, b);
//     };
//     var a = 10;
//   };
// }
// outest()("hello")(); // This will log `10 hello`
//7
// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     // let a = 10;
//     return inner; //imp line
//   }
//   return outer;
// }
// let a = 100;
// // Call `outest()`, which returns a function that takes `b`, then call that function with `"hello"`, which returns `inner`, and finally call `inner()`
// var close = outest()("hello");
// close();
//prints 10 if inner let a = 10;
//prints 100 if inner not exists
//what are the advantages of closures
//advantages of closures
//1
// Closures are useful for creating private variables and functions that can be accessed only within the closure.
//2
// Closures are useful for creating higher-order functions, which are functions that take other functions as arguments
//3
// Closures are useful for creating functions that can be used as event handlers, which are functions that
// are called in response to a specific event.
//4
// Closures are useful for creating functions that can be used as callbacks, which are functions that are
// passed as arguments to other functions.
// //5
// // Closures are useful for creating functions that can be used as decorators, which are functions that
// // modify the behavior of other functions.
// //example for encapsulation
// function counter() {
//   var count = 0;
//   function incrementCounter() {
//     count++;
//     console.log(count);
//   }
//   return incrementCounter;
// }
// // console.log(count); results in error
// var counter1 = counter();
// counter1();
// //we can crete multiple counter
// var counter2 = counter();
// counter2();
// counter1();
// counter2();
// //increment and decrement counter
// // //use constructor function
// function Counter() {
//   var count = 0;
//   this.incrementCounter = () => {
//     count++;
//     console.log(count);
//   };
//   this.decrementCounter = () => {
//     count--;
//     console.log(count);
//   };
// }
// //create multiple counter
// var Counter1 = new Counter();
// Counter1.incrementCounter();
// Counter1.incrementCounter();
// Counter1.decrementCounter();
// //disadvantages of closures
//overconsumption of memory - will not garbage collected
//if not handled properly it will lead to memory leaks
//what is garbage collector
//Garbage collector is a part of the JavaScript engine that is responsible for freeing up memory occupied by
// objects that are no longer needed or referenced.
// function a() {
//   var x = 0;
//   return function b() {
//     console.log(x);
//   };
// }
// // a()();
// var y = a();
// y returns function b where lexical envi variables are not garbage collected
//because it is still referenced by y
//smartly garbage collected
// function a() {
//   var x = 0;
//   z = 210;
//   return function b() {
//     console.log(x);
//   };
// }
// // a()();
// var y = a();
// y();
// //here z is smartly grabage collected
