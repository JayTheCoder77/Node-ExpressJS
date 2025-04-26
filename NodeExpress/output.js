const x = "1"
const y = "2"
console.log(x,y)

// %s format variable to string;
// %d format variable to number;
// %i format variable to integer;
// %o format variable to object;


// console.log("i am %s and my age is %d", "jay", 20);
// console.clear()
// console.count("Yo")
// console.count("Yo")
// console.count("Yo 1")
// console.countReset("Yo")
// console.count("Yo")


// const function1 = () => {
//     console.trace()
// }

// const function2 = () => {
//     function1()
// }

// function2()

// const sum = () => {
//     console.log(`${2+3}`);
// }
// const multiply = () => {
//     console.log(`${2*3}`);
// }

// const measureTime = () => {
//     console.time("sum()")
//     sum()
//     console.timeEnd("sum()")
//     console.time("multiply()")
//     multiply()
//     console.timeEnd("multiply()")
// }
// measureTime()

const progressBar = require("progress")

const bar = new progressBar("downloading [:bar] :rate/bps :percent :etas" , {
    total: 20,
})

const timer = setInterval(() => {
    bar.tick()
    if(bar.complete){
        clearInterval(timer)
    }
} , 100)

const chalk = require("chalk")
console.log(chalk.green("node js tutorial"));
