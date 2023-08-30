import Link from "next/link"
import { Button, Image } from "@nextui-org/react"

import { useContentContex } from "@/context"
import { Title } from ".."

interface Props {
    id: string
}

export const About = ({ id }: Props) => {
    const { about } = useContentContex()
    return (
        <section id={id} className="pb-12 sm:pb-20 dark:bg-background text-foreground">
            <Title text={about.title} mb="mb-8 sm:mb-20" />
            <div className="grid place-content-center">
                <div className="max-w-[900px] w-full grid grid-cols-1 md:grid-cols-2 sm:gap-x-10 gap-y-10 sm:gap-y-0 justify-items-center">
                    <div className="max-w-[340px] overflow-hidden rounded-tr-3xl rounded-bl-3xl border-3 shadow-xl border-gray-500">
                        <Image src={about.photo} alt="Angello's photo" className="w-full h-full object-cover backdrop-grayscale" />
                    </div>
                    <div className="px-10 sm:px-0 ">
                        <p className="font-bold text-2xl">{about.content.name}</p>
                        <p className="font-bold text-md">{about.content.job}</p>
                        <p className="mt-4 text-md" dangerouslySetInnerHTML={{ __html: about.content.description }} />

                        <div className="grid mt-8 gap-y-3">
                            <Link href={about.contacts.email.url} passHref legacyBehavior>
                                <p className="cursor-pointer first-letter:uppercase">
                                    <strong className="text-primary">{about.contacts.email.name}:</strong> {about.contacts.email.value}
                                </p>
                            </Link>
                            <Link href={about.contacts.phone.url} passHref legacyBehavior>
                                <p className="cursor-pointer first-letter:uppercase">
                                    <strong className="text-primary">{about.contacts.phone.name}:</strong> {about.contacts.phone.value}
                                </p>
                            </Link>
                            <p className="cursor-pointer first-letter:uppercase">
                                <strong className="text-primary">{about.contacts.place.name}:</strong> {about.contacts.place.value}
                            </p>

                            <Button className="w-2/6 mt-2" variant="solid" color="primary">Descargar CV</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
