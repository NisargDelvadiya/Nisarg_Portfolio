'use client'

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'

const dist = (a, b) => {
  const dx = b.x - a.x
  const dy = b.y - a.y
  return Math.sqrt(dx * dx + dy * dy)
}

const getAttr = (distance, maxDist, minVal, maxVal) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist)
  return Math.max(minVal, val + minVal)
}

const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

const TextPressure = ({
  text = 'Compressa',
  fontFamily = 'Roboto Flex',
  fontUrl = 'https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap',

  width = true,
  weight = true,
  italic = true,
  alpha = false,

  flex = true,
  stroke = false,
  scale = false,
  uppercase = false,

  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  strokeWidth = 2,
  className = '',

  minFontSize = 24,
  defaultWeight = 400,
  defaultWidth = 100,
  defaultItalic = 0,
  defaultAlpha = 1,
  as: Component = 'h1',
}) => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const spansRef = useRef([])

  const mouseRef = useRef({ x: 0, y: 0 })
  const cursorRef = useRef({ x: 0, y: 0 })
  const isHoveredRef = useRef(false)

  const [fontSize, setFontSize] = useState(minFontSize)
  const [scaleY, setScaleY] = useState(1)
  const [lineHeight, setLineHeight] = useState(1)

  const chars = useMemo(() => text.split(''), [text])

  const currentPropsRef = useRef(
    chars.map(() => ({
      wght: defaultWeight,
      wdth: defaultWidth,
      ital: defaultItalic,
      alpha: defaultAlpha,
    }))
  )

  useEffect(() => {
    currentPropsRef.current = chars.map(() => ({
      wght: defaultWeight,
      wdth: defaultWidth,
      ital: defaultItalic,
      alpha: defaultAlpha,
    }))
  }, [chars, defaultWeight, defaultWidth, defaultItalic, defaultAlpha])

  useEffect(() => {
    // Only enable interactive hover on desktop screens with a mouse/precision pointer
    const isDesktopPointer = () => {
      if (typeof window === 'undefined') return false
      const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      const isWideScreen = window.innerWidth >= 1024
      return hasFinePointer && isWideScreen
    }

    const handleMouseMove = (e) => {
      if (!isDesktopPointer()) {
        isHoveredRef.current = false
        return
      }

      // Check what element is directly under the user's cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY)

      // If the cursor is over ANY open window, dock, navbar, or overlay, completely disable desktop bg hover
      const isOverWindowOrUi = Boolean(
        elementUnderCursor?.closest?.(
          '#safari, #finder, #photos, #contact, #terminal, #resume, #txtfile, #imgfile, #pdf, #notes, #translate, #dock, #navbar, section[id]:not(#welcome), .dock-container, [role="dialog"], [role="toolbar"], button, input'
        )
      )

      if (isOverWindowOrUi) {
        isHoveredRef.current = false
        return
      }

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const isInsideBounds =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom

        // Ensure the cursor directly targets the welcome hero area and is not obstructed
        const isDirectHit = Boolean(elementUnderCursor?.closest?.('#welcome, .text-pressure-title'))

        isHoveredRef.current = isInsideBounds && isDirectHit
      } else {
        isHoveredRef.current = false
      }

      cursorRef.current.x = e.clientX
      cursorRef.current.y = e.clientY
    }

    const resetHover = () => {
      isHoveredRef.current = false
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', resetHover)
    window.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget && !e.toElement) {
        resetHover()
      }
    })
    window.addEventListener('blur', resetHover)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) resetHover()
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', resetHover)
      window.removeEventListener('blur', resetHover)
    }
  }, [])

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect()

    let newFontSize = containerW / (chars.length / (flex ? 2 : 1.8))
    newFontSize = Math.max(newFontSize, minFontSize)

    setFontSize(newFontSize)
    setScaleY(1)
    setLineHeight(1.1)

    requestAnimationFrame(() => {
      if (!titleRef.current) return
      const textRect = titleRef.current.getBoundingClientRect()

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height
        setScaleY(yRatio)
        setLineHeight(yRatio)
      }
    })
  }, [chars.length, minFontSize, scale, flex])

  useEffect(() => {
    const debouncedSetSize = debounce(setSize, 100)
    debouncedSetSize()
    window.addEventListener('resize', debouncedSetSize)
    return () => window.removeEventListener('resize', debouncedSetSize)
  }, [setSize])

  useEffect(() => {
    let rafId
    const animate = () => {
      if (isHoveredRef.current) {
        mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 10
        mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 10
      }

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect()
        const maxDist = Math.max(titleRect.width / 2, 200)

        spansRef.current.forEach((span, i) => {
          if (!span) return

          let targetWdth = defaultWidth
          let targetWght = defaultWeight
          let targetItal = defaultItalic
          let targetAlpha = defaultAlpha

          if (isHoveredRef.current) {
            const rect = span.getBoundingClientRect()
            const charCenter = {
              x: rect.x + rect.width / 2,
              y: rect.y + rect.height / 2,
            }

            const d = dist(mouseRef.current, charCenter)

            targetWdth = width ? Math.floor(getAttr(d, maxDist, 25, 151)) : defaultWidth
            targetWght = weight ? Math.floor(getAttr(d, maxDist, 100, 900)) : defaultWeight
            targetItal = italic ? Number(getAttr(d, maxDist, 0, 1).toFixed(2)) : defaultItalic
            targetAlpha = alpha ? Number(getAttr(d, maxDist, 0.3, 1).toFixed(2)) : defaultAlpha
          }

          if (!currentPropsRef.current[i]) {
            currentPropsRef.current[i] = {
              wght: defaultWeight,
              wdth: defaultWidth,
              ital: defaultItalic,
              alpha: defaultAlpha,
            }
          }

          const cur = currentPropsRef.current[i]
          cur.wght += (targetWght - cur.wght) * 0.2
          cur.wdth += (targetWdth - cur.wdth) * 0.2
          cur.ital += (targetItal - cur.ital) * 0.2
          cur.alpha += (targetAlpha - cur.alpha) * 0.2

          const newFontVariationSettings = `'wght' ${Math.round(cur.wght)}, 'wdth' ${Math.round(cur.wdth)}, 'ital' ${cur.ital.toFixed(2)}`

          if (span.style.fontVariationSettings !== newFontVariationSettings) {
            span.style.fontVariationSettings = newFontVariationSettings
          }
          if (alpha && span.style.opacity !== String(cur.alpha.toFixed(2))) {
            span.style.opacity = cur.alpha.toFixed(2)
          }
        })
      }

      rafId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(rafId)
  }, [width, weight, italic, alpha, defaultWidth, defaultWeight, defaultItalic, defaultAlpha])

  const styleElement = useMemo(() => {
    return (
      <style>{`
        @import url('${fontUrl}');
        .stroke span {
          position: relative;
          color: ${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }
      `}</style>
    )
  }, [fontFamily, fontUrl, textColor, strokeColor, strokeWidth])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-transparent cursor-default flex items-center justify-center"
    >
      {styleElement}
      <Component
        ref={titleRef}
        className={`text-pressure-title ${className} ${
          flex ? 'flex justify-between w-full' : 'inline-flex justify-center'
        } ${stroke ? 'stroke' : ''} ${uppercase ? 'uppercase' : ''} text-center`}
        style={{
          fontFamily,
          fontSize: `${fontSize}px`,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
          margin: 0,
          fontWeight: defaultWeight,
          color: stroke ? undefined : textColor,
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              spansRef.current[i] = el
            }}
            data-char={char}
            className="inline-block"
            style={{
              fontVariationSettings: `'wght' ${defaultWeight}, 'wdth' ${defaultWidth}, 'ital' ${defaultItalic}`,
            }}
          >
            {char === ' ' ? ' ' : char}
          </span>
        ))}
      </Component>
    </div>
  )
}

export default TextPressure
