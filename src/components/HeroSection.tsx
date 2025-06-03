'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cabin-900 via-party-900 to-neon-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-neon-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-party-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cabin-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="text-party-400 w-8 h-8 mr-2 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold gradient-text font-script">
              Leia's Cabin Party
            </h1>
            <Sparkles className="text-neon-400 w-8 h-8 ml-2 animate-pulse" />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-cabin-200 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The Annual Descent into Debauchery
          </motion.p>
        </motion.div>

        {/* Event details cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            className="glass-effect rounded-2xl p-6 neon-glow"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Calendar className="text-neon-400 w-8 h-8 mx-auto mb-3" />
            <h3 className="text-white font-bold text-lg mb-2">When</h3>
            <p className="text-cabin-200 text-xl font-semibold">July 10th - 13th</p>
            <p className="text-cabin-300 text-sm mt-1">Get ready for 4 days of chaos!</p>
          </motion.div>

          <motion.div
            className="glass-effect rounded-2xl p-6 neon-glow"
            whileHover={{ scale: 1.05, rotateY: -5 }}
            transition={{ duration: 0.3 }}
          >
            <MapPin className="text-party-400 w-8 h-8 mx-auto mb-3" />
            <h3 className="text-white font-bold text-lg mb-2">Where</h3>
            <p className="text-cabin-200 text-xl font-semibold">108 Pinecrest Lake Rd</p>
            <p className="text-cabin-300 text-sm mt-1">Your summer escape awaits</p>
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="party-button text-xl px-12 py-6 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.span
              className="relative z-10"
              initial={false}
              animate={{ color: "#ffffff" }}
            >
              Get Ready to Get Rowdy! 🎉
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cabin-500 to-party-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute bottom-10 left-10 text-6xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🍻
        </motion.div>

        <motion.div
          className="absolute top-20 right-20 text-4xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🏖️
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-10 text-5xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🎊
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
} 