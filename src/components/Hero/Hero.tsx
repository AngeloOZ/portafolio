import css from './styles/Hero.module.scss'

import { HeroText, NavbarUI, HeroAvatar, HeroParticles } from '.';

export const Hero = () => {
  return (
    <header className={css.hero}>
      <HeroParticles className={css.hero__particles} />
      <div className={css.hero__contenedor}>
        <HeroText className={css.hero__text} />
        <HeroAvatar
          className={css.hero__avatar__contenedor}
          classNameWapperImage={css.hero__avatar}
          classNameImage={css.hero__avatar__img}
        />
      </div>
    </header>
  )
}
