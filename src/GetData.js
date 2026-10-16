import {React,useState,useEffect} from 'react'
//import axios from 'axios'
const GetData = () => {

    const[data,setData]=useState([])
    useEffect(()=>{
       // axios.get("https://dummyjson.com/c/577b-e093-4e92-8091")
        //
    },[])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>ID</th>
                </tr>
            </thead>
        {data.map((i)=>{
            return(
                <>
                  <body>
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>{i.id}</td>
                    </tr>
                  </body>
                </>
            )
        })}
                </table>

    </div>
  )
}
export default GetData