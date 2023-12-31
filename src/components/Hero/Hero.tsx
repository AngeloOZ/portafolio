import css from './styles/Hero.module.scss'
import { HeroText, HeroAvatar, HeroParticles } from '.';
import { useContentContex } from '@/context';

interface Props {
  id: string;
}

export const Hero = ({ id }: Props) => {
  const { hero: { avatar } } = useContentContex();
  return (
    <header className={`${css.hero}`} id={id}>
      <HeroParticles className={css.hero__particles} />
      <div className={css.hero__contenedor}>
        <HeroText className={`${css.hero__text} dark:text-white`} />
        <HeroAvatar
          src={avatar}
          className={css.hero__avatar__contenedor}
          classNameWapperImage={css.hero__avatar}
          classNameImage={css.hero__avatar__img}
        />
      </div>
    </header>
  )
}
