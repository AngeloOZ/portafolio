import React from 'react'
import { HeroParticles } from './HeroParticles';

import css from './styles/Hero.module.css'

export const Hero = () => {
  return (
    <header className='h-screen relative'>
      <div className='absolute z-0'>
        <HeroParticles />
      </div>
      <h1 className='absolute z-10'>Holaaa</h1>
    </header>
  )
}
