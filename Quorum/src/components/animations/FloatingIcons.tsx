import React from 'react';
import { motion } from 'motion/react';

export function FloatingIcons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 150, damping: 12 } 
    },
  };

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center gap-6 py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Connecting line */}
      <motion.div 
        className="absolute top-12 bottom-12 w-px bg-white/50 left-1/2 -translate-x-1/2 z-0 origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      />
      
      {/* Energy Particle traveling down the line */}
      <motion.div
        className="absolute w-[3px] h-12 bg-white rounded-full left-1/2 -translate-x-1/2 z-0 shadow-[0_0_15px_5px_rgba(255,255,255,0.8)]"
        animate={{ 
          top: ["15%", "85%"],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "linear",
          delay: 1.5
        }}
      />
      
      {/* Icons */}
      <motion.div variants={itemVariants} className="z-10">
        <motion.div 
          animate={{ y: [-2, 2] }} 
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.5, ease: "easeInOut", delay: 0 }}
          className="w-14 h-14 bg-white rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <span className="text-xl">📹</span>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="z-10">
        <motion.div 
          animate={{ y: [-2, 2] }} 
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.8, ease: "easeInOut", delay: 0.4 }}
          className="w-14 h-14 bg-white rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <span className="text-xl">💬</span>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="z-10">
        <motion.div 
          animate={{ y: [-2, 2] }} 
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.3, ease: "easeInOut", delay: 0.8 }}
          className="w-14 h-14 bg-white rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <span className="text-xl">📝</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
