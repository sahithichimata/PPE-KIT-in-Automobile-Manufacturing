import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, Zap, AlertTriangle, Camera, BarChart3 } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Multi-PPE Detection',
      description: 'Detects hardhats, masks, safety vests, gloves, and more with high accuracy',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Live video processing with instant violation detection and alerts',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      icon: Zap,
      title: 'Instant Alerts',
      description: 'Audio and visual alerts triggered immediately upon violation detection',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
    },
    {
      icon: AlertTriangle,
      title: 'Violation Tracking',
      description: 'Captures and stores violation images with timestamps for compliance records',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
    },
    {
      icon: Camera,
      title: 'Multi-Source Input',
      description: 'Works with webcams, IP cameras, and pre-recorded video files',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Real-time FPS monitoring and detection confidence scoring',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-400/10',
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for
            <span className="gradient-text"> Workplace Safety</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-powered PPE detection system provides comprehensive safety monitoring 
            with advanced computer vision capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detection Classes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Detection Classes
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: 'Hardhat', status: 'compliant', color: 'bg-green-500' },
                { name: 'Mask', status: 'compliant', color: 'bg-green-500' },
                { name: 'Safety Vest', status: 'compliant', color: 'bg-green-500' },
                { name: 'Gloves', status: 'compliant', color: 'bg-green-500' },
                { name: 'Person', status: 'neutral', color: 'bg-blue-500' },
                { name: 'NO-Hardhat', status: 'violation', color: 'bg-red-500' },
                { name: 'NO-Mask', status: 'violation', color: 'bg-red-500' },
                { name: 'NO-Safety Vest', status: 'violation', color: 'bg-red-500' },
                { name: 'NO-Gloves', status: 'violation', color: 'bg-red-500' },
                { name: 'Safety Cone', status: 'neutral', color: 'bg-yellow-500' },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 p-2 rounded-lg bg-white/5"
                >
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-sm text-gray-300">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features