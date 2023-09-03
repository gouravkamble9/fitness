import React from 'react'
import './ExerciseCard.css'
import { useNavigate } from 'react-router-dom'


const ExerciseCard = ({data}) => {
  const navigate=useNavigate()
  return (
    <div className='exercard__container' onClick={()=>navigate(`/exercise/${data.id}`)}>
      <img src={data.gifUrl} alt="" />
      <div className='meta__data'>
        <span>{data.bodyPart}</span>
        <span>{data.equipment}</span>
      </div>
      <p>{data.name}</p>

    </div>
  )
}

export default ExerciseCard