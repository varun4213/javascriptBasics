// what is async

// what is await

// how async await works behind the scenes?

// error handling

// interviews

// async await vs promise.then/ .catch

//always returns a promise
async function getData() {
    return  "varun"
}

const p1 = new Promise((res,rej) => {
    // res("promise resolve value");
    setTimeout(() => {
        res("promise resolve value 1111");
    }, 3000);//if 6000 ouput will be different
})

const p2 = new Promise((res,rej) => {
    // res("promise resolve value");
    setTimeout(() => {
        res("promise resolve value 222");
    }, 6000);//if 3000 ouput will be diferent
})

async function handlePromise() {
    //js engine was waiting for promise to resolve
    console.log("Hello world")
    const val = await p1;
    console.log("namaste js 1 -----------")
    console.log(val);
    

    const val2 = await p2;
    console.log(val2);
    console.log("namaste js 2----------")
    
}
handlePromise();

function getData2(){
    p.then(res => console.log(res))//2
    console.log("namaste js")//1
}
getData2();

//await = keyword that can only be used inside async function
//syn error

async function getData() {
    return  p;
}
//returns = either return a promise or if we return a non promise value
//takes the value wraps inside the promise and return it

const dataPromise =  getData();
dataPromise.then((x) => console.log(x));//prins varun

console.log(dataPromise)//wraps varun to a promise
//async and await are used to handle promies

function getData2(){
    p.then(res => console.log(res))
}
getData2();

// const API_URL = "https://api.github.com/users/{users}";

// async function handlePromise() {
//     try{
//   const data = await fetch(API_URL);
//   const jsonvalue = await data.json();
//   console.log(jsonvalue);
//     }catch(err){
//         console.log(err)
//     }

  //fetch is a promise --when resolved gives response
  //readble strom to json use = Response.json()==result
// }

handlePromise();
handlePromise().catch(res => console.log(err))
