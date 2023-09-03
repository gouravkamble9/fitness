import React from 'react'
import './ExerciseDetails.css'
import bodyPart from '../../assets/bodyPart.png'
import equipment from '../../assets/equipment.png'
import target from '../../assets/target.png'

const ExerciseDetails = ({exerciseDetails}) => {
    console.log(exerciseDetails)
  return (
    <div className='detail__exercise__container'>
        <div className="left1">
          <img src={exerciseDetails.gifUrl} alt="" />
        </div>
        <div className="right1">
            <h3>{exerciseDetails.name}</h3>
            <p>Exercises keep ypu strong.{exerciseDetails.name} is one of the best <br/>exercise to traget your {exerciseDetails.target}.It will help you to improve your mood <br/> and gain energy.</p>
            <div className='info'>
                    <span><img className='icon' src={bodyPart} alt="" />{exerciseDetails.bodyPart}</span>
                    <span><img className='icon' src={equipment} alt="" />{exerciseDetails.equipment}</span>
                    <span><img className='icon' src={target} alt="" />{exerciseDetails.target}</span>
            </div>
        </div>
      </div>
  )
}

export default ExerciseDetails