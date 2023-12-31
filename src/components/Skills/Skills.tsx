import { useState } from 'react';
import { motion } from "framer-motion";

import { Skill } from '@/interfaces';

import css from './styles/Skills.module.scss';
import { useContentContex } from '@/context/Content';
import { SkillCard, SkillModal } from '.';
import { Title } from '..';

interface Props {
    id: string;
}

export const Skills = ({ id }: Props) => {
    const { skills } = useContentContex();
    const [selectedCard, setSelectedCard] = useState<Skill>();

    const setCard = (skill: Skill) => {
        setSelectedCard(skill);
    }

    return (
        <motion.main
            layout
            className={`${css.skills} bg-background`}
            id={id}
        >
            <Title text={skills.title} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl m-auto p-3 2xl:p-0'>
                {
                    skills.skills.map((skill, index) => (
                        <SkillCard key={skill.icon} skill={skill} setSelectedCard={setCard} />
                    ))
                }
            </div>

            {
                selectedCard && <SkillModal
                    skill={selectedCard}
                    onClose={() => setSelectedCard(undefined)}
                />
            }
        </motion.main>
    )
}

