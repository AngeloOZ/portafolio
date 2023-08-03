import React from 'react'
import { HeroParticles } from './HeroParticles';

import css from './styles/Hero.module.css'
import { HeroText } from '.';

export const Hero = () => {
  return (
    <header className='h-screen relative'>
      <div className='absolute z-0'>
        {/* <HeroParticles /> */}
      </div>
      <HeroText />  
    </header>
  )
}
