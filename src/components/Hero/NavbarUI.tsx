import { useRouter } from "next/router";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";

import { BsMoonStarsFill, BsCloudSunFill } from "react-icons/bs";

import { AcmeLogo } from "./AcmeLogo";
import { useContentContex } from "@/context/Content";
import { useUIContext } from "@/context";
import { SelectorLanguage } from ".";

export const NavbarUI = () => {
    const { navbar } = useContentContex();
    const { isDarkMode, toggleDarkMode } = useUIContext();
    const { asPath } = useRouter();

    return (
        <Navbar className="bg-background" maxWidth="2xl">
            <NavbarContent className="md:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>

            <NavbarContent className="hidden md:flex gap-4" justify="center">
                {
                    navbar.map((item, index) => (
                        <NavbarItem
                            key={`${item}-${index}`}
                            isActive={asPath.slice(1) === item.url}
                        >
                            <Link href={item.url} color="foreground">
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden sm:block">
                    <SelectorLanguage />
                </NavbarItem>

                <NavbarItem>
                    <Button isIconOnly color={isDarkMode ? "warning" : "primary"} variant="faded" aria-label="Dark mode" onClick={toggleDarkMode}>
                        {
                            isDarkMode ? <BsCloudSunFill size={18} /> : <BsMoonStarsFill size={18} />
                        }
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {navbar.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === navbar.length - 1 ? "danger" : "foreground"
                            }
                            href={item.url}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

