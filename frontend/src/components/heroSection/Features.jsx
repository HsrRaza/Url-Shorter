/* eslint-disable no-unused-vars */

import { motion } from 'framer-motion';
import {
  Clipboard, Scissors, Share2,
  Globe, BarChart3, Clock,
  Layers, Cpu, Users, 
} from 'lucide-react';

const steps = [
  {
    title: "Paste",
    desc: "Paste your long, cumbersome URL into our secure shortener.",
    icon: <Clipboard className="text-red-500" size={28} />,
    glow: "shadow-[0_0_20px_rgba(185,28,28,0.3)]"
  },
  {
    title: "Shorten",
    desc: "Our engine generates a branded, lightning-fast link in milliseconds.",
    icon: <Scissors className="text-red-500" size={28} />,
    glow: ""
  },
  {
    title: "Share",
    desc: "Share anywhere and track every single engagement in real-time.",
    icon: <Share2 className="text-red-500" size={28} />,
    glow: ""
  }
];

const features = [
  {
    title: "Instant Short Links",
    desc: "Generate a short URL instantly using a fast and lightweight backend.",
    icon: <Scissors size={20} />
  },
  {
    title: "Custom Slugs",
    desc: "Create your own readable short links when you're logged in.",
    icon: <Globe size={20} />
  },
  {
    title: "Secure Redirects",
    desc: "Every short link safely redirects to the original destination.",
    icon: <Share2 size={20} />
  },
  {
    title: "User Dashboard",
    desc: "Manage and view all your created links in one place.",
    icon: <Layers size={20} />
  },
  {
    title: "Click Tracking",
    desc: "Track how many times your links have been visited.",
    icon: <BarChart3 size={20} />
  },
  {
    title: "Authentication",
    desc: "Secure login system to manage personal links and custom URLs.",
    icon: <Users size={20} />
  },
  {
    title: "Fast API",
    desc: "Built with a scalable Node.js backend and optimized database queries.",
    icon: <Cpu size={20} />
  },
  {
    title: "Always Available",
    desc: "Deployed on cloud infrastructure for reliable access anytime.",
    icon: <Clock size={20} />
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Step Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Three Simple Steps</h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Shorten links in seconds</h2>
        </div>

        {/* 3-Step Glass Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 relative group ${step.glow}`}
            >
              {/* Subtle Red Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl border border-red-500/0 group-hover:border-red-500/40 transition-colors duration-500" />

              <div className="w-14 h-14 rounded-xl bg-red-950/30 flex items-center justify-center mb-6 border border-red-800/20">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Powerful Features for Every Link</h2>
          <p className="text-gray-400 text-lg">Go beyond simple shortening with our advanced toolkit.</p>
        </div>

        {/* 4-Column Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/5 hover:border-red-900/40 hover:bg-white/[0.07] transition-all cursor-default"
            >
              <div className="text-red-500 mb-4">{feature.icon}</div>
              <h5 className="font-bold mb-2">{feature.title}</h5>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}