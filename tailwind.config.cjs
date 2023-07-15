module.exports = {
    content: ['./src/**/*.{html,js,astro,jsx,tsx,vue,svelte}'],
    theme: {
        extend: {
            gradientColorStopPositions: {
                finalDegradado: 'linear-gradient (171deg, rgba(49,15,66,1) 0%, rgba(72,30,78,1) 13%, rgba(48,37,80,1) 34%, rgba(0,0,0,1) 84%)'
            }
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