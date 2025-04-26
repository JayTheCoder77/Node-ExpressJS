// const promise = new Promise((resolve,reject) => {
//     console.log("async task");
//     if(true){
//         const person = {
//             name : "jayjr"
//         }
//         resolve(person)
//     }
//     else{
//         const error = {
//             errCode : "1001"
//         }
//         reject(error)
//     }
// })

// promise.then((val) => {
//     console.log(val);
// } , (err) => {
//     console.log(err);
// }).catch(() => {
//     console.log("failed");
// }).finally(() => {
//     console.log("clean up");
// })

// let p = Promise.resolve("done")
// // let p = Promise.reject("fail")

// p.then((val) => {
//     console.log(val);
// })

// function asyncTask(cb){
//     return Promise.resolve()
// }
// asyncTask().then(() => {
//     console.log(name);
// })
// const name = "jay"

// const p = Promise.resolve("done")
// const p = Promise.reject("fail")
// p.then((val) => {
//     console.log(val);
//     return "done2"
// }).then((val) => {
//     console.log(val);
//     return "done3"
// }).then((val) => {
//     console.log(val);
// }).catch((err) => {
//     console.log(err);
// })

const makeApiCall = (time) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("api exec in " + time)
        }, time)
    })
}

// makeApiCall(1000).then((val) => {
//     console.log(val);  
// })

let multiApiCall = [makeApiCall(1000) , makeApiCall(2000) , makeApiCall(3000)]
Promise.all(multiApiCall).then((values) => {
    console.log(values);
})

Promise.race(multiApiCall).then((val) => {
    console.log(val);
})