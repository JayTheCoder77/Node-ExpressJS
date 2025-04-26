import dotenv from 'dotenv';
import http from 'http';
import getReq from './methods/get-request.js';
import postReq from './methods/post-request.js';
import putReq from './methods/put-request.js';
import deleteReq from './methods/delete-request.js';
import {readFile} from 'fs/promises'

dotenv.config()

const PORT = process.env.PORT || 5001

async function loadMovies(){
    try {
        const movies = await readFile('./data/movies.json','utf-8')
        return JSON.parse(movies)
    } catch (error) {
        console.log("error");
        return []
    }
}

const server = http.createServer(async (req,res) => {
    const movies = await loadMovies()
    // console.log(movies);
    
    req.movies = movies
    switch(req.method){
        case  "GET":
        getReq(req,res)
        break
        case  "POST":
        postReq(req,res)
        break
        case  "PUT":
        putReq(req,res)
        break
        case  "DELETE":
        deleteReq(req,res)
        break
        default :
        res.statusCode = 404
        res.setHeader("Content-Type" , "application/json")
        res.write(JSON.stringify({
            title : "Error" , message : "Hey Jayjr10 this is an error"
        }))
        res.end()
    }
    
})

server.listen(PORT , () => {
    console.log(`server started on port : ${PORT}`);
})