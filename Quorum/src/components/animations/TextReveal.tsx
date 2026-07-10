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

export function TextReveal({ text }: { text: string }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="inline-block"
      style={{ perspective: "1000px" }}
    >
      {text.split('').map((char, i) => (
        <motion.span key={i} variants={child} className="inline-block" style={{ transformOrigin: "bottom" }}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
