const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'], // Modifica esta lista según los idiomas que vayas a usar
  },
  localePath: path.resolve('./public/locales')
}
