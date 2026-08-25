'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import useWindowStore from '#store/windows'
import WindowControls from '#components/WindowControls'

try {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(Draggable)
  }
} catch (e) {
  console.warn('[WindowWrapper] Failed to register Draggable plugin:', e)
}

const WindowWrapper = (WrappedComponent, windowKey) => {
  return function WithWindow(props) {
    const {
      windows,
      closeWindow,
      focusWindow,
    } = useWindowStore()

    const windowState = windows?.[windowKey]
    const containerRef = useRef(null)
    const draggableInstanceRef = useRef(null)

    // Setup High-Performance Smooth Draggable
    useEffect(() => {
      if (typeof window === 'undefined') return
      if (windowState?.isOpen && containerRef.current) {
        try {
          const header = containerRef.current.querySelector('#window-header')

          const [draggable] = Draggable.create(containerRef.current, {
            trigger: header || containerRef.current,
            bounds: '#desktop-bounds',
            edgeResistance: 1,
            type: 'x,y',
            force3D: true,
            cursor: 'default',
            activeCursor: 'grabbing',
            dragClickables: false,
            clickableTest: (el) => Boolean(el?.closest?.('button, a, input, #window-controls, [data-clickable="true"]')),
            zIndexBoost: false,
            onPress: function () {
              try {
                focusWindow(windowKey)
              } catch (err) {
                console.error(err)
              }
            },
          })

          draggableInstanceRef.current = draggable

          return () => {
            try {
              draggable?.kill()
            } catch (err) {
              console.warn('[WindowWrapper] Draggable cleanup notice:', err)
            }
          }
        } catch (err) {
          console.warn(`[WindowWrapper] Draggable initialization error for ${windowKey}:`, err)
        }
      }
    }, [windowState?.isOpen, windowKey, focusWindow])

    // Initial pop-in animation on first open
    useEffect(() => {
      if (windowState?.isOpen && containerRef.current) {
        try {
          gsap.fromTo(
            containerRef.current,
            { scale: 0.9, opacity: 0, y: 10 },
            { scale: 1, opacity: 1, y: 0, duration: 0.22, ease: 'power2.out', clearProps: 'transform' }
          )
        } catch (err) {
          console.warn('[WindowWrapper] Animation error:', err)
        }
      }
    }, [windowState?.isOpen])

    if (!windowState?.isOpen) {
      return null
    }

    // Close with smooth fade/shrink
    const handleClose = () => {
      try {
        if (!containerRef.current) {
          closeWindow(windowKey)
          return
        }
        gsap.to(containerRef.current, {
          scale: 0.85,
          opacity: 0,
          duration: 0.16,
          ease: 'power2.in',
          onComplete: () => {
            try {
              closeWindow(windowKey)
            } catch (e) {
              console.error(e)
            }
          },
        })
      } catch (err) {
        console.warn('[WindowWrapper] Error during close animation:', err)
        closeWindow(windowKey)
      }
    }

    return (
      <section
        id={windowKey}
        ref={containerRef}
        className="will-change-transform select-none"
        style={{ zIndex: windowState?.zIndex || 1000 }}
        onMouseDown={() => {
          try {
            focusWindow(windowKey)
          } catch (e) {
            console.error(e)
          }
        }}
        onTouchStart={() => {
          try {
            focusWindow(windowKey)
          } catch (e) {
            console.error(e)
          }
        }}
      >
        <WrappedComponent
          {...props}
          windowData={windowState?.data}
          close={handleClose}
          controls={<WindowControls onClose={handleClose} />}
        />
      </section>
    )
  }
}

export default WindowWrapper
export { WindowWrapper }
