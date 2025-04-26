const { log } = require("console")
const path = require("path")

const filePath = "D:\\node js express js\\NodeJsErrorAndFile\\files\\sample.txt"

// dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);

// // base name
// console.log(path.basename(filePath));
// console.log(__filename);

// // extenstion
// console.log(path.extname(filePath));
// const sampleFile = "sample.text"
// console.log(path.join(path.dirname(filePath), sampleFile));

const fs = require("fs")
const fsPromise = require("fs").promises
// console.log(fs);

// read from file - async

// fs.readFile(filePath , "utf-8" , (err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
    
//     // console.log(data.toString());
    
// })
// // sync
// try {
//     const data = fs.readFileSync(path.join(__dirname,"files","sample.txt"), "utf-8")
//     console.log(data);
    
// } catch (error) {
//     console.log(error);
// }

// const fileReading = async () => {
//     try {
//         const data = await fsPromise.readFile(filePath , "utf-8")
//         console.log(data);
//     } catch(err){
//         console.log(err)
//     }
// }

// fileReading()

// writing into file - async 

const txtFile = path.join(__dirname , "files" , "text.txt")
const content = "hello world im writing this into the text.txt file"
// fs.writeFile(txtFile , content , (err) => {
//         if(err){
//             throw new Error(err)
//         }
//         console.log("data written");
//         fs.readFile(txtFile , "utf-8" , (err,data) => {
//             if(err) throw new Error(err)
//             console.log(data);
            
//         })
//         // console.log(data.toString());
        
//     })

const writing = async () => {
    try {
        // await fsPromise.writeFile(txtFile , content)
        await fsPromise.writeFile(txtFile , "\n new file name" , {
            flag : "a+"
        })
        // await fsPromise.appendFile(txtFile , "\n file appended")
        await fsPromise.rename(txtFile , path.join(__dirname , "files" , "new.txt"))
        const data = await fsPromise.readFile(txtFile)
        console.log(data.toString())
    }   catch (error) {
        console.log(error);
    } 
}
writing()