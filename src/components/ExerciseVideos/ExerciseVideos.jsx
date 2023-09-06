import React from 'react'
import './ExerciseVideos.css'


const ExerciseVideos = ({exerciseVideos}) => {
  return (
    <section className='youtube__video'>
        <div className='title'>
            <h2>Related Video</h2>
        </div>
        <div className='video__container'>
            {exerciseVideos?.slice(0,6).map((item,id)=>(
            <a
            style={{textDecoration:'none',color:'black'}}  
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            key={id} className='video__card'>
                <img src={item.video.thumbnails[0].url} alt="" />
                <p>{item.video.title}</p>
            </a>

            ))}
        </div>
    </section>
  )
}

export default ExerciseVideos