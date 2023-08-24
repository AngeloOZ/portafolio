import React from 'react'
import { motion } from 'framer-motion';
import { Button, Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react';
import { Skill } from '@/interfaces';


interface Props {
    skill: Skill;
    onClose: () => void;
}

export const SkillModal = ({ skill, onClose }: Props) => {
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
                <Card className="max-w-[450px] min-w-[350px]">
                    <CardHeader className="px-5 justify-between">
                        <div className="flex gap-3">
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
                    <CardBody className="px-7 text-small text-default-500">
                        <ul className="max-w-md space-y-1 list-disc list-inside">
                            {
                                skill.listContent?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    )
}
