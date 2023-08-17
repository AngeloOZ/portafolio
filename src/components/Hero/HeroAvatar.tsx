import Image from 'next/image'
interface HeroAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    classNameImage?: string;
    classNameWapperImage?: string;
}

export const HeroAvatar = ({ src, alt, classNameWapperImage, classNameImage, ...props }: HeroAvatarProps) => {
    const srcImage = src ?? '/images/avatar.jpg';
    const altImage = alt ?? 'Avatar';

    return (
        <div {...props}>
            <div className={classNameWapperImage}>
                <Image
                    src={srcImage}
                    alt={altImage}
                    className={classNameImage}
                    height={100}
                    width={100}
                />
            </div>
        </div>
    )
}
