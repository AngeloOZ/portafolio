import { useState } from 'react';
import NextImage from "next/image";
import { motion } from "framer-motion";
import { Chip, Image } from '@nextui-org/react';

import { Project } from '@/interfaces';

type Props = {
    project: Project
}

export const ProjectCard = ({ project }: Props) => {
    // const [hover, setHover] = useState(false);
    // console.log(hover);

    return (
        <motion.div
            className="relative overflow-hidden rounded-lg max-w-sm shadow-lg text-black dark:text-white dark:bg-[#181818]"
        // animate={{ height: hover ? '100%' : 250 }}
        // onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
        >
            <Image
                as={NextImage}
                src={project.image}
                alt={project.name}
                width={600}
                height={340}
                className="object-cover rounded-t-lg"
                radius='none'
            />
            <div
                className="absolute top-0 w-full h-[40px] bg-black bg-opacity-60 z-10 flex justify-center items-center">
                <span className='text-white text-lg font-medium'>{project.name}</span>
            </div>

            <motion.div
                className="p-5"
            >
                <p className="mb-3 font-normal">{project.description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        project.technology.map((tecnology, index) => (
                            <Chip
                                key={tecnology + index}
                                color="primary"
                                radius='sm'
                            >{tecnology}</Chip>
                        ))
                    }
                </div>
            </motion.div>
        </motion.div>
    )
}
