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

router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {name,age,gender,contactNumber}=req.body;
    const updateStudent = {
        name,
        age,
        gender,
        contactNumber
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(()=>{
        res.status(200).send({status:"User updated"})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({status : "Error with updating data"})
    })
})

router.route("/delete/:id").delete(async (req,res)=>{
    let userId = req.params.id;
    
    await Student.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"User deleted"})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({status : "Error with deleting data"})
    })
})

router.route("/get/:id").get(async (req,res)=>{
    let userId = req.params.id;
    const user =await Student.findById(userId)
    .then((student)=>{
        res.status(200).send({status:"User fetched", student})
        
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({status : "Error with fetching data"})
    })
})

module.exports = router;