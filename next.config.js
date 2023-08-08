/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["es", "en"], // Lista de idiomas disponibles
    defaultLocale: "es",   // Locale por defecto
  },
}

module.exports = nextConfig
