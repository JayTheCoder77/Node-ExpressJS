const readline = require("readline")
const prompt = require("prompt-sync")()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question(` What is your name?` , name => {
//     console.log(`Hello ${name}`);
//     rl.close()
// })

const name = prompt("what is ur name?")
console.log(`Hi ${name}`);
