import { configureStore } from '@reduxjs/toolkit'
import themeReducer, { ThemeState } from './features/theme/themeSlice'

export interface AppState {
  theme: ThemeState
}

// makeStore function returns a new store for each request.
export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
