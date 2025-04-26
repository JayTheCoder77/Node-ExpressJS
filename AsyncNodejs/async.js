// synchronous code
// console.log("task1");
// console.log("task2");
// console.log("task3");

// rest of the code is blocked
// console.log("Start operation");

// function sleep(ms) {
//     let startTime = new Date().getTime()
//     console.log("running operation");
//     while (new Date().getTime() < startTime + ms) {
//         console.log("in progress");
//     }
//     console.log("done");   
// }
// sleep(1000)
// console.log("do something else");

// asynchronous code

console.log("Start operation");

function sleep(ms) {
    console.log("running operation");
    // async
    setTimeout(() => {
        console.log("done");
    } , ms)
}
sleep(1000)
console.log("do something else");