import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Pause, Camera, Video, Settings, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

const DemoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [inputSource, setInputSource] = useState('webcam')
  const [detectionMode, setDetectionMode] = useState('all')
  const [confidence, setConfidence] = useState(0.5)
  const [detections, setDetections] = useState([])
  const [stats, setStats] = useState({
    totalDetections: 0,
    violations: 0,
    compliant: 0,
    fps: 0
  })

  // Simulate detection updates
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        // Generate random detections
        const newDetections = Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, i) => ({
          id: i,
          type: ['Hardhat', 'NO-Mask', 'Safety Vest', 'NO-Hardhat', 'Person'][Math.floor(Math.random() * 5)],
          confidence: Math.random() * 0.4 + 0.6,
          x: Math.random() * 400 + 50,
          y: Math.random() * 250 + 50,
          width: Math.random() * 50 + 60,
          height: Math.random() * 40 + 50,
          isViolation: Math.random() > 0.6
        }))

        setDetections(newDetections)
        
        setStats({
          totalDetections: newDetections.length,
          violations: newDetections.filter(d => d.isViolation).length,
          compliant: newDetections.filter(d => !d.isViolation).length,
          fps: Math.floor(Math.random() * 10) + 25
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isPlaying])

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
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
              <h1 className="text-3xl font-bold text-white">Live Demo</h1>
              <p className="text-gray-300">Real-time PPE detection system</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/20 transition-colors text-white"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors text-white"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Detection Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Video Feed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Detection Feed</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
                    <span className="text-sm text-gray-300">
                      {isPlaying ? 'Live' : 'Stopped'}
                    </span>
                  </div>
                  <span className="text-sm text-gray-300">FPS: {stats.fps}</span>
                </div>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
                {/* Scanning effect */}
                {isPlaying && <div className="scan-line" />}

                {/* Detection boxes */}
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

                {/* Play button overlay */}
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

                  <select
                    value={inputSource}
                    onChange={(e) => setInputSource(e.target.value)}
                    className="px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-primary-500 focus:outline-none"
                  >
                    <option value="webcam">Webcam</option>
                    <option value="video">Video File</option>
                    <option value="ip">IP Camera</option>
                  </select>
                </div>

                <div className="text-sm text-gray-300">
                  Resolution: 1280x720
                </div>
              </div>
            </motion.div>

            {/* Configuration Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Detection Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Detection Mode
                  </label>
                  <select
                    value={detectionMode}
                    onChange={(e) => setDetectionMode(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-primary-500 focus:outline-none"
                  >
                    <option value="all">All PPE Items</option>
                    <option value="violations">Violations Only</option>
                    <option value="hardhat">Hardhat Only</option>
                    <option value="mask">Mask Only</option>
                    <option value="vest">Safety Vest Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confidence Threshold: {(confidence * 100).toFixed(0)}%
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.05"
                    value={confidence}
                    onChange={(e) => setConfidence(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Alert Settings
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-sm text-gray-300">Audio Alerts</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-sm text-gray-300">Visual Alerts</span>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Live Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Total Detections</span>
                  <span className="text-2xl font-bold text-white">{stats.totalDetections}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Violations</span>
                  <span className="text-2xl font-bold text-red-400">{stats.violations}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Compliant</span>
                  <span className="text-2xl font-bold text-green-400">{stats.compliant}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">FPS</span>
                  <span className="text-2xl font-bold text-blue-400">{stats.fps}</span>
                </div>
              </div>
            </motion.div>

            {/* Detection Classes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Detection Classes</h3>
              
              <div className="space-y-2">
                {[
                  { name: 'Hardhat', color: 'bg-green-500', count: 2 },
                  { name: 'Mask', color: 'bg-green-500', count: 1 },
                  { name: 'Safety Vest', color: 'bg-green-500', count: 1 },
                  { name: 'NO-Hardhat', color: 'bg-red-500', count: 1 },
                  { name: 'NO-Mask', color: 'bg-red-500', count: 2 },
                  { name: 'Person', color: 'bg-blue-500', count: 3 },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-sm text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-sm text-white font-medium">{item.count}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* System Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">System Info</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Model</span>
                  <span className="text-white">YOLOv8l</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">GPU</span>
                  <span className="text-green-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Memory</span>
                  <span className="text-white">2.1GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Uptime</span>
                  <span className="text-white">00:05:23</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoPage