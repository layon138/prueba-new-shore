const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/navbar/runtime-es2017.js',
        './dist/navbar/runtime-es5.js',
        './dist/navbar/polyfills-es5.js',
        './dist/navbar/polyfills-es2017.js',
        './dist/navbar/main-es5.js',
        './dist/navbar/main-es2017.js'
      ];
    
      await fs.ensureDir('dist/navbar/widget');
      await concat(files, 'dist/navbar/widget/navbar-widget.js');

      await fs.copyFile('./dist/navbar/styles.css', 'dist/navbar/widget/styles.css')
      await fs.copyFile('./dist/navbar/primeicons.ttf', 'dist/navbar/widget/primeicons.ttf')
      await fs.copyFile('./dist/navbar/primeicons.woff', 'dist/navbar/widget/primeicons.woff')
}
build();