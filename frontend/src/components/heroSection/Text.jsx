/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "motion/react"

const Text = () => {
    return (
        <>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='text-3xl md:text-5xl lg:text-[80px] leading-tight text-white/80   font-bold  mb-6 tracking-[-0.04em]'
            >
                Shorten Urls. <br className='hidden md:block' />
                <span className='text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500'>Track Performance.</span>
            </motion.h1>



            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed '
            >
                Transform long, messy links into clean, trackable short URLs in seconds. Perfect for marketers, creators, and anyone who shares links.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-sm md:text-md hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(185,28,28,0.3)]">
                    Start Shortening — It's Free
                </button>
                <span className="text-sm  text-gray-500">No credit card required</span>
            </motion.div>
        </>
    )
}

export default Text