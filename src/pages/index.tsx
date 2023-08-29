import { useEffect } from 'react';
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { promises as fs } from "fs";
import path from "path";

import { useUIContext, useContentContex } from '@/context';
import { Hero, Experience, NavbarUI, Skills, Projects } from "@/components";
import { LandingInfo } from "@/interfaces";


interface HomeProps {
	readonly info: LandingInfo;
}

export default function Home() {
	const { isDarkMode } = useUIContext();
	const { navbar } = useContentContex();

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.hidden) {
				document.title = 'Regresa por favor 😭👏';
			} else {
				document.title = 'Portafolio de Angello';
			}
		};
		document.addEventListener('visibilitychange', handleVisibilityChange);
		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	}, []);

	return (
		<main className={`${isDarkMode ? 'dark' : ''} dark:text-foreground`}>
			<Head>
				<title>Portafolio de Angello</title>
			</Head>
			<NavbarUI />
			<Hero id={navbar[0].url.slice(1)} />
			<Experience id={navbar[1].url.slice(1)} />
			<Skills id={navbar[2].url.slice(1)} />
			<Projects id={navbar[3].url.slice(1)} />
		</main>
	)
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
	// const json = path.join(process.cwd(), `public/locales/es/common.json`)
	const json = path.join(process.cwd(), `public/locales/${locale}/common.json`)
	const data = await fs.readFile(json, { encoding: 'utf8' });
	const info = JSON.parse(data);

	return {
		props: {
			data: info,
		},
		revalidate: 10,
	};
}

