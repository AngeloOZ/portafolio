import { TypeAnimation } from "react-type-animation"
import { Button, Link } from "@nextui-org/react";

import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiLogoInstagram, BiLogoGitlab, BiLogoWhatsapp, BiLogoTelegram } from 'react-icons/bi';

import css from './styles/Hero.module.scss'
import { useContentContex } from "@/context/Content";

interface Props extends React.HTMLAttributes<HTMLDivElement> {

}

const ICONOS = {
    facebook: <BiLogoFacebook size={20} />,
    linkedin: <BiLogoLinkedin size={20} />,
    twitter: <BiLogoTwitter size={20} />,
    instagram: <BiLogoInstagram size={20} />,
    github: <BiLogoGithub size={20} />,
    gitlab: <BiLogoGitlab size={20} />,
    whatsapp: <BiLogoWhatsapp size={20} />,
    telegram: <BiLogoTelegram size={20} />,
}

export const HeroText = ({ ...props }: Props) => {
    const { hero } = useContentContex();

    return (
        <div {...props}>
            <h1 className={css.hero__text__title} dangerouslySetInnerHTML={{ __html: hero.greeting }} />
            <TypeAnimation
                preRenderFirstString={true}
                sequence={hero.profession}
                speed={40}
                className={css.hero__text__typing}
                repeat={Infinity}
            />
            <div className={css.hero__text_social}>
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
        </div>
    )
}
