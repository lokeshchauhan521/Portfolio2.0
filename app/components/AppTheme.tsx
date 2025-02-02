'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setTheme } from '@/lib/features/theme/themeSlice'
import { getSavedTheme } from '@/lib/features/theme/themeUtil'

const AppTheme = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme.theme)

  useEffect(() => {
    dispatch(setTheme(getSavedTheme()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [theme])
  return <></>
}

export default AppTheme
