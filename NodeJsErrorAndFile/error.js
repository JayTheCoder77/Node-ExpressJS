// error object

const error = new Error("somethings wrong")
// console.log(error.stack)
// console.log(error.message)
// throw new Error("error obj")

const {CustomError} = require("./CustomError")
// throw new CustomError("error obj 2")

// handle exception using try catch

// try{
//     doSomething()
// }
// catch(e){
//     console.log(e.message);
//     console.log(e);   
// }

function doSomething(){
    console.log("do something");
    const data = fetch("localhost:300/api")
    // console.log(data);
    // const data = "hello"
    return data
}

// uncaught exception
// process.on("uncaughtException" , (err) => {
//     console.log("uncaught exception" , err);
//     process.exit(1)    
// })

// doSomething()

// exception with promise

// const promise = new Promise((resolve,reject) => {
//     if(false){
//         resolve(doSomething())
//     }
//     else{
//         reject(doSomething())
//     }
// })

// promise.then((val) => {
//     console.log(val);
    
// }).catch((err) => {
//     console.log(err);
// })

// exception handling async await

const fun1 = async () => {
    try{
        await doSomething()
    }
    catch(err){
        console.log(err);
        throw new CustomError(err.message)
        
    }
}

fun1()
