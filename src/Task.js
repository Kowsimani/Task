// import {React,useState} from 'react'
// import './Task.css';

// function Task() {
//   const [theme, setTheme] = useState("light"); 
//   const [num, setNum] = useState("0");
//   const[change,setChange]=useState("");

//   const Theme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };  

//    const generate = () => {
//     setNum(Math.random()+ 10);
//   };
//   /*const Change=()=>{
//      setChange({
//       ...change,
//       [change.target=value]event,
//  }  
// )
//          }*/
 
//   return (
    
//     <div className={theme}>
//       <div className="name">
//         <h2>Theme Changer</h2>
//         <button onClick={Theme}>
//           Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
//         </button>
//       </div> 
//     <div className="box">
//       <h2>Random Number Generator</h2l>
//       <div className="number">{num}</div>
//       <button onClick={generate}>Generate</button>
//     </div>
//     </div>
//    );
// }
// export default Task 




{employee?.skills && <EmployeeSkills skills={employee.skills} />}
<button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
{show && <p><b>City:</b> {address?.city}</p>}