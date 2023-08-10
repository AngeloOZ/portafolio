import { TypeAnimation } from "react-type-animation"
import { Button, Link } from "@nextui-org/react";

import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';

import css from './styles/Hero.module.css'
import { useContentContex } from "@/context/Content";

interface Props extends React.HTMLAttributes<HTMLDivElement> {

}

const ICONOS = {
    facebook: <BiLogoFacebook size={20} />,
    linkedin: <BiLogoLinkedin size={20} />
}

export const HeroText = ({ ...props }: Props) => {
    const { hero } = useContentContex();

    return (
        <div>
            <h1 className={css.hero__text__title}>
                {hero.greeting} <br />
                {hero.name}
                {/* I'm <span className="text-blue-500">Angello Ordonez</span> */}
            </h1>
            <TypeAnimation
                preRenderFirstString={true}
                sequence={hero.profession}
                speed={40}
                className={css.hero__text__typing}
                repeat={Infinity}
            />
            <br />
            <Button color="primary" className="inline-block">
                About me
            </Button>
            <div className="flex" style={{ gap: '10px' }}>
                {
                    hero.socialMedia.map((item, index) => (
                        <Button
                            key={item.name + index}
                            as={Link}
                            isExternal
                            aria-label={item.name}
                            href={item.url}
                            isIconOnly
                            color="primary"
                        >
                            {ICONOS[item.icon as keyof typeof ICONOS]}
                        </Button>
                    ))
                }
            </div>
            {/* <HeartIcon /> */}
        </div>
    )
}
