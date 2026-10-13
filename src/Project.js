import {React,useState} from "react";
import './Project.css'
 const Project =()=>{
    const [form,setForm]=useState({
    id:0,
    name:"selva",
    age:24,
    dept:"MBA",
    marks:98
})
const [value,setValue]=useState({
    id:1,
    name:"kowsi",
    age:20,
    dept:"CSE",
    marks:99
})
function change(event){
    
    setValue({
        ...value,
        [event.target.name]:event.target.value
        
 })
}
 function submit(event){
    event.preventDefault();
    setForm({
        ...form,  
     name:value.name,
     age:value.age,
     dept:value.dept,
     marks:value.marks,
     
 })
 
 }
 
 return(
  <div>
    {form.name},<br/>
    {form.age},<br/>
    {form.dept},<br/>
    {form.marks},
    <form onSubmit={submit}>
      <label>Name</label><br/><input onChange={change} name={"name"}placeholder="Enter your name"/><br/>
      <label>age</label><br/><input onChange={change}name={"age"}/><br/>
      <label>dept</label><br/><input onChange={change}name={"dept"}/><br/>
       <label>marks</label><br/><input onChange={change}name={"marks"}/><br/>
      <button type="submit">Submit</button>
    </form>
  </div>
 )
    }

//     const[input,setInput]=useState("You data will be visible here")
//     const[email,setEmail]=useState("")
//     const[age,setAge]=useState("")
//     function inc(){
//         if(value==0){
//           setvalue(1)
//         }
//         else{
//            setvalue(0)
//         }
//         setvalue(value===0?1:0)
//        setValue(!value)
//     }
//     console.log(value)
//     function register(event){

//         setInput(event.target.value)
//     }
//     function emailY(event){
//         setEmail(event.target.value)
//     }
//     function ages(event){
//         setAge(event.target.value)
//     }

//     function handleSubmit(event){
//         event.preventDefault();
//         alert(input);
//         alert(email);
//         alert(age);
        
//     }
    

// return(
//     <div style={{backgroundColor:value?"#23272f":"white",height:"100vh"}}>
//     {value}
//     <center><span style={{cursor:"pointer"}}onClick={inc}>{value ?"🌞 ":"🌙"}</span>
//     <form onSubmit={handleSubmit}>
//         Name:<input onChange={register}/><br/>
//         Email:<input onChange={emailY}/><br/>
//         Age:<input onChange={ages}/><br/>
        
//         <button type="submit">Submit</button>
//     </form>
//     </center>
   
    
//     </div>
    
//     )




export default Project
