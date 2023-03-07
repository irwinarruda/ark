import { globalCss } from '@/theme/global-css'
import { recipes } from '@/theme/recipes'
import { textStyles } from '@/theme/text-styles'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.tsx'],
  presets: ['@pandacss/dev/presets'],
  outdir: 'panda',
  jsxFramework: 'react',
  globalCss,
  theme: {
    extend: {
      recipes,
      textStyles,
      semanticTokens: {
        colors: {
          fg: {
            default: { value: { base: '{colors.gray.800}', _dark: 'white' } },
            emphasized: { value: { base: '{colors.gray.700}', _dark: '{colors.gray.200}' } },
            muted: { value: { base: '{colors.gray.600}', _dark: '{colors.gray.300}' } },
            placeholder: { value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' } },
            subtle: { value: { base: '{colors.gray.500}', _dark: '{colors.gray.500}' } },
            inverted: {
              default: { value: { base: 'white', _dark: '{colors.black}' } },
            },
          },
          bg: {
            canvas: { value: { base: '{colors.gray.50}', _dark: '{colors.brown.900}' } },
            surface: { value: { base: '{colors.gray.100}', _dark: '{colors.brown.600}' } },
            muted: { value: { base: '{colors.gray.300}', _dark: '{colors.gray.600}' } },
            subtle: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.900}' } },
          },
          accent: {
            default: { value: { base: '{colors.orange.400}', _dark: '{colors.orange.400}' } },
            emphasized: { value: { base: '{colors.purple.500}', _dark: '{colors.orange.500}' } },
            muted: { value: { base: '{colors.purple.400}', _dark: '{colors.purple.600}' } },
            subtle: { value: { base: '{colors.purple.50}', _dark: '{colors.purple.900}' } },
          },
          border: {
            default: { value: { base: '{colors.gray.200}', _dark: '{colors.brown.400}' } },
            emphasized: { value: { base: '{colors.gray.300}', _dark: '{colors.gray.800}' } },
          },
        },
        shadows: {
          xs: {
            value: {
              base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 1px 2px rgba(48, 49, 51, 0.1)',
              _dark: '0px 0px 1px #0D0D0D, 0px 1px 2px rgba(13, 13, 13, 0.9)',
            },
          },
          sm: {
            value: {
              base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 2px 4px rgba(48, 49, 51, 0.1)',
              _dark: '0px 0px 1px #0D0D0D, 0px 2px 4px rgba(13, 13, 13, 0.9)',
            },
          },
          md: {
            value: {
              base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
              _dark: '0px 0px 1px #0D0D0D, 0px 4px 8px rgba(13, 13, 13, 0.9)',
            },
          },
          lg: {
            value: {
              base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)',
              _dark: '0px 0px 1px #0D0D0D, 0px 8px 16px rgba(13, 13, 13, 0.9)',
            },
          },
          xl: {
            value: {
              base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 16px 24px rgba(48, 49, 51, 0.1)',
              _dark: '0px 0px 1px #0D0D0D, 0px 16px 24px rgba(13, 13, 13, 0.9)',
            },
          },
        },
      },
      tokens: {
        lineHeights: {
          relaxed: { value: '1.75' },
        },
        colors: {
          black: { value: '#171717' },
          gray: {
            50: { value: '#FAFAFA' },
            100: { value: '#F5F5F5' },
            200: { value: '#E5E5E5' },
            300: { value: '#D4D4D4' },
            400: { value: '#A3A3A3' },
            500: { value: '#737373' },
            600: { value: '#525252' },
            700: { value: '#404040' },
            800: { value: '#262626' },
            900: { value: '#171717' },
          },
          blue: {
            50: { value: '#ECEEFE' },
            100: { value: '#D8DDFD' },
            200: { value: '#B1BAFB' },
            300: { value: '#8B98F9' },
            400: { value: '#6475F7' },
            500: { value: '#3D53F5' },
            600: { value: '#3142C4' },
            700: { value: '#253293 ' },
            800: { value: '#182162' },
            900: { value: '#0C1131' },
            950: { value: '#060818' },
          },
          purple: {
            50: { value: '#EEECFB' },
            100: { value: '#DDD9F7' },
            200: { value: '#BBB2EF' },
            300: { value: '#9A8CE8' },
            400: { value: '#7865E0 ' },
            500: { value: '#563FD8' },
            600: { value: '#4532AD' },
            700: { value: '#342682' },
            800: { value: '#221956 ' },
            900: { value: '#110D2B' },
            950: { value: '#090616' },
          },
          orange: {
            50: { value: '#F6E1DB' },
            100: { value: '#EEC2B7' },
            200: { value: '#E49582' },
            300: { value: '#DE7960' },
            400: { value: '#EB5E41' },
            500: { value: '#BD4E34' },
            600: { value: '#953D2B' },
            700: { value: '#662314' },
            800: { value: '#451D14' },
            900: { value: '#391915' },
          },
          brown: {
            50: { value: '#78574F' },
            100: { value: '#5B4039' },
            200: { value: '#4E3630' },
            300: { value: '#3D2925' },
            400: { value: '#33221E' },
            500: { value: '#2D1D19' },
            600: { value: '#261916' },
            700: { value: '#201412' },
            800: { value: '#1D1615' },
            900: { value: '#0F0705' },
          },
        },
        spacing: {
          '4.5': { value: '1.125rem' },
        },
        sizes: {
          '15': { value: '3.75rem' },
          '18': { value: '4.5rem' },
        },
      },
    },
  },
  patterns: {
    extend: {
      container: {
        transform(props) {
          // TODO descructuring props.centerContent is not working @panda
          delete props.centerContent

          return Object.assign(
            {
              position: 'relative',
              width: '100%',
              maxWidth: '7xl',
              mx: 'auto',
              paddingX: { base: '4', md: '6' },
            },
            props,
          )
        },
      },
    },
  },
})
