import bodyParser from '../utils/body-parser.js'
import writeToFile from '../utils/write-to-file.js'
export default async function putReq(req,res){
    const baseUrl = req.url.substring(0 , req.url.lastIndexOf('/') + 1)
    let id = req.url.split("/")[3]
    const regexV4 = new RegExp(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    )
    if(!regexV4.test(id)){ 
        res.writeHead(400 , {"Content-Type" : "application/json"})
        res.end(JSON.stringify(({title : "Validation Failed" , message : "Invalid UUID"})))
    }
    else if(baseUrl === '/api/movies/' && regexV4.test(id)){
        try {
            let body = await bodyParser(req)
            const index = req.movies.findIndex((movie) => {
                return movie.id === id
            })
            if(index === -1) {
                res.statusCode = 404
                res.write(JSON.stringify(({title : "Validation Failed" , message : "movie not found"})))
                res.end()
            }
            else{
                req.movies[index] = {id , ...body}
                writeToFile(req.movies)
                res.writeHead(200, {"Content-Type" : "application/json"});
                res.end(JSON.stringify(req.movies[index]))
            }
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