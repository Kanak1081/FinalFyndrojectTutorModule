const mongoose = require('mongoose')
//const bcrypt = require('bcrypt')
//User Schema
const userSchema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type:String,
        required:true
    }
})

// userSchema.pre('save',async function (next){
//     try{
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(this.password,salt)
//         this.password = hashedPassword
//         next()
//     }
//     catch(error){
//         next(error)
//     }
// })

module.exports = mongoose.model("User",userSchema);


