import React from 'react'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
    mb?: string;
}

export const Title = ({ text, mb = "mb-10", ...props }: Props) => {
    return (
        <h2 className={`text-center text-4xl font-semibold dark:text-white ${mb}`} {...props}>{text}</h2>
    )
}
