import {React,useState} from 'react'
const[open,setOpen]=useState(null)
const accor=[
    {id:1,title:"acc1",para:"paragraph 1"},
    {id:2,title:"acc2",para:"paragraph 2"}
]
function Sample1(id) {
    console.log(id)
    //setOpen(id)
    setOpen(open===id?null:id)
  return (
    <> 
    <div>Sample1</div>
    {
accor.map((rec)=>{
    return(
        <>
        <p className='head'onClick={()=>handleId(res.id)}>{res.title}</p>
        {open==res.id?<p>(res.para)</p>: " "}
        </>
    )
})
    }
    </>
  )
}

export default Sample1