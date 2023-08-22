import { GetStaticProps } from "next";
import Link from "next/link";

import { promises as fs } from "fs";
import path from "path";

import { Hero, Experience, NavbarUI, Skills } from "@/components";
import { LandingInfo } from "@/interfaces";


interface HomeProps {
  readonly info: LandingInfo;
}

export default function Home({ info }: HomeProps) {

  return (
    <main>
      <NavbarUI />
      <Hero />
      <Experience />
      <Skills />
      {/* <Experience /> */}
      {/* <Link href="/" locale="en">
        English
      </Link> */}
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

