import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, User, Skeleton } from "@nextui-org/react";

import { BsMoonStarsFill, BsCloudSunFill } from "react-icons/bs";

import { AcmeLogo } from "./AcmeLogo";
import { useContentContex } from "@/context/Content";
import { useUIContext } from "@/context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Language } from "@/interfaces";
import { log } from "console";

export const NavbarUI = () => {
    const { navbar } = useContentContex();
    const { isDarkMode, toggleDarkMode } = useUIContext();

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
                        <NavbarItem key={`${item}-${index}`}>
                            <Link color="foreground" href={item.url}>
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden sm:block">
                    <Language />
                </NavbarItem>

                <NavbarItem>
                    <Button isIconOnly color={isDarkMode ? "warning" : "primary"} variant="faded" aria-label="Dark mode" onClick={toggleDarkMode}>
                        {
                            isDarkMode ? <BsCloudSunFill size={18} /> : <BsMoonStarsFill size={18} />
                        }
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent> */}

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

const Language = () => {
    const { languages } = useContentContex();
    const languagesArray = Object.values(languages) as Language[];

    const router = useRouter();
    const [currentLang, setCurrentLang] = useState<Language>();

    useEffect(() => {
        if (router.locale === "en") {
            setCurrentLang(languages.en);
        } else if (router.locale === "es") {
            setCurrentLang(languages.es);
        }
    }, [router.locale]);

    const handleLanguageChange = (lang: Language) => {
        router.push(router.asPath, router.asPath, { locale: lang.code });
    };


    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
                <DropdownTrigger>
                    <div className="flex items-center cursor-pointer w-[130px]">
                        {
                            currentLang ?
                                <>
                                    <Avatar src={currentLang.image} size="sm" />
                                    <span className="font-medium text-sm ml-2 dark:text-white">{currentLang.name}</span>

                                </>
                                :
                                <>
                                    <div className="flex items-center w-full gap-1">
                                        <div>
                                            <Skeleton className="flex rounded-full w-8 h-8" />
                                        </div>
                                        <div className="w-full flex flex-col gap-2">
                                            <Skeleton className="h-3 w-4/5 rounded-lg" />
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="languages" variant="flat">
                    {
                        languagesArray.map((lang, index) => (
                            <DropdownItem key={lang.name} onClick={() => handleLanguageChange(lang)}>
                                <div className="flex items-center">
                                    <Avatar src={lang.image} size="sm" />
                                    <span className="font-medium text-sm ml-2 dark:text-white">{lang.name}</span>
                                </div>
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
