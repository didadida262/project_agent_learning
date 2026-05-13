import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faExclamationTriangle, 
  faBrain,
  faCode,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free/css/all.css';

// Add icons to library
library.add(
  faCheckCircle, 
  faExclamationTriangle, 
  faBrain,
  faCode,
  faRocket
);

const CompetitiveAdvantage = () => {
  const advantages = [
    {
      icon: faCode,
      title: 'Tauri 2 + Rust 标签',
      color: 'from-orange-500 to-red-500',
      description: '极缺能写高性能端侧 AI 应用的人',
      sellingPoint: '强调你能够将 AI 逻辑下沉到 Rust 层，实现极低的内存占用和极高的安全性',
      badge: '差异化优势'
    },
    {
      icon: faRocket,
      title: '拥抱 MCP 协议',
      color: 'from-blue-500 to-cyan-500',
      description: 'Anthropic 推出的 MCP 协议已成为 2026 年的主流',
      sellingPoint: '通过标准协议让 Agent 无缝接入企业现有生态',
      badge: '行业标准'
    },
    {
      icon: faBrain,
      title: '从 RAG 转向 Agentic RAG',
      color: 'from-purple-500 to-pink-500',
      description: '不只是检索，更是智能决策',
      sellingPoint: '展示你的 Agent 如何主动决定何时需要检索、如何验证检索结果的真实性、以及检索失败后如何自我修正',
      badge: '技术升级'
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title-custom">差异化竞争优势</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            让你的简历在众多候选人中脱颖而出
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="custom-card h-full relative overflow-hidden group">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${advantage.color} text-white`}>
                    {advantage.badge}
                  </span>
                </div>

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${advantage.color} mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FontAwesomeIcon icon={advantage.icon} className="text-white text-2xl" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">
                    {advantage.description}
                  </p>

                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex items-start gap-2">
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-green-400 mt-1 flex-shrink-0"
                      />
                      <p className="text-sm text-gray-300">
                        {advantage.sellingPoint}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;
