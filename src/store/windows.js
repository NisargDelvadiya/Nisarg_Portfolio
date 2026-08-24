import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants'

const initialWindows = Object.keys(WINDOW_CONFIG).reduce((acc, key) => {
  acc[key] = {
    ...WINDOW_CONFIG[key],
    isMinimized: false,
    isMaximized: false,
  }
  return acc
}, {})

const useWindowStore = create(
  immer((set) => ({
    windows: initialWindows,
    highestZIndex: INITIAL_Z_INDEX,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const nextZIndex = state.highestZIndex + 1
        state.highestZIndex = nextZIndex
        if (state.windows[windowKey]) {
          state.windows[windowKey].isOpen = true
          state.windows[windowKey].isMinimized = false
          state.windows[windowKey].zIndex = nextZIndex
          if (data !== null) {
            state.windows[windowKey].data = data
          }
        }
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        if (state.windows[windowKey]) {
          state.windows[windowKey].isOpen = false
          state.windows[windowKey].isMinimized = false
          state.windows[windowKey].isMaximized = false
          state.windows[windowKey].data = null
        }
      }),

    minimizeWindow: (windowKey) =>
      set((state) => {
        if (state.windows[windowKey]) {
          state.windows[windowKey].isMinimized = true
        }
      }),

    restoreWindow: (windowKey) =>
      set((state) => {
        if (state.windows[windowKey]) {
          const nextZIndex = state.highestZIndex + 1
          state.highestZIndex = nextZIndex
          state.windows[windowKey].isMinimized = false
          state.windows[windowKey].zIndex = nextZIndex
        }
      }),

    toggleMaximizeWindow: (windowKey) =>
      set((state) => {
        if (state.windows[windowKey]) {
          state.windows[windowKey].isMaximized = !state.windows[windowKey].isMaximized
        }
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        if (state.windows[windowKey] && state.windows[windowKey].zIndex !== state.highestZIndex) {
          const nextZIndex = state.highestZIndex + 1
          state.highestZIndex = nextZIndex
          state.windows[windowKey].zIndex = nextZIndex
        }
      }),

    toggleWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey]
        if (!win) return

        if (!win.isOpen) {
          const nextZIndex = state.highestZIndex + 1
          state.highestZIndex = nextZIndex
          win.isOpen = true
          win.isMinimized = false
          win.zIndex = nextZIndex
          if (data !== null) win.data = data
        } else if (win.isMinimized) {
          const nextZIndex = state.highestZIndex + 1
          state.highestZIndex = nextZIndex
          win.isMinimized = false
          win.zIndex = nextZIndex
        } else {
          win.isMinimized = true
        }
      }),
  }))
)

export default useWindowStore
export { useWindowStore }
