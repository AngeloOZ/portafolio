import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";


import css from './styles/Skills.module.scss';
import { useContentContex } from '@/context/Content';
import { Button, Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react';
import { Skill } from '@/interfaces';

export const Skills = () => {
    const { skills } = useContentContex();
    const [selectedCard, setSelectedCard] = useState<Skill>();

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
                        <motion.div
                            key={`card-${skill.name}`}
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
                    ))
                }
            </div>

            {
                selectedCard && <Modal
                    skill={selectedCard}
                    onClose={() => setSelectedCard(undefined)}
                />
            }
        </motion.main>
    )
}

interface ModalProps {
    skill: Skill;
    onClose: () => void;
}

const Modal = ({ skill, onClose }: ModalProps) => {
    return (
        <div
            className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-10'
            onClick={onClose}
        >
            <motion.div
                className='rounded-xl shadow-large'
                onClick={e => e.stopPropagation()}
                layoutId={`card-${skill.name}`}
            >
                <Card className="max-w-[440px]">
                    <CardHeader className="justify-between">
                        <div className="flex gap-5">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src={skill.icon}
                                width={40}
                            />
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="text-small font-semibold leading-none text-default-600">{skill.name}</h4>
                            </div>
                        </div>
                        <Button isIconOnly variant="faded" aria-label="close" onClick={onClose}>
                            X
                        </Button>
                    </CardHeader>
                    <Divider />
                    <CardBody className="p-3 text-small text-default-400">
                        <p>
                            Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                        </p>
                        <span className="pt-2">
                            #FrontendWithZoey
                            <span className="py-2" aria-label="computer" role="img">
                                💻
                            </span>
                        </span>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    )
};
