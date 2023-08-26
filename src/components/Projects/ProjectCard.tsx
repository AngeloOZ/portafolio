import { Project } from '@/interfaces'
import { Chip, Image } from '@nextui-org/react'
import { motion } from "framer-motion"

type Props = {
    project: Project
}

export const ProjectCard = ({ project }: Props) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-lg max-w-sm shadow-lg text-black dark:text-white dark:bg-[#181818]"
            initial={{ height: 250 }}
            whileHover={{ height: 'auto' }}
        >
            <Image
                src={project.image}
                alt={project.name}
                width="100%"
                className="object-cover rounded-t-lg"
                radius='none'
            />
            <div
                className="absolute top-0 w-full h-[45px] bg-black bg-opacity-70 z-10 flex justify-center items-center">
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
