require("dotenv").config({path:"./config.env"})
const http = require("http");
const express = require("express");
const path = require('path')
const app = express();
const userRouter = require('./routes/users.js')
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors')

app.use(cors())
app.use(express.json())

const mongoose = require("mongoose");

//CREATING A SERVER USING EXPRESS
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(
    ()=>console.log("MongoDB is successfully connected")
).catch(
    (err)=>console.log(err)
)


//configuring bodyparser (accepts body value from request and parses it into given format like json)
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//configuring morgan(logger)
app.use(morgan("dev"));

app.use('/tutor',userRouter)

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,'/front-end/dist')));

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'front-end','dist','index.html'))
    })
}
else{
    app.get("/",(req,res)=>{
        res.send("API Running")
    })
}
const PORT = process.env.PORT
const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server is running at Port ${PORT}`)
})


module.exports = app