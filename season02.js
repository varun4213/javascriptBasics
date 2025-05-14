/*Callback hell - Callback passed into another function as an argument and another function passed
 into the callback function as nested callback. So code go horizontally inside vertically. So the callback
  code as unmaintainable ans unreadable. It's also known as pyramid doom

2. Inversion of control - The callback function is passing to another function as an argument.
 So our callback function blindly trust the other function. Whether this will execute or not
*/
// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart,function(orderId){
//     proceedTopayment(orderId);
// });
// //returns orderid

// const promise = createOrder(cart);

// promise.then(function(orderId){
//     proceedTopayment(orderId);
// });

//promise chaining
// createOrder(cart)
// .then(function(orderid){
//     return proceedtopayment(orderid)
// })
// .then(function (paymentInfo){
//     return showorderSummary(paymentInfo);
// })
// .then(function (paymentInfo){
//     return updatewalletbalance(paymentInfo);
// })

// const GITHUB_API = "https://api.github.com/users/akshaymarch7"

// const user = fetch(GITHUB_API);

// console.log(user)
// //pending when encounters log then fulfilled after some time

// user.then(function(data){
//     console.log(data)
// })

//PROMISE OBJECTS ARE IMMUTABLE

//what is promise in js
// container for future value
//a promise is an object representing the eventual
//completion or failure of an async operation

//1.) Callback Hell (Pyramid of doom)
// 2.) Inversion of control
// 1) Inversion of control is overcome by using promise
// promise is object represent the eventual completion of asynchonous operation
// a)A promise has 3 states: pending | fulfilled | rejected.
// b) As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
// c) A promise resolves only once and it is immutable in nature.
// d) Using .then() we can attached the cb(callback) function.
// 2) - To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// - A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

//-----------------------------------end----------------------------

//----------------------------ep03--------------------------
//creating promise, error handling, promise chaining
// const cart2 = ["shoes", "pants", "kurta"];

// const promise = createorder(cart2);


// promise.then((orderid) => {
//   console.log(orderid);
// });
// //producer end
// function createorder(cart2) {
//   const pr = new Promise(function (res, rej) {
//     //createorder
//     //validate card
//     //orderid is r4equired
//     if (!validateCart(cart2)) {
//       const err = new Error("cart is not valid");
//       rej(err);
//     }
//     //logic for createOrder
//     const orderid = "12345";
//     if (orderid) {
//       res(orderid);
//     }
//   });

//   return pr;
// }

// function validateCart(cart2){
//     return true;
// }
//--------------------------------------------------------------------
//-------------------------------------------------------------------
/*
1. Promise can be created using a new Promise() constructor function.
2. This constructor function takes a callback function as argument. 
3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
4. We can only resolve or reject a promise. Nothing else can be done.
5. An error can also be created using new Error('error message').
6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during
the execution of promise chain.
7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle
any error for that, also that ,then will get executed no matter what.
8. It can be useful in a way if we want to catch error for a particular portion of a chain.
9. We can have multiple catch based on requirement and then a general catch at the end.
10. Always remember to return a value in the promise chain for the next .then to use .
11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next.
then in the promise chain is attached to the promise returned by the current callback function.
*/

const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart)
  .then(function(orderId) {
    console.log(orderId);
    return orderId;
  })
  
  .then(function(orderID) {
    return proceedToPayment(orderID)
  })
  .then(function({ message, amt }) {
    console.log(message, 'of amount:', amt);
    return showOrderSummary(message, amt);
  })
  .then(function({ message, amt }) {
    console.log('Your wallet has beed debited by:', amt);
  })
  .catch(function(err) {
    console.log(err.message);
  })
  .then(function() {
    console.log('No matter what happens, I will get executed');
  });



function createOrder(cart) {
  const pr = new Promise(function(resolve, reject) {
    // create order
    // Validate Cart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error('Cart is not valid!');
      reject(err);
    }
    // logic for createOrder
    const orderId = '12345';
    if (orderId) {
      setTimeout(function() {
        resolve(orderId);
      }, 5000)
    }
  });

  return pr;
}

function proceedToPayment(orderID) {
  // Logic for handling payment.
  // This function returns a promise
  return new Promise(function(resolve, reject) {
    // logic
    resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
  })
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise(function(resolve, reject) {
    // console.log(amt);
    if (amt >= 2000) {
      resolve({ message: 'You have ordered items that cost ${amt} RS', amt });
    } else {
      reject(new Error('Please buy more for discount'));
    }
  })
}

function validateCart(cart) {
  // code to validate cart.
  return true;
  // return false;
}



