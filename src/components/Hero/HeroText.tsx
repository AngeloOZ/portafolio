import { TypeAnimation } from "react-type-animation"

export const HeroText = () => {
    return (
        <div>
            <h1>
                Hola <br />
                Soy Angello Ordoñez
            </h1>
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    500,
                    'Soy un desarrollador frontend', // initially rendered starting point
                    1000,
                    'Soy un desarrollador backend',
                    500,
                ]}
                speed={40}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
            />
        </div>
    )
}
