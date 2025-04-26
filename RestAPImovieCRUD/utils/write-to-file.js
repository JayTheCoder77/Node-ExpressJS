import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default  function writeToFile(data) {
    try {
        fs.writeFileSync(path.join(__dirname , ".." , "data" , "movies.json") , JSON.stringify(data) , "utf-8")
    } catch (error) {
        console.log(error);
    }
}