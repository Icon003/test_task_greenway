export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Тестовое задание для GREENWAY",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ hid: 'description', name: 'description', content: `Тестовое задание для GREENWAY` },
			{ hid: 'author', name: 'author', content: `Иван Бурбас` },
			{ hid: 'copyright', name: 'copyright', content: `Иван Бурбас` },
			{ hid: "og:title", name: "og:title", content: `Тестовое задание для GREENWAY от Бурбаса Ивана` },
			{ hid: "og:type", name: "og:type", content: "profile" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/css/fonts.css',
		'@/assets/css/variables.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: false,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios"
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		proxy: true,
	},
	proxy: {
		'/api/': { target: 'https://jsonplaceholder.typicode.com', pathRewrite: {'^/api/': ''} }
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	server: {
		port: 7000,
		host: '0.0.0.0',
	}
};
