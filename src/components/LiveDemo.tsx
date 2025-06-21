import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Camera, Video, AlertTriangle, CheckCircle } from 'lucide-react'

const LiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [detections, setDetections] = useState([])
  const [fps, setFps] = useState(0)
  const [alertCount, setAlertCount] = useState(0)

  // Simulate detection data
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setFps(Math.floor(Math.random() * 10) + 25)
        
        // Simulate random detections
        const newDetections = [
          {
            id: 1,
            type: 'Hardhat',
            confidence: 0.95,
            x: Math.random() * 300 + 50,
            y: Math.random() * 200 + 50,
            width: 80,
            height: 60,
            isViolation: false,
          },
          {
            id: 2,
            type: 'NO-Mask',
            confidence: 0.87,
            x: Math.random() * 300 + 200,
            y: Math.random() * 200 + 100,
            width: 70,
            height: 50,
            isViolation: true,
          },
          {
            id: 3,
            type: 'Safety Vest',
            confidence: 0.92,
            x: Math.random() * 300 + 100,
            y: Math.random() * 200 + 150,
            width: 90,
            height: 120,
            isViolation: false,
          },
        ]
        
        setDetections(newDetections)
        
        // Count violations
        const violations = newDetections.filter(d => d.isViolation).length
        if (violations > 0) {
          setAlertCount(prev => prev + violations)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isPlaying])

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
            Live Detection
            <span className="gradient-text"> Demonstration</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience real-time PPE detection in action. Click play to start the simulation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Demo Area */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Detection Feed</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
                    <span className="text-sm text-gray-300">
                      {isPlaying ? 'Live' : 'Stopped'}
                    </span>
                  </div>
                  <span className="text-sm text-gray-300">FPS: {fps}</span>
                </div>
              </div>

              {/* Video Feed Simulation */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
                </div>

                {/* Scanning line effect */}
                {isPlaying && (
                  <div className="scan-line" />
                )}

                {/* Detection boxes */}
                <AnimatePresence>
                  {isPlaying && detections.map((detection) => (
                    <motion.div
                      key={detection.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className={`absolute detection-box ${
                        detection.isViolation ? 'violation' : 'compliant'
                      }`}
                      style={{
                        left: detection.x,
                        top: detection.y,
                        width: detection.width,
                        height: detection.height,
                      }}
                    >
                      <div className="absolute -top-8 left-0 text-xs font-medium">
                        <span className={detection.isViolation ? 'text-red-400' : 'text-green-400'}>
                          {detection.type} {(detection.confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Center play button when stopped */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </motion.button>
                  
                  <div className="flex items-center space-x-2">
                    <Camera className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Webcam</span>
                  </div>
                </div>

                <div className="text-sm text-gray-300">
                  Resolution: 1280x720
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Panel */}
          <div className="space-y-6">
            {/* Detection Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Detection Stats</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Total Detections</span>
                  <span className="text-white font-semibold">{detections.length}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Violations</span>
                  <span className="text-red-400 font-semibold">
                    {detections.filter(d => d.isViolation).length}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Compliant</span>
                  <span className="text-green-400 font-semibold">
                    {detections.filter(d => !d.isViolation).length}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Alert Count</span>
                  <span className="text-yellow-400 font-semibold">{alertCount}</span>
                </div>
              </div>
            </motion.div>

            {/* Recent Alerts */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Recent Alerts</h4>
              
              <div className="space-y-3">
                {detections.filter(d => d.isViolation).map((violation, index) => (
                  <motion.div
                    key={violation.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
                  >
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-white font-medium">{violation.type}</p>
                      <p className="text-xs text-gray-400">
                        Confidence: {(violation.confidence * 100).toFixed(0)}%
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {detections.filter(d => !d.isViolation).map((compliant, index) => (
                  <motion.div
                    key={compliant.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-white font-medium">{compliant.type}</p>
                      <p className="text-xs text-gray-400">
                        Confidence: {(compliant.confidence * 100).toFixed(0)}%
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {detections.length === 0 && (
                  <p className="text-gray-400 text-sm text-center py-4">
                    No detections yet. Start the demo to see alerts.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveDemo