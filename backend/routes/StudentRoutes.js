const router = require("express").Router();

let Student = require("../modules/student");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const contactNumber = req.body.contactNumber;

    const newStudent = new Student({
        name,
        age,
        gender,
        contactNumber
    })

    newStudent.save().then(()=>{
        res.json("Student Added");
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put((req,res)=>{
    
})


module.exports = router;