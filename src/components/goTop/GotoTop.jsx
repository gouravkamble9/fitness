import React, { useEffect, useState } from 'react'
import "./GotoTop.css"
import {BsFillArrowUpCircleFill} from "react-icons/bs"
const GotoTop = () => {

    const [visible,SetVisible]=useState(false)

    const goTotop=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }

    const listenToScroll=()=>{
        let height=300;
        const winscroll=document.body.scrollTop || document.documentElement.scrollTop
        
        if(winscroll >height){
            SetVisible(true)
        }else{
            SetVisible(false)
        }

    }

    useEffect(()=>{
        window.addEventListener('scroll',listenToScroll)
    },[])

  return (
    <div className='circle'> 
        {
         visible  && (<BsFillArrowUpCircleFill size={30} onClick={goTotop}/>)
        }   
    </div>
  )
}

export default GotoTop