import { useState } from 'react';
import { motion } from "framer-motion";

import { Skill } from '@/interfaces';

import css from './styles/Skills.module.scss';
import { useContentContex } from '@/context/Content';
import { SkillCard, SkillModal } from '.';

export const Skills = () => {
    const { skills, navbar } = useContentContex();
    const [selectedCard, setSelectedCard] = useState<Skill>();

    const setCard = (skill: Skill) => {
        setSelectedCard(skill);
    }

    return (
        <motion.main
            layout
            className={css.skills}
            id='habilidades'
        >
            <h2 className='text-center text-4xl font-semibold mb-8'>{skills.title}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl m-auto'>
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

