/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'], // Reemplaza con los idiomas que necesites
    defaultLocale: 'es', // Establece el idioma predeterminado
  },
}

module.exports = nextConfig
