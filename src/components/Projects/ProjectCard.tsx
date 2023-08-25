import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

export const ProjectCard = () => {
    return (
        <Card shadow="sm">
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt="foo"
                    className="w-full object-cover h-[180px]"
                    src='https://nextui.org/images/hero-card-complete.jpeg'
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardFooter>
        </Card>
    )
}
