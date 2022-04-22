const User = require("../models/users.js");
const Course = require("../models/courses.js");

const mongoose = require("mongoose");


//REGISTER API

const create_user = async(req,res)=>{

    User.find({email:req.body.email})
    .exec()
    .then(user=>{ 
        //2. If user email is found. That means user already exists which means we have to return a conflict
        if(user.length>=1){
            return res.status(409).json({
                message: "Email already exists"
            })
        }
        else{
            //If we are in this block , that means user is not found. That means we have to create a new user.
            const user = new User({
                name : req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            user.save()
            .then(user=>{
                res.status(201).json({
                    message:"user successfully created",
                    user
                })
            })
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
}


//LOGIN API

const login = (req,res,next)=>{
   const {email,password} = req.body;
   if(!(email && password)){
       res.status(400).send("Field is required")
   }
   User.find({email:req.body.email.toLowerCase()})
    .exec()
    .then((user)=>{
            res.status(200).json({
                message:"Got the current user",
                user
            });
        
    })
    .catch((err)=>{
        res.status(500).json({
            message:"There has been an error",
            error:err
        });
    });
}


//COURSES 

const add_single_course = (req,res,next)=>{
   
    const useRrId = req.params.userId
    new Course({
        userId:useRrId,
        name: req.body.name,
        description: req.body.description,
        videoId: req.body.videoId
    }).save()
    .then((successResult)=>{
        res.status(201).json({
            message:"New Course Created",
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message:"There has been an error",
            error:err
        });
    });
}

const get_all_courses = (req,res,next)=>{
   
    const useRrId = req.params.userId
    Course.find({userId:useRrId})
    .exec()
    .then((courses)=>{
        res.status(200).json({
            message:"Got all courses successfully",
            courses
        })
    })
    .catch(
        err=>console.log(err)
    )
}


const get_count = (req,res)=>{
    const useRrId = req.params.userId
    Course.find({userId:useRrId})
    .exec()
    .then((courses)=>{
        var count = courses.length
        res.json({count})
    })
    .catch(
        err=>console.log(err)
    )
}

const get_single_course = (req,res,next)=>{
    const {courseId} = req.params;
    Course.find({courseId})
    .exec()
    .then((successResult)=>{
        res.status(200).json({
            message:"Got the current course",
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message:"There has been an error",
            error:err
        });
    });

}

const update_single_course = (req,res,next)=>{
    
    Course.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, 
      (error, data) => {
        if (error) {
          return next(error);
        } 
        else {
          res.json(data)
          console.log('Course successfully updated!')
        }
      }
    )
}


const delete_single_course = (req,res,next)=>
{
    
        Course.findByIdAndRemove(req.params.id, (error, data) => {
          if (error) {
            return next(error);
          } else {
            res.status(200).json({
              msg: data
            })
          }
        })
      

}



module.exports = {create_user,login,get_count,add_single_course,get_all_courses,get_single_course,update_single_course,delete_single_course};