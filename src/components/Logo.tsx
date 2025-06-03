'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`flex items-center space-x-2 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        {/* Cabin outline */}
        <motion.path
          d="M8 32L24 16L40 32V40C40 42.2091 38.2091 44 36 44H12C9.79086 44 8 42.2091 8 40V32Z"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Lake waves */}
        <motion.path
          d="M4 36C8 34 12 38 16 36C20 34 24 38 28 36C32 34 36 38 40 36C44 34 48 38 52 36"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        
        {/* Party star */}
        <motion.polygon
          points="24,4 26.5,11.5 34,14 26.5,16.5 24,24 21.5,16.5 14,14 21.5,11.5"
          fill="url(#gradient3)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0ea5e9' }} />
            <stop offset="50%" style={{ stopColor: '#d946ef' }} />
            <stop offset="100%" style={{ stopColor: '#f06331' }} />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#38bdf8' }} />
            <stop offset="100%" style={{ stopColor: '#0ea5e9' }} />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#e879f9' }} />
            <stop offset="100%" style={{ stopColor: '#d946ef' }} />
          </linearGradient>
        </defs>
      </motion.svg>
      
      <motion.div 
        className="flex flex-col"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="text-2xl font-bold gradient-text font-script">
          Leia's
        </span>
        <span className="text-lg font-semibold text-neon-400 -mt-1">
          CABIN PARTY
        </span>
      </motion.div>
    </motion.div>
  );
} 