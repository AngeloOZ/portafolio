
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
    return (
        <section className='min-h-screen dark:bg-background'>
            <h2 className='text-center text-4xl font-semibold mb-8'>Mis proyectos</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-xl m-auto'>
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}
