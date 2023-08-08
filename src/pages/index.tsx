import { Hero } from "@/components";

import data from '../../public/locales/en/common.json';


interface HomeProps {
  readonly info: typeof data;
}

export default function Home({ info }: HomeProps) {

  return (
    <main>
      <Hero />
    </main>
  )
}


export async function getStaticProps() {

  return {
    props: {
      info: data,
    },
    revalidate: 10,
  };
}
