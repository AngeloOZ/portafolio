import { useEffect } from 'react';
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { promises as fs } from "fs";
import path from "path";

import { useUIContext } from '@/context';
import { Hero, Experience, NavbarUI, Skills, Projects } from "@/components";
import { LandingInfo } from "@/interfaces";


interface HomeProps {
	readonly info: LandingInfo;
}

export default function Home() {
	const { isDarkMode } = useUIContext();

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.hidden) {
				document.title = 'Regresa por favor 😭👏';
			} else {
				document.title = 'Angello';
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
				<title>Angello</title>
			</Head>
			<NavbarUI />
			<Hero />
			<Experience />
			<Skills />
			<Projects />
		</main>
	)
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const json = path.join(process.cwd(), `public/locales/es/common.json`)
	// const json = path.join(process.cwd(), `public/locales/${locale}/common.json`)
	const data = await fs.readFile(json, { encoding: 'utf8' });
	const info = JSON.parse(data);

	return {
		props: {
			data: info,
		},
		revalidate: 10,
	};
}

