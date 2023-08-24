import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, Image } from '@nextui-org/react';
import { Skill } from '@/interfaces';

interface Props {
    skill: Skill;
    setSelectedCard: (skill: Skill) => void;
}
export const SkillCard = ({ skill, setSelectedCard }: Props) => {
    return (
        <motion.div
            layoutId={`card-${skill.name}`}
            whileHover={{
                scale: 1.055,
                transition: {
                    duration: 0.2,
                },
            }}
            whileTap={{
                scale: 0.95,
            }}
        >
            <Card isPressable className='w-full' onClick={() => setSelectedCard(skill)}>
                <CardHeader className='flex justify-around'>
                    <p className='font-bold text-base'>{skill.name}</p>

                    <Image
                        alt={`logo ${skill.name}`}
                        height={40}
                        width={40}
                        radius="sm"
                        src={skill.icon}
                    />
                </CardHeader>
            </Card>
        </motion.div>
    )
}
