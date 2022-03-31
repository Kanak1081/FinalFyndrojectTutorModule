const express = require("express");
const router = express.Router(); 

const {create_user,get_user,add_single_course,get_all_courses,get_single_course,update_single_course,delete_single_course, get_count} = require("../controllers/users.js")

router.get("/count",get_count)
router.get("/user/:emailId",get_user)
router.post('/user',create_user)
router.get('/view-courses',get_all_courses)
router.get('/get-course/:courseId',get_single_course)
router.post('/add-course/',add_single_course)
router.post('/update-course/:id',update_single_course)
router.delete('/delete-course/:id',delete_single_course)


module.exports = router