import React from 'react';
//import Parent from '/Parent'
//import FormControl from '@mui/material/FormControl'; 
//import TextField from '@mui/material/TextField';
//import Paper from '@mui/material/Paper';
//import Button from '@mui/material/Button';
//import Box from '@mui/material/Box'
//import Typography from '@mui/material/Typography';

//function App() { 
  //return (
    //<div>
      //<Parent/>
    //</div>
 // );
//}

//export default App;
//import Parent from "./Parent";
//import "./App.css"
//import Box from '@mui/material/Box';


  


//function App() {
  //const student = {
   // name: "Arun",
   // department: "MERN Stack"
 // };

 // return <Parent student={student} />;

//}

//export default App;
//import EmployeePage from "./EmployeePage";
//import "./App.css"
//import Badge from "./Badge";
//import MailIcon from"./MailIcon";
//import IconButton from "./IconButton"
//function App() { 
  //const employee = {
    //name: "Priya",
    //////role: "Frontend Developer",
    //salary: 30000,
    //skills: ["React", "JavaScript", "CSS"]
 // };
  
  


  
  //return <EmployeePage employee={employee} />;


//export default App;  
/*import UserList from "./UserList";



function App() {
  return (
    <div>
      <h1>User Directory</h1>
      <UserList />
    </div>
  );
}

export default App;*/
/*import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Dashboard products={products} loading={loading} />
  );
}*/
/*import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
  );
}*/
import {useState,useEffect} from "react"
import axios from "axios"
import StudentList from "./StudentList"
function App() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [inputName, setInputName] = useState("")
  const [inputUsername, setInputUsername] = useState("")
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setStudents(response.data);
        setLoading(false); 
      })
  }, [])
  const handleAddStudent = (e) => {
    e.preventDefault()
    if (inputName === "" || inputUsername === "") {
      alert("Both fields are required!");
      return
    }
    const newStudent = {
      id: Date.now(),
      name: inputName,
      username: inputUsername,
      email: "newuser@example.com",
      address: { city: "New City" },
    }
    setStudents([newStudent, ...students])
    setInputName("")
    setInputUsername("")
  }

  return (
    <div style={{ padding:"20px", background:"pink",fontFamily:"sans-serif" }}>
      <h1 style={{color:"orange"}}>User Directory</h1>
      <form onSubmit={handleAddStudent} style={{ marginBottom: "20px" }}>
        <h3>Add New Student</h3>
        <input 
          type="text" 
          value={inputName} 
          onChange={(e) => setInputName(e.target.value)} 
        />
        <input 
          type="text" 
          value={inputUsername} 
          onChange={(e) => setInputUsername(e.target.value)} 
          style={{marginLeft:"10px"}}
        />
        <button type="submit" style={{marginLeft:"10px",color:"blue"}}>Add</button>
      </form>
      {loading ? <p>Loading users...</p> : <StudentList students={students} />}
    </div>
  )
}

export default App
