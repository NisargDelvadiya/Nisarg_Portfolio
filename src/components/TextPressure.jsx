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

  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  strokeWidth = 2,
  className = '',

  minFontSize = 24,
  defaultWeight = 400,
  defaultWidth = 100,
  defaultItalic = 0,
  defaultAlpha = 1,
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
    const handleMouseMove = (e) => {
      cursorRef.current.x = e.clientX
      cursorRef.current.y = e.clientY

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        // Strictly check if mouse is inside the text container bounds
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom

        isHoveredRef.current = isInside
      }
    }

    const handleTouchMove = (e) => {
      const t = e.touches[0]
      if (t) {
        cursorRef.current.x = t.clientX
        cursorRef.current.y = t.clientY

        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          const isInside =
            t.clientX >= rect.left &&
            t.clientX <= rect.right &&
            t.clientY >= rect.top &&
            t.clientY <= rect.bottom

          isHoveredRef.current = isInside
        }
      }
    }

    const resetHover = () => {
      isHoveredRef.current = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
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
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('mouseleave', resetHover)
      window.removeEventListener('blur', resetHover)
    }
  }, [])

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect()

    let newFontSize = containerW / (chars.length / 2)
    newFontSize = Math.max(newFontSize, minFontSize)

    setFontSize(newFontSize)
    setScaleY(1)
    setLineHeight(1)

    requestAnimationFrame(() => {
      if (!titleRef.current) return
      const textRect = titleRef.current.getBoundingClientRect()

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height
        setScaleY(yRatio)
        setLineHeight(yRatio)
      }
    })
  }, [chars.length, minFontSize, scale])

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
          // Lerp speed: 0.2 provides responsive return to original state
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
      onMouseEnter={(e) => {
        isHoveredRef.current = true
        mouseRef.current.x = e.clientX
        mouseRef.current.y = e.clientY
        cursorRef.current.x = e.clientX
        cursorRef.current.y = e.clientY
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false
      }}
      className="relative w-full h-full overflow-hidden bg-transparent cursor-default"
    >
      {styleElement}
      <h1
        ref={titleRef}
        className={`text-pressure-title ${className} ${
          flex ? 'flex justify-between' : ''
        } ${stroke ? 'stroke' : ''} uppercase text-center`}
        style={{
          fontFamily,
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
          margin: 0,
          fontWeight: 400,
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
      </h1>
    </div>
  )
}

export default TextPressure
