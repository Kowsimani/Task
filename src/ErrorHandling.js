import React, { useState } from 'react'

function ErrorHandling({data}) {
    console.log(data)
    const[value,setValue]=useState(
        { 
        name:"",
        email:"",
        mobile:""
        }
    )
    const[error,setError]=useState({
    nameError:"",
    emailError:"",
    mobileError:""
 
    }
)
    function change(event){
        setValue(
            {
            ...value,
            [event.target.name]:event.target.value
             
        }
    )
    }
    function handleSubmit(event){
        event.preventDefault();
        if(value.name==""){
            setError({
                ...error,
                nameError:"Field is Empty"
        })
        

        }
    
    else if(value.name.length<3){
        setError({
            ...error,
            nameError:"less than>3"
        })

    }
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text"placeholder="Name" name="name"onChange={change}/><br/>
        <span style ={{color:'red'}}>{error.nameError}</span><br/>
        <input type="text"placeholder="Email"name="email"onChange={change}/><br/>
        <input type="text"placeholder="Mobile"name="mobile"onChange={change}/><br/>
        <button>submit</button>
        </form>

          </div>
  )
}
export default ErrorHandling