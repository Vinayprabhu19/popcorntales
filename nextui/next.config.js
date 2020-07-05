/**module.exports = {
  
}**/
const withCSS = require('@zeit/next-css')
//module.exports = withCSS()
module.exports = {
	distDir: "nextjs",
	css:withCSS(),
	env: {
		FIREBASE_PROJECT_ID: "TODO_YOUR_PROJECT_ID_HERE",
	},
	experimental: {
		sprFlushToDisk: false,
	},
};