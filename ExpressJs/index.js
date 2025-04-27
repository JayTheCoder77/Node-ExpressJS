import express from "express";

const app = express();
const port = 3001;

app.get('/' , (req,res) => {
    // res.send("hello world")
    res.json({"message" : "home page"})
})

app.get('/users' , (req,res) => {
    res.json({"message" : "get all users"})
})

app.get('/users/:id' , (req,res) => {
    res.json({"message" : `get id of user ${req.params.id}`})
})

app.post('/users/' , (req,res) => {
    res.json({"message" : "create new user"})
})

app.put('/users/:id' , (req,res) => {
    res.json({"message" : `update id of user ${req.params.id}`})
})

app.delete('/users/:id' , (req,res) => {
    res.json({"message" : `delete id of user ${req.params.id}`})
})

app.listen(port , () => {
    console.log("app listening on port" , port);
})