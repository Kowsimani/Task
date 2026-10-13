import {React,useState} from 'react'
import './ModalBox.css'
import image from './appricots.jpeg'
function ModalBox() {
    const[Modal,setModal]=useState(false)
  return (
    <>
    <center>
    <div className='kowsi'>ModalBox</div>
    {Modal ?<div className='modal'>
    <span>Are you sure,Do you want to continue?</span><br></br>
    <button className='button' onClick={()=>setModal(false)}>OK</button>
</div>:""
    }
    <button className='OK' onClick={()=>setModal(true)} >confirm</button>
    
  </center>
  <button className='confirm' onClick={()=>setModal(true)}>confirm</button>{/*it won't open or close again only open*/}
//overlay
<div className='overlay'>
<div className='popup'>
    <button className='xButton'>x</button>
    <img  className='img'src={image} width={"100px"} height={"100px"}/>
    <h1>Secure all your devices</h1>
    <p>Ensure your,mobile phone,laptop and other<br/>
    devics are protected online</p>
    <button className='premium'>Purchase premium</button>
    </div>
</div>
  
    </>
  )
}

export default ModalBox
