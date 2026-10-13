import {React ,useState}from "react";
const ArrowFunction =()=>{
    const[value,setValue]=useState(0)
    const Increment = () => {
        setValue(value + 1);
    };
    return(
  <>
  <h1>ArrowFunction</h1>
    {value}<br/>
    <button onClick={Increment}>Increment</button>
    <button onClick={()=>setValue(value-1)}>Decrement</button>
    </>
)
}
export default ArrowFunction