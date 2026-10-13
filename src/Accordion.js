import React, { useState } from 'react'
import'./Accordion.css'
const Accordion=()=>{
    const[open,setOpen]=useState(null)//for accordion
    function expand(){
        setOpen(!open)
    }
    const accor=[
        {id:1,title:"Accordion 1",para:"paragraph 1"},
        {id:2,title:"Accordion 2",para:"paragraph 2"}
    ]
    function handleId(id){
        console.log(id)
        //setOpen(id)
        setOpen(open===id?null:id)
    }
    return( 
        <>
        {/*<p className='head' onClick={expand}>Accordion 1</p>
        {open?
        <p>BTS (Korean: RR: Bangtan sonyeondan; lit. 'Bulletproof Boy Scouts'), also known as the Bangtan Boys, is a South Korean boy band formed in 2010. The band consists of Jin, Suga, J-Hope, RM, Jimin, V, and Jung Kook, who co-write or co-produce much of their material. Originally a hip …
Name
</p>:""}
        <p className='head'>Accordion 2</p>
        <p>BTS stands for the Korean phrase Bangtan Sonyeondan (Korean: 방탄소년단), which translates literally to 'Bulletproof Boy Scouts' </p>
        */}
        {
            accor.map((res)=>{
                return(
                    <>
                    <p className='head'onClick={()=>handleId(res.id)}>{res.title}</p>
                    {open==res.id?<p>{res.para}</p>:""}
                    </>
                )
            })
        }
        

        </>
    )
}
export default Accordion