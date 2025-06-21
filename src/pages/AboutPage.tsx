import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Target, Users, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4 mb-8"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </motion.button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">About PPE Detection Kit</h1>
            <p className="text-gray-300">Advanced AI for workplace safety</p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-effect rounded-2xl p-8 mb-8"
        >
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-primary-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              To revolutionize workplace safety in manufacturing environments through 
              cutting-edge AI and computer vision technology, ensuring every worker 
              returns home safely every day.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Target,
              title: 'Precision Detection',
              description: 'Our YOLOv8-based model achieves 85%+ mAP accuracy in detecting various PPE items and violations.',
              stats: '85%+ Accuracy'
            },
            {
              icon: Users,
              title: 'Real-world Impact',
              description: 'Deployed in manufacturing facilities to protect workers and ensure compliance with safety regulations.',
              stats: '1000+ Workers Protected'
            },
            {
              icon: Award,
              title: 'Industry Recognition',
              description: 'Built with industry-standard technologies and best practices for enterprise-grade reliability.',
              stats: 'Enterprise Ready'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <feature.icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="text-primary-400 font-semibold">{feature.stats}</div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-effect rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'AI/ML',
                technologies: ['YOLOv8', 'PyTorch', 'Ultralytics', 'OpenCV']
              },
              {
                category: 'Backend',
                technologies: ['Python', 'Flask', 'NumPy', 'CVZone']
              },
              {
                category: 'Frontend',
                technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
              },
              {
                category: 'Infrastructure',
                technologies: ['CUDA', 'GPU Acceleration', 'Real-time Processing', 'Video Streaming']
              }
            ].map((stack, index) => (
              <div key={stack.category} className="text-center">
                <h3 className="text-lg font-semibold text-white mb-3">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech) => (
                    <div key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-effect rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Real-time detection of 10+ PPE classes including hardhats, masks, safety vests, and gloves</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Instant audio and visual alerts for safety violations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Support for multiple input sources: webcam, IP cameras, and video files</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Violation image capture and timestamping for compliance records</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Performance monitoring with real-time FPS and confidence scoring</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Technical Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Model Architecture</span>
                  <span className="text-white font-medium">YOLOv8 Large</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Model Size</span>
                  <span className="text-white font-medium">87.7MB</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Training Epochs</span>
                  <span className="text-white font-medium">30</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">mAP@0.5</span>
                  <span className="text-white font-medium">85.3%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Inference Speed</span>
                  <span className="text-white font-medium">25-35 FPS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage