/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "motion/react"
import { ArrowRight } from 'lucide-react'

export const Blinker = () => {
  return (
    <motion.div
    initial={{ opacity: 0 , y:20}}
    animate={{ opacity: 1 , y:0}}
    transition={{ duration: 1 }}
    className=' inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-red-950/40 backdrop-blur-md border border-red-700/30 text-red-200 text-sm mb-8   '

    >
        <span className='text-lg'>✨ 10M+ Links Shortened Monthly</span>
        
        <ArrowRight size={20} className='text-red-400'/>
        
    </motion.div>
  )
}
