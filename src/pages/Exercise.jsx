import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Exercise.css'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import ExerciseDetails from '../components/ExerciseDetails/ExerciseDetails'
import ExerciseVideos from '../components/ExerciseVideos/ExerciseVideos'

const Exercise = ({setActiveLink}) => {
  const [exerciseDetails,setExerciseDetails]=useState({})
  const [exerciseVideos,setExerciseVideos]=useState([])
  const {id}=useParams();
  console.log(id)
  setActiveLink('Exercise')
  useEffect(()=>{
    const fetchExerciseData=async ()=>{
      const exerciseDetailData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,exerciseOptions)

      const exerciseVideoDetails=await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideoDetails.contents)
      setExerciseDetails(exerciseDetailData)
    }

    fetchExerciseData()
  },[id])
  return (
    <section className='detail__exercise'>
      <ExerciseDetails exerciseDetails={exerciseDetails}/>
      <ExerciseVideos exerciseVideos={exerciseVideos}/>
    </section>
  )
}

export default Exercise