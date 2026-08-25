import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants'

const initialWindows = Object.keys(WINDOW_CONFIG || {}).reduce((acc, key) => {
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
        try {
          if (!windowKey) return
          const nextZIndex = (state.highestZIndex || INITIAL_Z_INDEX) + 1
          state.highestZIndex = nextZIndex

          if (!state.windows[windowKey]) {
            state.windows[windowKey] = {
              isOpen: true,
              isMinimized: false,
              isMaximized: false,
              zIndex: nextZIndex,
              data: data,
            }
          } else {
            state.windows[windowKey].isOpen = true
            state.windows[windowKey].isMinimized = false
            state.windows[windowKey].zIndex = nextZIndex
            if (data !== null) {
              state.windows[windowKey].data = data
            }
          }
        } catch (err) {
          console.error(`[WindowStore] Failed to open window: ${windowKey}`, err)
        }
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        try {
          if (state.windows?.[windowKey]) {
            state.windows[windowKey].isOpen = false
            state.windows[windowKey].isMinimized = false
            state.windows[windowKey].isMaximized = false
            state.windows[windowKey].data = null
          }
        } catch (err) {
          console.error(`[WindowStore] Failed to close window: ${windowKey}`, err)
        }
      }),

    minimizeWindow: (windowKey) =>
      set((state) => {
        try {
          if (state.windows?.[windowKey]) {
            state.windows[windowKey].isMinimized = true
          }
        } catch (err) {
          console.error(`[WindowStore] Failed to minimize window: ${windowKey}`, err)
        }
      }),

    restoreWindow: (windowKey) =>
      set((state) => {
        try {
          if (state.windows?.[windowKey]) {
            const nextZIndex = (state.highestZIndex || INITIAL_Z_INDEX) + 1
            state.highestZIndex = nextZIndex
            state.windows[windowKey].isMinimized = false
            state.windows[windowKey].zIndex = nextZIndex
          }
        } catch (err) {
          console.error(`[WindowStore] Failed to restore window: ${windowKey}`, err)
        }
      }),

    toggleMaximizeWindow: (windowKey) =>
      set((state) => {
        try {
          if (state.windows?.[windowKey]) {
            state.windows[windowKey].isMaximized = !state.windows[windowKey].isMaximized
          }
        } catch (err) {
          console.error(`[WindowStore] Failed to toggle maximize on: ${windowKey}`, err)
        }
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        try {
          if (state.windows?.[windowKey] && state.windows[windowKey].zIndex !== state.highestZIndex) {
            const nextZIndex = (state.highestZIndex || INITIAL_Z_INDEX) + 1
            state.highestZIndex = nextZIndex
            state.windows[windowKey].zIndex = nextZIndex
          }
        } catch (err) {
          console.error(`[WindowStore] Failed to focus window: ${windowKey}`, err)
        }
      }),

    toggleWindow: (windowKey, data = null) =>
      set((state) => {
        try {
          if (!windowKey) return
          const win = state.windows?.[windowKey]
          if (!win) {
            const nextZIndex = (state.highestZIndex || INITIAL_Z_INDEX) + 1
            state.highestZIndex = nextZIndex
            state.windows[windowKey] = {
              isOpen: true,
              isMinimized: false,
              isMaximized: false,
              zIndex: nextZIndex,
              data: data,
            }
            return
          }

          if (!win.isOpen) {
            const nextZIndex = (state.highestZIndex || INITIAL_Z_INDEX) + 1
            state.highestZIndex = nextZIndex
            win.isOpen = true
            win.isMinimized = false
            win.zIndex = nextZIndex
            if (data !== null) win.data = data
          } else if (win.isMinimized) {
            const nextZIndex = (state.highestZIndex || INITIAL_Z_INDEX) + 1
            state.highestZIndex = nextZIndex
            win.isMinimized = false
            win.zIndex = nextZIndex
          } else {
            win.isMinimized = true
          }
        } catch (err) {
          console.error(`[WindowStore] Failed to toggle window: ${windowKey}`, err)
        }
      }),
  }))
)

export default useWindowStore
export { useWindowStore }
