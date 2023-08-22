/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["es", "en"], // Lista de idiomas disponibles
    defaultLocale: "es",   // Locale por defecto
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  }
}

module.exports = nextConfig
