import { useRouter } from 'next/router';

export const Footer = () => {
  const { locale } = useRouter();
  const date = new Date().getFullYear();
  return (
    <footer className='bg-primary py-3 text-center text-white font-semibold text-medium'>
      {
        locale === 'es' ?
          <p>Diseñado por Angello &copy; {date}</p>
          :
          <p>Designed by Angello &copy; {date}</p>
      }
    </footer>
  )
}
