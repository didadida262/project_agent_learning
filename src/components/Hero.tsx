import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faRocket, faCodeBranch, faBrain } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-950 to-purple-900/20" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FontAwesomeIcon 
                icon={faRobot} 
                className="text-6xl text-blue-400"
              />
            </motion.div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="custom-gradient-text">AI Agent 开发工程师</span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            掌握 2026 年最前沿的 Agent 技术栈，从对话到推理，从 RAG 到 Agentic RAG
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.div
              className="custom-card flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <FontAwesomeIcon icon={faCodeBranch} className="text-blue-400 text-xl" />
              <span className="text-gray-200">LangGraph</span>
            </motion.div>
            
            <motion.div
              className="custom-card flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <FontAwesomeIcon icon={faRocket} className="text-purple-400 text-xl" />
              <span className="text-gray-200">MCP 协议</span>
            </motion.div>
            
            <motion.div
              className="custom-card flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <FontAwesomeIcon icon={faBrain} className="text-pink-400 text-xl" />
              <span className="text-gray-200">GraphRAG</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 text-lg"
          >
            <p>12 周实战培训计划 · 生产级 AIOps 与评估</p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
