'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Camera, Music, Sparkles, Star } from 'lucide-react';

export default function PromSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-party-900 via-neon-900 to-cabin-900 relative overflow-hidden">
      {/* Background disco elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-4 h-4 bg-party-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-6 h-6 bg-neon-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-3 h-3 bg-cabin-400 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Crown className="text-party-400 w-12 h-12 mr-4 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-bold gradient-text font-script">
              Back to the 2000s!
            </h2>
            <Crown className="text-neon-400 w-12 h-12 ml-4 animate-pulse" />
          </motion.div>
          
          <motion.p
            className="text-2xl text-party-300 font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Prom Night Extravaganza - July 10th
          </motion.p>
          
          <motion.p
            className="text-xl text-cabin-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Get your frosted tips ready! We're traveling back to the glory days of low-rise jeans, 
            trucker hats, and velour tracksuits. Think less "elegant prom" and more "wonderfully ridiculous 2000s nostalgia."
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Costume inspo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Sparkles className="text-party-400 w-8 h-8 mr-3" />
                Costume Inspiration
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-party-300 font-bold text-lg">For the Ladies</h4>
                  <div className="space-y-2 text-cabin-200 text-sm">
                    <p>• Low-rise jeans + bedazzled belt</p>
                    <p>• Juicy velour tracksuit</p>
                    <p>• Butterfly clips galore</p>
                    <p>• Platform flip-flops</p>
                    <p>• Chunky highlights</p>
                    <p>• Body glitter (obviously)</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-neon-300 font-bold text-lg">For the Gents</h4>
                  <div className="space-y-2 text-cabin-200 text-sm">
                    <p>• Frosted tips or faux hawk</p>
                    <p>• Cargo shorts (the more pockets, the better)</p>
                    <p>• Trucker hat</p>
                    <p>• Popped collar polo</p>
                    <p>• Puka shell necklace</p>
                    <p>• Flame button-up shirt</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                className="mt-6 p-4 bg-gradient-to-r from-party-500/20 to-neon-500/20 rounded-xl border border-party-400/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-center text-cabin-200 text-sm italic">
                  🎯 <strong className="text-white">Pro Tip:</strong> The more wonderfully ridiculous, the better! 
                  We're going for authentic early 2000s energy here.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="glass-effect rounded-3xl p-6"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Camera className="text-neon-400 w-6 h-6 mr-2" />
                Photo Op Central
              </h4>
              <p className="text-cabin-200 mb-4">
                We'll have a full 2000s photo booth setup with digital cameras, disposables, 
                and all the cheesy props you remember from the era. Think peace signs, 
                duck faces, and "MySpace angles."
              </p>
              <div className="flex space-x-2 text-2xl justify-center">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >📸</motion.span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >✌️</motion.span>
                <motion.span
                  animate={{ rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >😗</motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Event details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Music className="text-neon-400 w-8 h-8 mr-3" />
                The Soundtrack
              </h3>
              
              {/* Special Guest Star Section */}
              <motion.div
                className="mb-8 p-6 bg-gradient-to-r from-party-600/30 to-neon-600/30 rounded-2xl border border-party-400/50"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <motion.div
                    className="flex items-center justify-center mb-3"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Star className="text-party-300 w-6 h-6 mr-2" />
                    <h4 className="text-2xl font-bold gradient-text">Special Guest Star</h4>
                    <Star className="text-neon-300 w-6 h-6 ml-2" />
                  </motion.div>
                  <motion.p
                    className="text-3xl font-bold text-white mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Muddy as Shakira! 🎤✨
                  </motion.p>
                  <p className="text-cabin-200 text-sm italic">
                    Get ready for those hips that don't lie! 💃
                  </p>
                </div>
              </motion.div>
              
              <div className="space-y-4">
                <p className="text-cabin-200">
                  We're curating the ultimate 2000s playlist featuring all the hits that defined the era:
                </p>
                
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Hey Ya! - OutKast",
                    "Crazy in Love - Beyoncé",
                    "In Da Club - 50 Cent",
                    "Since U Been Gone - Kelly Clarkson",
                    "Mr. Brightside - The Killers",
                    "Hips Don't Lie - Shakira"
                  ].map((song, index) => (
                    <motion.div
                      key={song}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-party-500/10 rounded-lg hover:bg-party-500/20 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-neon-400" />
                      <span className="text-cabin-200 text-sm">{song}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.p
                  className="text-center text-cabin-300 text-sm italic mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  ...and so many more bangers that'll transport you straight back to your teenage years! 🎵
                </motion.p>
              </div>
            </div>

            <motion.div
              className="glass-effect rounded-3xl p-6 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4">🕺💃</div>
              <h4 className="text-white font-bold text-lg mb-2">Dance Floor Ready?</h4>
              <p className="text-cabin-200 text-sm mb-4">
                Brush up on your signature 2000s moves: the Superman, the Dougie, 
                and don't forget the classic "bounce and point" combo!
              </p>
              <motion.div
                className="flex justify-center space-x-3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="text-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                >🕺</motion.span>
                <motion.span
                  className="text-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                >💃</motion.span>
                <motion.span
                  className="text-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                >🕺</motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 