import bodyParser from '../utils/body-parser.js'
import crypto from 'crypto'
import writeToFile from '../utils/write-to-file.js'

export default async function postReq(req,res){
    if(req.url === "/api/movies"){
        try {
            let body = await bodyParser(req)
            body.id = crypto.randomUUID()
            req.movies.push(body)
            writeToFile(req.movies)
            res.writeHead(201, {"Content-Type" : "application/json"});
            res.end()
        } catch (error) {
            console.log(error);
            res.writeHead(400, {"Content-Type" : "application/json"});            
            res.end(JSON.stringify(({title : "Error" , message : "req body invalid"})))
        }
    }
    else{
        res.writeHead(404 , {"Content-Type" : "application/json"})
        res.end(JSON.stringify(({title : "Error" , message : "Hey Jayjr10 this is an error"})))
    }
}