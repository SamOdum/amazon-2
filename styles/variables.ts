export const appColors = {
  englishViolet: '#493548ff',
  independence: '#4b4e6dff',
  steelTeal: '#6a8d92ff',
  darkSeagreen: '#80b192ff',
  lightGreen: '#a1e887ff',
} as const

export const breakpoints = {
  zero: 0,
  xs: 414,
  sm: 768,
  md: 992,
  lg: 1440,
  xl: 1920,
} as const

export type Breakpoint = keyof typeof breakpoints

export const media = {
  xsPlus: `min-width: ${breakpoints.xs}px`,
  smPlus: `min-width: ${breakpoints.sm}px`,
  mdPlus: `min-width: ${breakpoints.md}px`,
  lgPlus: `min-width: ${breakpoints.lg}px`,
  xlPlus: `min-width: ${breakpoints.xl}px`,
} as const

export const appTheme = {
  borderColor: appColors.independence,
  borderRadius: '0.25rem',
  border: `1px solid ${appColors.independence}`,
  lineHeight: '1.5',

  fontWeightNormal: 400,
  fontWeightBold: 600,
  fontWeightMega: 900,
}
