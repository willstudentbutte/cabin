'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Vote, Users, Sparkles } from 'lucide-react';

export default function VotingSection() {
  const [formData, setFormData] = useState({
    voterName: '',
    promKing: '',
    promQueen: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Console log the form data (no backend needed)
    console.log('Prom Royalty Vote Submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ voterName: '', promKing: '', promQueen: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cabin-900 to-neon-900 relative overflow-hidden">
      {/* Background crowns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 text-9xl">👑</div>
        <div className="absolute bottom-10 right-1/4 text-8xl">👑</div>
        <div className="absolute top-1/2 right-10 text-7xl">🏆</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Crown className="text-party-400 w-10 h-10 mr-3 animate-bounce" />
            <h2 className="text-5xl md:text-6xl font-bold gradient-text font-script">
              Elect Your Royalty
            </h2>
            <Crown className="text-neon-400 w-10 h-10 ml-3 animate-bounce" />
          </motion.div>
          
          <motion.p
            className="text-2xl text-party-300 font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Cast Your Vote: Cabin Prom King & Queen 2024!
          </motion.p>
          
          <motion.p
            className="text-xl text-cabin-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Who deserves to wear the crown? Vote for the most spirited, fun-loving, 
            and wonderfully ridiculous members of our cabin crew!
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Vote className="text-neon-400 w-8 h-8 mr-3" />
                  Your Ballot
                </h3>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-cabin-200 text-sm font-semibold mb-2">
                        Your Name (Voter)
                      </label>
                      <input
                        type="text"
                        name="voterName"
                        value={formData.voterName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cabin-800/50 border border-cabin-600 rounded-xl text-white placeholder-cabin-400 focus:border-neon-400 focus:ring-2 focus:ring-neon-400/20 transition-all duration-300"
                        placeholder="Enter your name..."
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-cabin-200 text-sm font-semibold mb-2">
                        Nominee for Prom King 👑
                      </label>
                      <input
                        type="text"
                        name="promKing"
                        value={formData.promKing}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cabin-800/50 border border-cabin-600 rounded-xl text-white placeholder-cabin-400 focus:border-party-400 focus:ring-2 focus:ring-party-400/20 transition-all duration-300"
                        placeholder="Who deserves the crown?"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-cabin-200 text-sm font-semibold mb-2">
                        Nominee for Prom Queen 👸
                      </label>
                      <input
                        type="text"
                        name="promQueen"
                        value={formData.promQueen}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cabin-800/50 border border-cabin-600 rounded-xl text-white placeholder-cabin-400 focus:border-party-400 focus:ring-2 focus:ring-party-400/20 transition-all duration-300"
                        placeholder="Who deserves the tiara?"
                        required
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full party-button text-lg py-4 relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Submit Your Vote
                        <Sparkles className="w-5 h-5 ml-2" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-neon-600 to-cabin-600"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-8"
                  >
                    <div className="text-6xl mb-4">🎉</div>
                    <h4 className="text-2xl font-bold text-white mb-2">Vote Submitted!</h4>
                    <p className="text-cabin-200">
                      Thanks for participating in the democratic process of cabin royalty! 
                      May the most fabulous win! 👑
                    </p>
                    <motion.div
                      className="flex justify-center space-x-2 mt-4 text-3xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span>👑</span>
                      <span>✨</span>
                      <span>👑</span>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Right side - Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Users className="text-party-400 w-8 h-8 mr-3" />
                  The Royal Treatment
                </h3>
                
                <div className="space-y-4 text-cabin-200">
                  <p className="flex items-start">
                    <span className="text-party-400 text-2xl mr-3">👑</span>
                    <span>Official crowns and sashes for the winners (yes, we bought actual crowns!)</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-neon-400 text-2xl mr-3">📸</span>
                    <span>Professional* photo shoot with all the 2000s props you could want</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-cabin-400 text-2xl mr-3">🥂</span>
                    <span>First drinks served by their loyal subjects (aka everyone else)</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-party-400 text-2xl mr-3">🎵</span>
                    <span>Choice of the first three songs for the dance floor</span>
                  </p>
                </div>

                <motion.div
                  className="mt-6 p-4 bg-gradient-to-r from-party-500/20 to-neon-500/20 rounded-xl border border-party-400/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-center text-cabin-200 text-sm italic">
                    <span className="text-lg">*</span> "Professional" = whoever has the steadiest hands after one drink
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="glass-effect rounded-2xl p-6 text-center"
                whileHover={{ rotateY: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-3">🗳️</div>
                <h4 className="text-white font-bold text-lg mb-2">Voting Rules</h4>
                <div className="text-cabin-200 text-sm space-y-2">
                  <p>• One vote per person (honor system)</p>
                  <p>• You can vote for yourself (we won't judge)</p>
                  <p>• Voting closes at midnight on July 10th</p>
                  <p>• Coronation happens at the peak of the party!</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 