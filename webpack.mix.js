let mix = require("laravel-mix");

mix
  .setPublicPath("./")
  .sass("src/sass/popup.scss", "dist/css")
  .js("src/js/popup.js", "dist/js")
  .vue()
  .copy("src/images/", "dist/images")
  .options({
    processCssUrls: false,
  });
