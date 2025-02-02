// cSpell:ignore Segoe Roboto Neue Noto nocheck
// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck

import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import tinycolor from 'tinycolor2';

const customColors = {
  'wp-primary': {
    100: '#8AD97F',
    200: '#68C464',
    300: '#4CAF50',
    400: '#369943',
    500: '#248438',
    600: '#166E30',
  },
  'wp-secondary': {
    200: '#434858',
    300: '#383C4A',
    400: '#303440',
    500: '#2D313D',
    600: '#2A2E3A',
    700: '#222631',
    800: '#1B1F28',
  },
};

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/**/*.css'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Internals to keep a single source for color definitions
        'int-wp-primary': {
          100: customColors['wp-primary'][100],
          200: customColors['wp-primary'][200],
          300: customColors['wp-primary'][300],
          400: customColors['wp-primary'][400],
          500: customColors['wp-primary'][500],
          600: customColors['wp-primary'][600],
        },
        'int-wp-secondary': {
          200: customColors['wp-secondary'][200],
          300: customColors['wp-secondary'][300],
          400: customColors['wp-secondary'][400],
          500: customColors['wp-secondary'][500],
          600: customColors['wp-secondary'][600],
          700: customColors['wp-secondary'][700],
          800: customColors['wp-secondary'][800],
        },

        'int-wp-control-neutral': {
          100: colors.white,
          200: colors.gray[300],
          300: colors.gray[400],
        },
        'int-wp-control-info': {
          100: colors.cyan[700],
          200: colors.cyan[800],
          300: colors.cyan[900],
        },
        'int-wp-control-info-dark': {
          100: tinycolor(colors.cyan[700]).desaturate(30).toString(),
          200: tinycolor(colors.cyan[800]).desaturate(30).toString(),
          300: tinycolor(colors.cyan[900]).desaturate(30).toString(),
        },
        'int-wp-control-ok': {
          100: customColors['wp-primary'][400],
          200: customColors['wp-primary'][500],
          300: customColors['wp-primary'][600],
        },
        'int-wp-control-ok-dark': {
          100: tinycolor(customColors['wp-primary'][400]).desaturate(10).toString(),
          200: tinycolor(customColors['wp-primary'][500]).desaturate(10).toString(),
          300: tinycolor(customColors['wp-primary'][600]).desaturate(10).toString(),
        },
        'int-wp-error': {
          100: colors.red[700],
          200: colors.red[800],
          300: colors.red[900],
        },
        'int-wp-state-neutral': {
          100: colors.gray[600],
        },
        'int-wp-state-ok': {
          100: colors.green[600],
        },
        'int-wp-state-ok-dark': {
          100: tinycolor(colors.green[600]).desaturate(20).toString(),
        },
        'int-wp-state-info': {
          100: colors.cyan[600],
        },
        'int-wp-state-info-dark': {
          100: tinycolor(colors.cyan[600]).desaturate(20).toString(),
        },
        'int-wp-state-warn': {
          100: colors.yellow[400],
        },
        'int-wp-state-warn-dark': {
          100: tinycolor(colors.yellow[400]).desaturate(20).toString(),
        },

        'int-wp-hint-warn': {
          100: colors.yellow[100],
          200: colors.yellow[300],
        },
        'int-wp-hint-warn-dark': {
          100: tinycolor(colors.yellow[300]).desaturate(60).toString(),
          200: tinycolor(colors.yellow[500]).desaturate(60).toString(),
        },

        // Theme colors
        'wp-background': {
          100: 'var(--wp-background-100)',
          200: 'var(--wp-background-200)',
          300: 'var(--wp-background-300)',
          400: 'var(--wp-background-400)',
        },

        'wp-text': {
          100: 'var(--wp-text-100)',
          200: 'var(--wp-text-200)',
        },
        'wp-text-alt': {
          100: 'var(--wp-text-alt-100)',
        },

        'wp-primary': {
          100: 'var(--wp-primary-100)',
          200: 'var(--wp-primary-200)',
          300: 'var(--wp-primary-300)',
        },
        'wp-primary-text': {
          100: 'var(--wp-primary-text-100)',
        },

        'wp-control-neutral': {
          100: 'var(--wp-control-neutral-100)',
          200: 'var(--wp-control-neutral-200)',
          300: 'var(--wp-control-neutral-300)',
        },
        'wp-control-info': {
          100: 'var(--wp-control-info-100)',
          200: 'var(--wp-control-info-200)',
          300: 'var(--wp-control-info-300)',
        },
        'wp-control-ok': {
          100: 'var(--wp-control-ok-100)',
          200: 'var(--wp-control-ok-200)',
          300: 'var(--wp-control-ok-300)',
        },
        'wp-error': {
          100: 'var(--wp-error-100)',
          200: 'var(--wp-error-200)',
          300: 'var(--wp-error-300)',
        },

        'wp-state-neutral': {
          100: 'var(--wp-state-neutral-100)',
        },
        'wp-state-ok': {
          100: 'var(--wp-state-ok-100)',
        },
        'wp-state-info': {
          100: 'var(--wp-state-info-100)',
        },
        'wp-state-warn': {
          100: 'var(--wp-state-warn-100)',
        },

        'wp-hint-warn': {
          100: 'var(--wp-hint-warn-100)',
          200: 'var(--wp-hint-warn-200)',
        },

        'wp-code-inline': {
          100: 'var(--wp-code-inline-100)',
          200: 'var(--wp-code-inline-200)',
        },

        'wp-code-inline-text': {
          100: 'var(--wp-code-inline-text-100)',
        },

        'wp-code': {
          100: 'var(--wp-code-100)',
          200: 'var(--wp-code-200)',
          300: 'var(--wp-code-300)',
        },

        'wp-code-text': {
          100: 'var(--wp-code-text-100)',
        },
        'wp-code-text-alt': {
          100: 'var(--wp-code-text-alt-100)',
        },

        'wp-link': {
          100: 'var(--wp-link-100)',
          200: 'var(--wp-link-200)',
        },
      },
      spacing: {
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Noto Sans',
          'Liberation Sans',
          'Arial',
          'sans-serif',
        ],
      },
      transitionProperty: {
        height: 'max-height',
      },

      stroke: (theme: (path: string) => object) => theme('colors'),
      fill: (theme: (path: string) => object) => theme('colors'),
    },
  },
  plugins: [typography],
} satisfies Config;
