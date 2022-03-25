module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/wisp/" : "/",
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: ``,
      }
    }
  }
};
