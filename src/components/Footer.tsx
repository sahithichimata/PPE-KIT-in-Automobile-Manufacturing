import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Github, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-primary-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">PPE Detection Kit</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Advanced AI-powered Personal Protective Equipment detection system 
              for manufacturing environments. Ensuring workplace safety through 
              real-time computer vision monitoring.
            </p>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com"
                className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:contact@ppedetection.com"
                className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-2">
              {[
                'Real-time Detection',
                'Multi-PPE Recognition',
                'Instant Alerts',
                'Violation Tracking',
                'Performance Analytics',
                'Multi-source Input'
              ].map((feature) => (
                <li key={feature}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {feature}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                'Documentation',
                'API Reference',
                'Installation Guide',
                'Model Training',
                'Troubleshooting',
                'Support'
              ].map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    {resource}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm">
            © 2024 PPE Detection Kit. Built with ❤️ for workplace safety.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              License
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer