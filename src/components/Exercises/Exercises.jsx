import React, { useEffect, useState } from 'react'
import './Exercises.css'
import ExerciseCard from './ExerciseCard/ExerciseCard'
import { exerciseOptions, fetchData } from '../../utils/fetchData'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Exercises = ({exercises,bodyPart,setExercises}) => {

  const [page,setPage]=useState(1);

  const prod=exercises.slice(0,100);

  useEffect(()=>{
      const fetchExerciseData=async ()=>{
        let exercisesData=[];

        if(bodyPart === 'all'){
          exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
        }else{
          exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
        }

        setExercises(exercisesData)
      }

      fetchExerciseData()
  },[bodyPart])

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= prod.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const handleNext=()=>{
      if(page <prod.length / 10 ){
        setPage(page+1)
      }
  }


  const handlePrev=()=>{
    if(page > 1){
      setPage(page-1);
    }
  }

  return (
    <section className='exercises'> 
    <div className="title">
        <h2>Showing Results</h2>
    </div>
        <div className='exercise__container'>
            {prod.slice(page * 9 - 9,page * 9).map((item,id)=>(

            <ExerciseCard key={id} data={item}/>
            ))}
        </div>
        {exercises.length>0 && (<div className='pagination'>
          <span onClick={handlePrev}>{<BsFillArrowLeftCircleFill/>}</span>
          {
            [...Array(prod.length/10)].map((_,i)=>(
              <span
              key={i}
            className={page === i + 1 ? "page_selected" : ""}
            onClick={() => selectPageHandler(i + 1)}
              >{i+1}</span>
            ))
          }
          <span onClick={handleNext} style={{marginLeft:'10px'}}>{<BsFillArrowRightCircleFill/>}</span>
        </div>)}
    </section>
  )
}

export default Exercises