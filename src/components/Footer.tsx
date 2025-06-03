'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-t from-cabin-900 to-party-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 text-6xl">🌊</div>
        <div className="absolute bottom-0 right-1/4 text-5xl">🏡</div>
        <div className="absolute bottom-0 left-1/2 text-4xl">⭐</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Logo />
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold gradient-text font-script mb-4">
              See You There!
            </h3>
            <p className="text-xl text-cabin-200 max-w-2xl mx-auto leading-relaxed">
              Get ready for four days of absolute mayhem, unforgettable memories, 
              and the kind of stories you'll be telling for years to come.
            </p>
          </motion.div>

          {/* Quick details reminder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-6 max-w-lg mx-auto mb-8"
          >
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-neon-400 font-bold text-lg">July 10-13</p>
                <p className="text-cabin-300 text-sm">The Dates</p>
              </div>
              <div>
                <p className="text-party-400 font-bold text-lg">108 Pinecrest Lake Rd</p>
                <p className="text-cabin-300 text-sm">The Place</p>
              </div>
            </div>
          </motion.div>

          {/* Animated emojis */}
          <motion.div
            className="flex justify-center space-x-4 text-4xl mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🎉
            </motion.span>
            <motion.span
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              🏖️
            </motion.span>
            <motion.span
              animate={{ 
                rotate: [0, -15, 15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              🍻
            </motion.span>
            <motion.span
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2.2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              🎊
            </motion.span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-cabin-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            © 2024 Leia's Cabin Party. All rights reserved to have an absolutely legendary time! 🚀
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
} 