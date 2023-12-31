import { useCallback } from "react";

import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useUIContext } from "@/context";
interface Props {
    className?: string;
}

export const HeroParticles = ({ className }: Props) => {
    const { isDarkMode } = useUIContext();
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => { }, []);

    return (
        <Particles
            className={className}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                backgroundMode: {
                    enable: true,
                    zIndex: -1,
                },
                fullScreen: { enable: false },
                background: {
                    color: {
                        value: isDarkMode ? "#000" : "#f7f7f7",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4, //4
                        },
                        repulse: {
                            distance: 180,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: isDarkMode ? "#FFFFFF" : "#000000",
                    },
                    links: {
                        color: isDarkMode ? "#FFFFFF" : "#000000",
                        distance: 160, //200
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3, // 6
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};