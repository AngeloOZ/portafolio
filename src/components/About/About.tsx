import { useContentContex } from "@/context"
import { Title } from ".."

interface Props {
    id: string
}

export const About = ({ id }: Props) => {
    const { about } = useContentContex()
    return (
        <section id={id}>
            <Title text={about.title} />
        </section>
    )
}
