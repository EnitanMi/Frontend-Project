import { useCreateStudentMutation } from "../feature/studentApiSlice"
import { useState } from "react"

export default function CreateStudent  () {
    const [addStudent] = useCreateStudentMutation()

    const [studentData, setStudentData]= useState({firstName: "", lastName: "", gender: "", age: ""})

     const handlefirstName=(e)=>{
        setStudentData({...studentData, firstName: e.target.value})
     }

     const handlelastName=(e)=>{
        setStudentData({...studentData, lastName: e.target.value})
     }
     const handleGender=(e)=>{
        setStudentData({...studentData, gender: e.target.value})
     }
     const handlePosition=(e)=>{
        setStudentData({...studentData, position: e.target.value})
     }
 
     const handleAge=(e)=>{
        setStudentData({...studentData, age: e.target.value})
     }
    
     const handleSubmit=async(e)=>{
        e.preventDefault();
      
        if(studentData.firstName && studentData.lastName && studentData.gender && studentData.position  && studentData.age){
            await addStudent (studentData);
      
            setStudentData({firstName: "", lastName: "", gender: "", position:"" , age: ""})
        }
      
      }


  return (
    <div>
      <h1>createStudent</h1>
      <form   onSubmit={handleSubmit} >
        <div className="firstName">
            <input type="text" placeholder="enter firstName"
            value={studentData.firstName} 
            onChange={handlefirstName}/>
        </div> <br />
        <div className="lastName">
            <input type="text" placeholder="enter lastName" 
            value={studentData.lastName}
            onChange={handlelastName}/>
        </div> <br />
        <div className="gender">
            <input type="text"  placeholder="gender female"
            value={studentData.gender}
            onChange={handleGender}/>
        </div> <br />
       <div className="age"> 
        <input type="text" placeholder="age"
        value={studentData.age}
        onChange={handleAge}/>
       </div> <br />
       <div className="position"> 
        <input type="text" placeholder="position"
        value={studentData.position}
        onChange={handlePosition}/>
       </div> <br />
        <div className="create">
            <button type="submit" style={{ backgroundColor: "#fff", 
            border: "2px solid black", 
            color: "black",
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease"}}>create student</button>
        </div>
      </form>
    </div>
  )
}
