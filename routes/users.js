const express = require("express");
const router = express.Router(); 

const {add_single_course,get_all_courses,update_single_course,delete_single_course, get_count} = require("../controllers/users.js")

router.get("/count/:username",get_count)
// router.post("/login",login)
// router.post('/user',create_user)
router.get('/view-courses/:username',get_all_courses)
router.post('/add-course/:username',add_single_course)
router.post('/update-course/:id',update_single_course)
router.delete('/delete-course/:id',delete_single_course)


module.exports = router