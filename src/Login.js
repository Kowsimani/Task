import {React,useState} from 'react';
import './Login.css';
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const login = (e) => {
    e.preventDefault();
    alert(email + " Login In");
    axios.get("https://dummyjson.com/c/e2d7-5698-4370-vbf7")
             .then((res) => res.json(login))
    
  }
  
        
           

  return (
    
    <div className="box">
        <center>
      <h2>Login Page</h2>
      <form onSubmit={login}>
        <input type="Email:" placeholder=" Email" onChange={(e) => setEmail(e.target.value)} /><br/>
        <input type="password:" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/>
        <button>Login</button>
      </form>
      </center>
    </div>
  )
}

export default Login;