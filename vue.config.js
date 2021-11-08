module.exports = {
   pages: {
      'index': { // index page
        entry: './src/entry/main_page.ts',
        template: './src/pages/main_page.html',
        title: 'Index-html from pages'
      },
      'users_table': {
        entry: './src/entry/users_table.ts',
        template: './src/pages/users_table.html',
        title: 'About-html from pages'
      }
    }
  }
