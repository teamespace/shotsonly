import { useRef, useState, MouseEvent, ReactNode } from 'react'
import { motion } from 'motion/react'

interface Props {
  children: ReactNode
  className?: string
  href?: string
}

export function MagneticButton({ children, className, href }: Props) {
  const ref = useRef<any>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  
  const onMove = (e: MouseEvent) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    setPos({ 
      x: (e.clientX - left - width / 2) * 0.3, 
      y: (e.clientY - top - height / 2) * 0.3 
    })
  }

  if (href) {
    return (
      <motion.a 
        href={href} 
        ref={ref} 
        onMouseMove={onMove} 
        onMouseLeave={() => setPos({ x: 0, y: 0 })}
        animate={pos} 
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
        className={className}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button 
      ref={ref} 
      onMouseMove={onMove} 
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos} 
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}
