import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import Hsb from '../components/HSB/Hsb'
import Search from '../components/Search/Search'
import Exercises from '../components/Exercises/Exercises'

const Home = () => {
  const [bodyPart,setBodyPart]=useState('all')
  const [exercises,setExercises]=useState([])
  return (
    <>
    <Hero/>
    <Search exercises={exercises} setExercises={setExercises} setBodyPart={setBodyPart}/>
    <Exercises exercises={exercises} bodyPart={bodyPart} setExercises={setExercises}/>    
    </>
  )
}

export default Home