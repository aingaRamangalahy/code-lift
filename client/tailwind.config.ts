import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
        container: {
            center: true,
            padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '4rem',
              '2xl': '6rem',
            },
          },
    }
  }
}