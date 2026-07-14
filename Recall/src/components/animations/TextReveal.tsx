import { motion } from 'motion/react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
}

const child = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', damping: 12 },
  },
}

export function TextReveal({ text, className = "" }: { text: string, className?: string }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`inline-block ${className}`}
    >
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block">
          {word.split('').map((char, j) => (
            <motion.span key={`${i}-${j}`} variants={child} className="inline-block" style={{ transformStyle: 'preserve-3d' }}>
              {char}
            </motion.span>
          ))}
          {i < text.split(' ').length - 1 && '\u00A0'}
        </span>
      ))}
    </motion.span>
  )
}
