module.exports = {
   pages: {
      'index': { // index
        entry: './src/entry/main_page.ts', // main_page.js
        template: './src/pages/main_page.html',
        title: 'Index-html from pages'
      },
      'users_table': {
        entry: './src/entry/users_table.ts', // users_table.js
        template: './src/pages/users_table.html',
        title: 'About-html from pages'
      }
    },
    // module: {
    //   rules: [
    //     // ... другие правила опущены
    //
    //     // это правило будет применяться к обычным файлам `.scss`
    //     // А ТАКЖЕ к секциям `<style lang="scss">` в файлах `.vue`
    //     {
    //       test: /\.scss$/,
    //       use: [
    //         'vue-style-loader',
    //         'css-loader',
    //         'sass-loader'
    //       ]
    //     }
    //   ]
    // },
  }
