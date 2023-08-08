import { TypeAnimation } from "react-type-animation"

import css from './styles/Hero.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {

}

export const HeroText = ({ ...props }: Props) => {

    
    return (
        <div>
            <h1 className={css.hero__text__title}>
                Hello <br />
                I'm <span className="text-blue-500">Angello Ordonez</span>
            </h1>
            <TypeAnimation
                preRenderFirstString={true}

                sequence={[
                    500,
                    'I am Frontend Developer', // initially rendered starting point
                    1000,
                    'I am Backend Developer',
                    500,
                ]}
                speed={40}
                className={css.hero__text__typing}
                repeat={Infinity}
            />
        </div>
    )
}
