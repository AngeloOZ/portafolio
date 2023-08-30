import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader } from '@nextui-org/react';
import { Skill } from '@/interfaces';
import { useContentContex } from '@/context/Content';
import Image from 'next/image';

interface Props {
    skill: Skill;
    setSelectedCard: (skill: Skill) => void;
}

export const SkillCard = ({ skill, setSelectedCard }: Props) => {
    const { skills } = useContentContex();

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
                {
                    skill.soon && <span className="absolute -right-7 top-4 rotate-45 text-xs font-medium mr-2 px-5 py-0.5 rounded bg-primary">{ skills.soonText }</span>
                }
                <CardHeader className='flex justify-around'>
                    <p className='font-bold text-base'>{skill.name}</p>
                    <Image
                        alt={`logo ${skill.name}`}
                        height={40}
                        width={40}
                        src={skill.icon}
                    />
                </CardHeader>
            </Card>
        </motion.div>
    )
}
