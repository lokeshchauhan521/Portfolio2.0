import { Theme } from '@/lib/types/shared.types'

export const getSavedTheme = (): Theme => {
  if (['dark', 'light'].includes(localStorage.theme)) {
    return localStorage.theme
  } else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
  }
  return 'light'
}
