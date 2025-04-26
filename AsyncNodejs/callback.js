console.log("start");

function asyncTask(cb){
    console.log("running");
    setTimeout(() => {
        cb(null , "data from server")
    },0)
}

// asyncTask((err,data) => {
//     if(err) throw err
//     else console.log(data);
// })
// console.log("end");

// const name = "jay"

// callback hell
function makeApiCall(cb){
    setTimeout(() =>{ 
        console.log("async task");
    }, 0)
}

makeApiCall(() => {
    makeApiCall(() => {
        asyncTask(() => {

        })
    })
})