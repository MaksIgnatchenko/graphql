const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/vendor.js', 'public/js/vendor.js')
    .js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/vendor.scss', 'public/css/vendor.css')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .styles('resources/sass/admiry.css', 'public/css/admiry.css')
    .styles('resources/sass/icons.css', 'public/css/icons.css')
    .copyDirectory('resources/fonts', 'public/fonts');

// mix.js([
//     'resources/js/app.js',
//     'resources/js/custom.js'
// ], 'public/js')
//     .sass([
//         'resources/sass/app.scss',
//         'resources/sass/custom.scss'
//     ], 'public/css');
