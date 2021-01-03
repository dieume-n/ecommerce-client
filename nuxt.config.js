export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'ecommerce-client',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        '@nuxtjs/bulma',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],

    auth: {
        strategies: {
            'laravelJWT': {
                provider: 'laravel/jwt',
                url: "http://ecommerce.test/api/",
                endpoints: {
                    login: {
                        url: "auth/signin",
                        method: 'post',
                    },
                    register: {
                        url: "auth/signup",
                        method: 'post',
                    },
                    user: {
                        url: "auth/me",
                        method: 'get',
                    },
                },
                user: {
                    property: 'data'
                },
                token: {
                    property: 'token',
                    maxAge: 60 * 60
                },
                refreshToken: {
                    maxAge: 20160 * 60
                },
            },
        }
    },
    axios: {
        baseURL: 'http://ecommerce.test/api',
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
    }
}
