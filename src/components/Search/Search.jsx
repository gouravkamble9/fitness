import React, { useEffect, useState } from 'react'
import './Search.css'
import Hsb from '../HSB/Hsb'
import { exerciseOptions,fetchData } from '../../utils/fetchData'

const Search = ({exercises,setExercises,setBodyPart}) => {

    const [search,setSearch]=useState("")
    
    const [bodyParts,setBodyParts]=useState([])

    useEffect(()=>{
        const fetchExerciseData=async ()=>{
            const bodyPartData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
            console.log(bodyPartData)
            setBodyParts(['all',...bodyPartData])
        }

        fetchExerciseData();
    },[])




    const handleSearch=async ()=>{
        if(search){
            const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
            console.log(exerciseData)
        
        const searchedExercise=exerciseData?.filter((exercise)=>exercise.name?.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        ||exercise.equipment.toLowerCase().includes(search)
        ||exercise.bodyPart.toLowerCase().includes(search)
        )
            
        setExercises(searchedExercise)
        setSearch('')
        
        }
    }

  return (
    <section className='search'>
        <div className='title'>
            <h2>Awesome Exercises You Should Know</h2>
            </div>
            <div className='input'>
                <input type="text" 
                placeholder='Search Exercise'
                value={search}
                onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='card__container'>
                <Hsb bodyParts={bodyParts} setExercises={setExercises} setBodyPart={setBodyPart}/>
            </div>
    </section>
  )
}

export default Search