import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, User, Skeleton } from "@nextui-org/react";

import { useContentContex } from "@/context";
import { Language } from "@/interfaces";

export const SelectorLanguage = () => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
