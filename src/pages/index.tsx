import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from "next";
import Head from "next/head";

import { useUIContext, useContentContex } from '@/context';
import { Hero, Experience, NavbarUI, Skills, Projects, About, Footer } from "@/components";
import { LandingInfo } from "@/interfaces";


interface HomeProps {
	readonly info: LandingInfo;
}

export default function Home() {
	const { locale } = useRouter();
	const { isDarkMode } = useUIContext();
	const { navbar } = useContentContex();

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.hidden) {
				const text = locale == 'es' ? 'Regresa por favor 😭👏' : 'Please come back 😭👏';
				document.title = text;
			} else {
				const text = locale == 'es' ? 'Portafolio de Angello' : 'Angello\'s Portfolio';
				document.title = text;
			}
		};
		document.addEventListener('visibilitychange', handleVisibilityChange);
		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	}, [locale]);

	return (
		<main className={`${isDarkMode ? 'dark' : ''} dark:text-foreground`}>
			<Head>
				<title>{locale == 'es' ? 'Portafolio de Angello' : 'Angello\'s Portfolio'}</title>
			</Head>
			<NavbarUI />
			<Hero id={navbar[0].url.slice(1)} />
			<Experience id={navbar[1].url.slice(1)} />
			<Skills id={navbar[2].url.slice(1)} />
			<Projects id={navbar[3].url.slice(1)} />
			<About id={navbar[4].url.slice(1)} />
			<Footer />
		</main>
	)
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const url = `https://raw.githubusercontent.com/AngeloOZ/json/main/portfolio/${locale}/common.json`;

	const request = await fetch(url);

	if (!request.ok) {
		console.error('Error al obtener la data');
		return {
			notFound: true,
		};
	}

	const data = await request.json();


	return {
		props: {
			data,
		},
		revalidate: 60 * 60,
	};
}

