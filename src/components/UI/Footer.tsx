import React from 'react'

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='bg-primary py-3 text-center text-white font-semibold text-medium'>
      <p>Diseñado por Angello &copy; {date}</p>
    </footer>
  )
}
