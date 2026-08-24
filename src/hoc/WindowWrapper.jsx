'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import useWindowStore from '#store/windows'
import WindowControls from '#components/WindowControls'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable)
}

const WindowWrapper = (WrappedComponent, windowKey) => {
  return function WithWindow(props) {
    const {
      windows,
      closeWindow,
      focusWindow,
    } = useWindowStore()

    const windowState = windows[windowKey]
    const containerRef = useRef(null)
    const draggableInstanceRef = useRef(null)

    // Setup High-Performance Smooth Draggable
    useEffect(() => {
      if (typeof window === 'undefined') return
      if (windowState?.isOpen && containerRef.current) {
        const [draggable] = Draggable.create(containerRef.current, {
          trigger: containerRef.current,
          bounds: '#desktop-bounds',
          edgeResistance: 0.85,
          type: 'x,y',
          force3D: true,
          cursor: 'grab',
          activeCursor: 'grabbing',
          dragClickables: false,
          zIndexBoost: false,
          onPress: () => {
            focusWindow(windowKey)
          },
        })

        draggableInstanceRef.current = draggable

        return () => {
          draggable?.kill()
        }
      }
    }, [windowState?.isOpen, windowKey, focusWindow])

    // Initial pop-in animation on first open
    useEffect(() => {
      if (windowState?.isOpen && containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { scale: 0.9, opacity: 0, y: 10 },
          { scale: 1, opacity: 1, y: 0, duration: 0.22, ease: 'power2.out', clearProps: 'transform' }
        )
      }
    }, [windowState?.isOpen])

    if (!windowState?.isOpen) {
      return null
    }

    // Close with smooth fade/shrink
    const handleClose = () => {
      if (!containerRef.current) {
        closeWindow(windowKey)
        return
      }
      gsap.to(containerRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 0.16,
        ease: 'power2.in',
        onComplete: () => closeWindow(windowKey),
      })
    }

    return (
      <section
        id={windowKey}
        ref={containerRef}
        className="will-change-transform select-none"
        style={{ zIndex: windowState.zIndex }}
        onMouseDown={() => focusWindow(windowKey)}
      >
        <WrappedComponent
          {...props}
          windowData={windowState.data}
          close={handleClose}
          controls={<WindowControls onClose={handleClose} />}
        />
      </section>
    )
  }
}

export default WindowWrapper
export { WindowWrapper }
