/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "surface-bright": "#f7faf8",
        "primary-fixed": "#c1ecd4",
        "on-secondary-container": "#00734d",
        "tertiary-container": "#00452e",
        "on-tertiary-fixed": "#002114",
        "on-surface-variant": "#414844",
        "primary": "#012d1d",
        "secondary-container": "#92f7c3",
        "on-surface": "#181c1c",
        "on-primary-container": "#86af99",
        "on-primary-fixed-variant": "#274e3d",
        "inverse-primary": "#a5d0b9",
        "surface": "#f7faf8",
        "outline": "#717973",
        "primary-fixed-dim": "#a5d0b9",
        "surface-container": "#ebefed",
        "surface-tint": "#3f6653",
        "secondary-fixed": "#92f7c3",
        "surface-container-low": "#f1f4f2",
        "background": "#f7faf8",
        "inverse-surface": "#2d3130",
        "on-error": "#ffffff",
        "surface-container-high": "#e6e9e7",
        "on-secondary": "#ffffff",
        "primary-container": "#1b4332",
        "on-primary": "#ffffff",
        "on-tertiary": "#ffffff",
        "tertiary-fixed-dim": "#95d4b3",
        "tertiary-fixed": "#b1f0ce",
        "on-primary-fixed": "#002114",
        "on-tertiary-fixed-variant": "#0e5138",
        "tertiary": "#002d1c",
        "inverse-on-surface": "#eef1ef",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#c1c8c2",
        "secondary": "#006c48",
        "on-secondary-fixed-variant": "#005235",
        "on-secondary-fixed": "#002113",
        "on-background": "#181c1c",
        "surface-container-highest": "#e0e3e1",
        "surface-variant": "#e0e3e1",
        "on-error-container": "#93000a",
        "surface-dim": "#d7dbd9",
        "error-container": "#ffdad6",
        "secondary-fixed-dim": "#75daa8",
        "error": "#ba1a1a",
        "on-tertiary-container": "#75b393"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "container-padding": "24px",
        "margin-mobile": "16px",
        "gutter": "20px",
        "unit": "8px",
        "margin-desktop": "32px"
      },
      "fontFamily": {
        "label-md": ["Inter"],
        "headline-lg-mobile": ["Lexend"],
        "headline-lg": ["Lexend"],
        "body-md": ["Inter"],
        "data-mono": ["Inter"],
        "headline-md": ["Lexend"],
        "body-lg": ["Inter"],
        "display-lg": ["Lexend"]
      },
      "fontSize": {
        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
        "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "data-mono": ["16px", {"lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "500"}],
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "500"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}
