'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

export default function EventDetails() {
  return (
    <section id="details" className="py-20 bg-gradient-to-b from-neon-900 to-cabin-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 text-9xl">🏡</div>
        <div className="absolute bottom-10 right-1/4 text-8xl">🌊</div>
        <div className="absolute top-1/2 left-10 text-7xl">🎪</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text font-script mb-6">
            The Lowdown
          </h2>
          <p className="text-xl text-cabin-200 max-w-3xl mx-auto leading-relaxed">
            Welcome to the most epic summer getaway of the year! Four days of unforgettable memories, 
            legendary parties, and lake-side shenanigans that'll have you talking until next summer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Users className="text-party-400 w-8 h-8 mr-3" />
                What to Expect
              </h3>
              <div className="space-y-4 text-cabin-200">
                <p className="flex items-start">
                  <span className="text-neon-400 text-2xl mr-3">🌅</span>
                  <span>Sunrise lake sessions and sunset vibes that'll melt your stress away</span>
                </p>
                <p className="flex items-start">
                  <span className="text-party-400 text-2xl mr-3">🎮</span>
                  <span>Epic games, competitions, and challenges with bragging rights for life</span>
                </p>
                <p className="flex items-start">
                  <span className="text-cabin-400 text-2xl mr-3">🔥</span>
                  <span>Bonfire stories, s'mores, and late-night conversations under the stars</span>
                </p>
                <p className="flex items-start">
                  <span className="text-neon-400 text-2xl mr-3">💃</span>
                  <span>Dance-offs, karaoke, and enough energy drinks to power a small city</span>
                </p>
              </div>
            </div>

            <motion.div
              className="glass-effect rounded-3xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <MapPin className="text-cabin-400 w-6 h-6 mr-2" />
                Location Details
              </h4>
              <p className="text-cabin-200 mb-4">
                <strong className="text-white">108 Pinecrest Lake Rd</strong><br />
                A gorgeous lakefront cabin with private beach access, multiple bedrooms, 
                and all the amenities needed for the perfect party weekend.
              </p>
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-neon-500 to-cabin-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions 🗺️
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Schedule highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Calendar className="text-neon-400 w-8 h-8 mr-3" />
                Schedule Highlights
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  className="border-l-4 border-party-400 pl-6 py-4 bg-gradient-to-r from-party-500/10 to-transparent rounded-r-lg"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-2">
                    <Clock className="text-party-400 w-5 h-5 mr-2" />
                    <span className="font-bold text-party-300">July 10th</span>
                  </div>
                  <h4 className="text-white font-semibold text-lg">2000s Prom Night! 👑</h4>
                  <p className="text-cabin-200 text-sm">Dust off those frosted tips and low-rise jeans!</p>
                </motion.div>

                <motion.div
                  className="border-l-4 border-neon-400 pl-6 py-4 bg-gradient-to-r from-neon-500/10 to-transparent rounded-r-lg"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-2">
                    <Clock className="text-neon-400 w-5 h-5 mr-2" />
                    <span className="font-bold text-neon-300">July 11th-12th</span>
                  </div>
                  <h4 className="text-white font-semibold text-lg">Lake Life & Libations 🏖️</h4>
                  <p className="text-cabin-200 text-sm">Swimming, floating, and maximum relaxation</p>
                </motion.div>

                <motion.div
                  className="border-l-4 border-cabin-400 pl-6 py-4 bg-gradient-to-r from-cabin-500/10 to-transparent rounded-r-lg"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-2">
                    <Clock className="text-cabin-400 w-5 h-5 mr-2" />
                    <span className="font-bold text-cabin-300">July 13th</span>
                  </div>
                  <h4 className="text-white font-semibold text-lg">Recovery & Recap 😎</h4>
                  <p className="text-cabin-200 text-sm">Brunch, stories, and planning next year</p>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="glass-effect rounded-2xl p-6 text-center"
              whileHover={{ rotateY: 5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-white font-bold text-lg mb-2">Mission Statement</h4>
              <p className="text-cabin-200 text-sm italic">
                "To create maximum fun, minimal drama, and memories that'll last until we're too old to remember them."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 