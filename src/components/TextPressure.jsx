'use client'

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'

const dist = (a, b) => {
  const dx = b.x - a.x
  const dy = b.y - a.y
  return Math.sqrt(dx * dx + dy * dy)
}

const getAttr = (distance, maxDist, minVal, maxVal) => {
  const ratio = Math.max(0, 1 - distance / maxDist)
  return minVal + (maxVal - minVal) * ratio
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
  text = 'macfolio',
  fontFamily = "'Playwrite US Trad', 'Sacramento', 'Dancing Script', 'Caveat', cursive",
  fontUrl = 'https://fonts.googleapis.com/css2?family=Playwrite+US+Trad:wght@100..400&family=Sacramento&family=Dancing+Script:wght@400..700&family=Caveat:wght@400..700&family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap',

  width = true,
  weight = true,
  italic = false,
  alpha = false,

  flex = false,
  stroke = false,
  scale = false,
  uppercase = false,

  textColor = '#FFFFFF',
  strokeColor = '#5227FF',
  strokeWidth = 2,
  className = '',

  minFontSize = 24,
  defaultWeight = 400,
  minWeight = 200,
  maxWeight = 700,
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
  const [lineHeight, setLineHeight] = useState(1.1)

  const chars = useMemo(() => text.split(''), [text])

  const currentPropsRef = useRef(
    chars.map(() => ({
      wght: defaultWeight,
      wdth: defaultWidth,
      ital: defaultItalic,
      alpha: defaultAlpha,
      scale: 1,
      y: 0,
    }))
  )

  useEffect(() => {
    currentPropsRef.current = chars.map(() => ({
      wght: defaultWeight,
      wdth: defaultWidth,
      ital: defaultItalic,
      alpha: defaultAlpha,
      scale: 1,
      y: 0,
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

      // If cursor is over any open window, dock, navbar, or UI overlay, disable desktop bg hover
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
        const buffer = 140
        const isInsideBounds =
          e.clientX >= rect.left - buffer &&
          e.clientX <= rect.right + buffer &&
          e.clientY >= rect.top - buffer &&
          e.clientY <= rect.bottom + buffer

        isHoveredRef.current = isInsideBounds
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

    let newFontSize = containerW / (chars.length / (flex ? 2 : 1.7))
    if (containerH > 0) {
      newFontSize = Math.min(newFontSize, containerH * 0.9)
    }
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
        mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 8
        mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 8
      }

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect()
        const maxDist = Math.max(titleRect.width / 2, 220)

        spansRef.current.forEach((span, i) => {
          if (!span) return

          let targetWdth = defaultWidth
          let targetWght = defaultWeight
          let targetItal = defaultItalic
          let targetAlpha = defaultAlpha
          let targetScale = 1
          let targetY = 0

          if (isHoveredRef.current) {
            const rect = span.getBoundingClientRect()
            const charCenter = {
              x: rect.x + rect.width / 2,
              y: rect.y + rect.height / 2,
            }

            const d = dist(mouseRef.current, charCenter)

            if (d < maxDist) {
              const proximityRatio = Math.max(0, 1 - d / maxDist)
              targetWdth = width ? Math.floor(getAttr(d, maxDist, 25, 151)) : defaultWidth
              targetWght = weight ? Math.floor(getAttr(d, maxDist, minWeight, maxWeight)) : defaultWeight
              targetItal = italic ? Number(getAttr(d, maxDist, 0, 1).toFixed(2)) : defaultItalic
              targetAlpha = alpha ? Number(getAttr(d, maxDist, 0.4, 1).toFixed(2)) : defaultAlpha
              targetScale = 1 + proximityRatio * 0.12
              targetY = -proximityRatio * 6
            }
          }

          if (!currentPropsRef.current[i]) {
            currentPropsRef.current[i] = {
              wght: defaultWeight,
              wdth: defaultWidth,
              ital: defaultItalic,
              alpha: defaultAlpha,
              scale: 1,
              y: 0,
            }
          }

          const cur = currentPropsRef.current[i]
          cur.wght += (targetWght - cur.wght) * 0.2
          cur.wdth += (targetWdth - cur.wdth) * 0.2
          cur.ital += (targetItal - cur.ital) * 0.2
          cur.alpha += (targetAlpha - cur.alpha) * 0.2
          cur.scale += (targetScale - cur.scale) * 0.2
          cur.y += (targetY - cur.y) * 0.2

          const variationParts = []
          if (weight) variationParts.push(`'wght' ${Math.round(cur.wght)}`)
          if (width) variationParts.push(`'wdth' ${Math.round(cur.wdth)}`)
          if (italic) variationParts.push(`'ital' ${cur.ital.toFixed(2)}`)

          const newFontVariationSettings = variationParts.join(', ')

          if (newFontVariationSettings && span.style.fontVariationSettings !== newFontVariationSettings) {
            span.style.fontVariationSettings = newFontVariationSettings
          }
          span.style.fontWeight = Math.round(cur.wght)
          span.style.transform = `translate3d(0, ${cur.y.toFixed(2)}px, 0) scale(${cur.scale.toFixed(3)})`

          if (alpha && span.style.opacity !== String(cur.alpha.toFixed(2))) {
            span.style.opacity = cur.alpha.toFixed(2)
          }
        })
      }

      rafId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(rafId)
  }, [width, weight, italic, alpha, defaultWidth, defaultWeight, minWeight, maxWeight, defaultItalic, defaultAlpha])

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
  }, [fontUrl, textColor, strokeColor, strokeWidth])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-visible bg-transparent cursor-default flex items-center justify-center"
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
          transformOrigin: 'center center',
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
            className="inline-block transition-transform duration-75 ease-out will-change-transform"
            style={{
              fontWeight: defaultWeight,
              fontFamily: 'inherit',
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
