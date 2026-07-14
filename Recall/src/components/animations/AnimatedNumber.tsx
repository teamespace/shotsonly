import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'motion/react'

export function AnimatedNumber({ 
  value, 
  prefix = "", 
  suffix = "", 
  decimals = 0 
}: { 
  value: number
  prefix?: string
  suffix?: string
  decimals?: number 
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 80,
  })
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  useEffect(() => {
    if (isInView) {
      // Add a small delay for better effect
      setTimeout(() => {
        motionValue.set(value)
      }, 200)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`
      }
    })
  }, [springValue, prefix, suffix, decimals])

  return (
    <span ref={ref}>
      {prefix}0{decimals > 0 ? '.' + '0'.repeat(decimals) : ''}{suffix}
    </span>
  )
}
