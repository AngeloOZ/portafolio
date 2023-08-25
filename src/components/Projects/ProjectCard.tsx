import { Image } from '@nextui-org/react'
import { motion, AnimatePresence } from "framer-motion"

export const ProjectCard = () => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-lg max-w-sm shadow-lg text-black dark:text-white dark:bg-[#181818]"
            initial={{ height: 250 }}
            whileHover={{ height: 'auto' }}
        >
            <Image
                src="https://nextui.org/images/hero-card-complete.jpeg"
                alt="foo"
                width="100%"
                className="object-cover rounded-t-lg"
                radius='none'
            />
            <div
                className="absolute top-0 w-full h-[45px] bg-black bg-opacity-70 z-10 flex justify-center items-center">
                <span className='text-white text-lg font-medium'>Projecto Habla+</span>
            </div>

            <motion.div
                className="p-5"
            >
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </motion.div>
        </motion.div>
    )
}
