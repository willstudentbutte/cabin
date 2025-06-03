'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Home, Wine, Sparkles } from 'lucide-react';

const categories = [
  {
    title: "Lake Essentials",
    icon: Waves,
    color: "neon",
    items: [
      "Swimsuit (and a backup!)",
      "Towel that you don't mind getting sandy",
      "Sunscreen SPF 50+ (trust us)",
      "Floaties, tubes, & pool noodles",
      "Waterproof phone case",
      "Flip flops & water shoes"
    ]
  },
  {
    title: "Comfort Zone",
    icon: Home,
    color: "cabin",
    items: [
      "Your own pillow (non-negotiable)",
      "Comfy pajamas",
      "Change of clothes for 4 days",
      "Toiletries & personal care",
      "Phone charger",
      "Sleeping bag or sheets"
    ]
  },
  {
    title: "Libations & Sustenance",
    icon: Wine,
    color: "party",
    items: [
      "BYOB (Bring Your Own Booze) 🍺",
      "Favorite snacks to share",
      "Hangover cure of choice",
      "Reusable water bottle",
      "Late-night munchies",
      "Coffee pods (morning heroes)"
    ]
  },
  {
    title: "2000s Prom Attire",
    icon: Sparkles,
    color: "party",
    items: [
      "Low-rise jeans or velour tracksuit",
      "Butterfly clips & chunky highlights",
      "Platform shoes or sneakers",
      "Frosted eyeshadow palette",
      "Trucker hat or bandana",
      "Digital camera for authentic pics"
    ]
  }
];

export default function SurvivalKit() {
  return (
    <section className="py-20 bg-gradient-to-b from-cabin-900 to-party-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text font-script mb-6">
            Survival Kit
          </h2>
          <p className="text-xl text-cabin-200 max-w-3xl mx-auto leading-relaxed">
            Pack smart, party harder! Here's everything you need to survive and thrive 
            during our epic lakeside adventure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div
                className="glass-effect rounded-3xl p-6 h-full"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-center mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-${category.color}-400 to-${category.color}-600 mb-4 neon-glow`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold text-${category.color}-300 mb-2`}>
                    {category.title}
                  </h3>
                </motion.div>

                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (itemIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 group"
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-${category.color}-400 mt-2 flex-shrink-0`}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      <motion.span
                        className="text-cabin-200 text-sm group-hover:text-white transition-colors duration-200"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 