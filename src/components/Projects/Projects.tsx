
import { useContentContex } from '@/context/Content'

import { Title } from '..'
import { ProjectCard } from '.'

interface Props {
    id: string;
}

export const Projects = ({ id }: Props) => {
    const { projects } = useContentContex();
    return (
        <section className='min-h-screen dark:bg-background' id={id}>
            <Title text={projects.title} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-xl m-auto'>
                {
                    projects.projects.map((project, index) => (
                        <ProjectCard key={index + project.name} project={project} />
                    ))
                }
            </div>
        </section>
    )
}
