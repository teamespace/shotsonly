import { useRef, useState } from 'react'
import { motion } from 'motion/react'

export function MagneticButton({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLButtonElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  
  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    setPos({ x: (e.clientX - left - width / 2) * 0.3, y: (e.clientY - top - height / 2) * 0.3 })
  }
  
  return (
    <motion.button 
      ref={ref} 
      onMouseMove={onMove} 
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos} 
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}
