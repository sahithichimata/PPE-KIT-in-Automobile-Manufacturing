import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Shield, Zap, Eye } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-sm font-medium text-blue-200"
          >
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Safety Monitoring
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            PPE Detection Kit
            <br />
            <span className="gradient-text">for Manufacturing</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Advanced computer vision system that detects Personal Protective Equipment 
            violations in real-time, ensuring workplace safety compliance in automobile manufacturing.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-300"
          >
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              Real-time Detection
            </div>
            <div className="flex items-center">
              <Eye className="w-5 h-5 mr-2 text-blue-400" />
              Multi-PPE Recognition
            </div>
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              Instant Alerts
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Try Live Demo
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              View Documentation
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated demo preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 relative"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mx-auto"
                    />
                    <p className="text-gray-400">Live Detection Preview</p>
                  </div>
                </div>
                
                {/* Simulated detection boxes */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="absolute top-4 left-4 detection-box compliant"
                  style={{ width: '120px', height: '80px' }}
                >
                  <div className="absolute -top-6 left-0 text-xs text-green-400 font-medium">
                    Hardhat ✓
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="absolute top-4 right-4 detection-box violation"
                  style={{ width: '100px', height: '70px' }}
                >
                  <div className="absolute -top-6 left-0 text-xs text-red-400 font-medium">
                    NO-Mask ⚠
                  </div>
                </motion.div>
                
                <div className="scan-line" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero