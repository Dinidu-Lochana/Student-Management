import React, {useState} from "react";
import axios from "axios";

export default function AddStudent(){

    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [gender,setGender] = useState("")
    const [contactNumber,setContactNumber] = useState("")

    function sendData(e){
        e.preventDefault();
        const newStudent = {
            name,
            age,
            gender,
            contactNumber
        }

        axios.post("http://localhost:8070/student/add",newStudent)
        .then(()=>{
            alert("Student Added")
            
        })
        .catch((err)=>{
            alert(err)
        })
    }


    return (
        <form onSubmit={sendData}>
            <div className="container">
            <div className="form-group">
                <label htmlFor="name">Student Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Student Name" onChange={(e)=>{ 
                    setName(e.target.value);
                }} />
            </div>
            
            <div className="form-group">
                <label htmlFor="age">Student Age</label>
                <input type="text" className="form-control" id="age" placeholder="Enter Student Age" onChange={(e)=>{ 
                    setAge(e.target.value);
                }} />
            </div>
            
            <div className="form-group">
                <label htmlFor="gender">Student Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender" onChange={(e)=>{ 
                    setGender(e.target.value);
                }}/>
            </div>
            <div className="form-group">
                <label htmlFor="contactNumber">Student Gender</label>
                <input type="text" className="form-control" id="contactNumber" placeholder="Enter Student Phone" onChange={(e)=>{ 
                    setContactNumber(e.target.value);
                }}/>
            </div>
            </div>
        </form>
    )
}