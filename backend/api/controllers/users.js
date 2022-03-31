const User = require("../models/users.js");
const Course = require("../models/courses.js");

const mongoose = require("mongoose");


//REGISTER API

const create_user = async(req,res)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        console.log("This is the user");
        console.log(user);
        //console.log("User ends");
        //2. If user email is found. That means user already exists which means we have to return a conflict
        if(user.length>=1){
            return res.status(409).json({
                message: "Email already exists"
            })
        }
        else{
            //If we are in this block , that means user is not found. That means we have to create a new user.
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name : req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            user.save()
            .then(result=>{
                console.log("This is the result from saving the user.")
                console.log(result);
                console.log("HEllo coming from backend")
                res.status(201).json({
                    message:"user successfully created",
                    user:result
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

const get_user = (req,res,next)=>{
    const {email} = req.params;
    User.find({email})
    .exec()
    .then((successResult)=>{
        console.log("Hello coming from login backend")
        res.status(200).json({
             message:"Got the current user",
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
    new Course({ 
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
    Course.find()
    .exec()
    .then((courses)=>{
        console.log(courses)
        res.status(200).json({
           
            courses
        })
        var count = courses.length
    })
    .catch(
        err=>console.log(err)
    )
}
const get_count = (req,res)=>{
    Course.find()
    .exec()
    .then((courses)=>{
        var count = courses.length
        console.log(count)
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
    // const {courseId} = req.body_id;
    // const updateOps = {};

    // for(const [key, value] of Object.entries(req.body) ){
    //     updateOps[key] = value;
    // } 
    
    // Course.updateOne({_id:courseId}, {$set: updateOps})
    // .exec()
    // .then((successResult)=>{
    //     res.status(200).json({
    //         message:"Course updated",
    //     });
    // })
    // .catch((err)=>{
    //     res.status(500).json({
    //         message:"There has been an error",
    //         error:err
    //     });
    // });
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
    // const {courseId} = req.params;

    // Course.remove({
    //     num:courseId
    // })
    // .exec()
    // .then((successResult)=>{
    //     res.status(200).json({
    //         message:"Course deleted",
    //     })
    // })

    // .catch((err)=>{
    //     res.status(500).json({
    //         message:"There has been an error",
    //         error:err
    //     });
    // })
    
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



module.exports = {get_count,create_user,get_user,add_single_course,get_all_courses,get_single_course,update_single_course,delete_single_course};