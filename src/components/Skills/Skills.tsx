import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";


import css from './styles/Skills.module.scss';
import { useContentContex } from '@/context/Content';
import { Card, CardHeader, Image } from '@nextui-org/react';

export const Skills = () => {
    const { skills } = useContentContex();

    return (
        <main className={css.skills}>
            <h2 className='text-center text-4xl font-semibold mb-8'>{skills.title}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl m-auto'>
                {
                    skills.skills.map((skill, index) => (
                        <Card key={skill.name + index} isPressable onPress={() => { }}>
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
                    ))
                }
            </div>
        </main>
    )
}
