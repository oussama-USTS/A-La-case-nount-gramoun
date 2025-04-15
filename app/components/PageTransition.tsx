'use client';

import { motion } from 'framer-motion';

export default function PageTransition() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-600"
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: [0, 1, 1, 0],
        transformOrigin: ['0% 0%', '0% 0%', '0% 100%', '0% 100%'],
      }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, -20],
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-24 h-24 border-4 border-white border-t-transparent rounded-full animate-spin" />
        <h2 className="mt-4 text-2xl font-bold text-white">Chargement...</h2>
      </motion.div>
    </motion.div>
  );
} 