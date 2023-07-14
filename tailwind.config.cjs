module.exports = {
    content: ['./src/**/*.{html,js,astro,jsx,tsx,vue,svelte}'],
    theme: {
        extend: {

        },
        fontFamily: {
            'sg': ['Space Grotesk', 'sans-serif']
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms'),
    ]
}