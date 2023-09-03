import React, { useContext, useEffect, useState } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import icon from '../../assets/dumb.png'
import './Hsb.css'




const Hsb = ({bodyParts,setExercises,setBodyPart}) => {
    
  return (
    
    <>
    {bodyParts.map((item,id)=>(
     <div key={id}  className='container' onClick={()=>setBodyPart(item)}>
        <img src={icon} alt="" />
        <span>{item}</span>
     </div>
    ))}
  </>
  )
}

export default Hsb