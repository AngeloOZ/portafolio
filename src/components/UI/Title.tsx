import React from 'react'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string
}

export const Title = ({ text, ...props }: Props) => {
    return (
        <h2 className='text-center text-4xl font-semibold mb-8 dark:text-white' {...props}>{text}</h2>
    )
}
