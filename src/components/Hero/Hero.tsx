

import css from './styles/Hero.module.css'

import { HeroText, Navbar, HeroAvatar, HeroParticles } from '.';

import { Hero as Herotype } from '@/interfaces';

interface HeroProps {
  readonly heroData: Herotype;
}
export const Hero = ({ heroData }: HeroProps) => {
  return (
    <header className={css.hero}>
      <Navbar />
      <HeroParticles className={css.hero__particles} />
      <HeroText className={css.hero__text} />
      <HeroAvatar className={css.hero__avatar} classNameImage={css.hero__avatar__img} />
    </header>
  )
}
