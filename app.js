require("dotenv").config({path:"./config.env"})
const http = require("http");
const express = require("express");
const path = require('path')
const app = express();
const userRouter = require('./routes/users.js')
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Razorpay = require('razorpay')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const mongoose = require("mongoose");

const dbURL = "mongodb+srv://Kanak1081:kanak1234@cluster0.wa3dw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//CREATING A SERVER USING EXPRESS
mongoose.connect(dbURL,{
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

app.use('/',userRouter)

//Handle production
// if(process.env.NODE_ENV === 'production'){
//     //Static folder
//     app.use(express.static(__dirname + './public'))
//     //handle SPA
//     app.get(/.*/,(req,res)=> res.sendFile(__dirname + './public/index.html'))
// }

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