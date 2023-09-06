import React from 'react'
import './SimilarExercises.css'
import ExerciseCard from '../Exercises/ExerciseCard/ExerciseCard'

const SimilarExercises = ({similarExercise}) => {
   
  return (
    <section className='similar__exercise'>
        <div className='title'>
            <h2>Similar Exercises</h2>
            </div>
        <div className='similar__exercise__container'>
            {similarExercise.slice(0,3).map((item,id)=>(
                <ExerciseCard key={id} data={item}/>
                
            ))}
        </div>
    </section>
  )
}

export default SimilarExercises