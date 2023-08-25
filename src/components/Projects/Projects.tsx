
import { Title } from '..'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
    return (
        <section className='min-h-screen dark:bg-background'>
            <Title text='Mis proyectos' />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-xl m-auto'>
                <ProjectCard key={1} />
                <ProjectCard key={2} />

            </div>
        </section>
    )
}
