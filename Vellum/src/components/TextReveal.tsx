import { motion } from 'motion/react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const child = {
  hidden: { opacity: 0, y: 30, rotateX: -45 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', damping: 14, stiffness: 200 },
  },
}

export function TextReveal({ text, className }: { text: string, className?: string }) {
  // Split by spaces, but keep the spaces so we can render them properly
  const words = text.split(' ');

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`inline-block ${className || ''}`}
    >
      {words.map((word, i) => (
        <motion.span 
          key={i} 
          variants={child} 
          className="inline-block origin-bottom mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
