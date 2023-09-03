import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero__content'>
        <div className='left'>
            <h2>BUILD YOUR BODY STRONG </h2>
            <h1>Sweat, Smile And Repeat</h1>
            <p>Check out the most effective exercises personalized to you</p>
            <button >Explore Now</button>
        </div>
         <div className='right'></div>   
        </div>
    </section>
  )
}

export default Hero