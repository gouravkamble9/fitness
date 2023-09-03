import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Exercise.css'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseDetails from '../components/ExerciseDetails/ExerciseDetails'

const Exercise = ({setActiveLink}) => {
  const [exerciseDetails,setExerciseDetails]=useState({})
  const {id}=useParams();
  console.log(id)
  setActiveLink('Exercise')
  useEffect(()=>{
    const fetchExerciseData=async ()=>{
      const exerciseDetailData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,exerciseOptions)

      setExerciseDetails(exerciseDetailData)
    }

    fetchExerciseData()
  },[id])
  return (
    <section className='detail__exercise'>
      <ExerciseDetails exerciseDetails={exerciseDetails}/>
    </section>
  )
}

export default Exercise