export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const screenSize = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const breakpoint = {
  sm: `(min-width: ${screenSize.sm})`,
  md: `(min-width: ${screenSize.md})`,
  lg: `(min-width: ${screenSize.lg})`,
  xl: `(min-width: ${screenSize.xl})`,
  '2xl': `(min-width: ${screenSize['2xl']})`,
}