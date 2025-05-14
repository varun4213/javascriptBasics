"use strict";
// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("p1 success");
//   }, 3000);
// });

// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("p2 success");
//   }, 1000);
// });

// const p3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("p3 success");
//   }, 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.error(err);
//     console.log(err.errors);
//   });
//-------------------------------------------------------------------

//-------------------------this--------------------

//this in global scope
//this keyword works differently in strct mode and non strict mode
console.log(this); //this represents global Object -- window, nodejs--- global

//this inside a function

function x() {
  //the value depends on strcit and non strict mode
  console.log(this);
}

//this in strict mode - (this substitution)
//if the value of this is undefined or null
//this will be replaced with global object
//only in non strict mode the above rules apply

//this value depends on how this is called (window)
x(); //undefined
window.x(); //when called with reference//window

//this inside a object's method
// if u make a function part of an object then it is called method
const student = {
  name: "varun",
  printname: function () {
    console.log(this);
    // console.log(this.a)
  },
};

student.printname();

const student2 = {
  name: "varunfadjbkaf",
};
student.printname.call(student2); //value of this is student 2
//call apply bind methods (sharing methods)

//this inside arrow function

  const obj = {
    a: 10,
    x: () => {
      console.log(this); //enclosing lexical context
    },
  };
  obj.x();


const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this); //enclosing lexical context
    };
    y();
  },
};
obj2.x();

//this inside nested arrow function

//this inside DOM elements => reference to htmlelement
