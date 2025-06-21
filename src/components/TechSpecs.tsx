import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, Eye, Shield, Code, Database } from 'lucide-react'

const TechSpecs = () => {
  const specs = [
    {
      category: 'AI Model',
      icon: Cpu,
      items: [
        { label: 'Framework', value: 'YOLOv8 (Ultralytics)' },
        { label: 'Model Size', value: '87.7MB' },
        { label: 'Classes', value: '10+ PPE Items' },
        { label: 'Accuracy', value: '85%+ mAP@0.5' },
      ]
    },
    {
      category: 'Performance',
      icon: Zap,
      items: [
        { label: 'FPS', value: '25-35 (Real-time)' },
        { label: 'Inference Time', value: '<50ms' },
        { label: 'Resolution', value: '640x640 - 1280x720' },
        { label: 'GPU Support', value: 'CUDA Enabled' },
      ]
    },
    {
      category: 'Detection',
      icon: Eye,
      items: [
        { label: 'Hardhat', value: '94.2% Precision' },
        { label: 'Mask', value: '94.3% Precision' },
        { label: 'Safety Vest', value: '100% Precision' },
        { label: 'Violations', value: 'Real-time Alerts' },
      ]
    },
    {
      category: 'Technology',
      icon: Code,
      items: [
        { label: 'Backend', value: 'Python + Flask' },
        { label: 'Computer Vision', value: 'OpenCV' },
        { label: 'Deep Learning', value: 'PyTorch' },
        { label: 'UI Framework', value: 'React + TypeScript' },
      ]
    }
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
            Technical
            <span className="gradient-text"> Specifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge AI and computer vision technologies for 
            industrial-grade performance and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mr-4">
                  <spec.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{spec.category}</h3>
              </div>

              <div className="space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            System Architecture
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Input Sources',
                items: ['Webcam', 'IP Camera', 'Video Files'],
                icon: '📹',
                color: 'bg-blue-500/20 border-blue-500/30'
              },
              {
                title: 'Processing',
                items: ['YOLOv8 Model', 'OpenCV', 'Real-time Analysis'],
                icon: '🧠',
                color: 'bg-purple-500/20 border-purple-500/30'
              },
              {
                title: 'Detection',
                items: ['PPE Classification', 'Violation Detection', 'Confidence Scoring'],
                icon: '🎯',
                color: 'bg-green-500/20 border-green-500/30'
              },
              {
                title: 'Output',
                items: ['Visual Alerts', 'Audio Warnings', 'Data Logging'],
                icon: '🚨',
                color: 'bg-red-500/20 border-red-500/30'
              }
            ].map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${stage.color} border rounded-xl p-6 text-center`}
              >
                <div className="text-4xl mb-4">{stage.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3">{stage.title}</h4>
                <ul className="space-y-2">
                  {stage.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Flow arrows */}
          <div className="hidden md:flex items-center justify-center mt-8 space-x-8">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-primary-400 text-2xl"
              >
                →
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechSpecs