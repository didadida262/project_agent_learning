import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle, 
  faBrain, 
  faFileContract,
  faCheckCircle,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const tips = [
  {
    icon: faExclamationTriangle,
    title: '不要只展示 UI',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    content: '面试官更看重你的 Trace 图（推理链路）和 Eval 数据',
  },
  {
    icon: faBrain,
    title: '理解底层原理',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    content: '能解释清楚 Temperature, Top-P 以及 Context Window 如何影响 Agent 的决策稳定性',
  },
  {
    icon: faFileContract,
    title: '法律与安全',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    content: '了解数据脱敏和沙箱执行。绝对不要在面试中提到你会使用泄露项目的代码，仅强调你从中学习了设计模式',
  },
];

const nextSteps = [
  {
    icon: faLightbulb,
    title: '下一步建议',
    content: '尝试在你的 Private-RAG 项目中集成一个简单的 LangGraph 状态机，让它不再是"一问一答"，而是能针对复杂问题"先想、后搜、再写、最后检查"。这个过程就是你转行成功的开始。',
  },
];

const InterviewTips = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title-custom">面试避坑指南</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            避免常见错误，提升面试成功率
          </p>
        </motion.div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`custom-card h-full ${tip.borderColor} border-2`}>
                <div className="flex items-start gap-4">
                  <FontAwesomeIcon 
                    icon={tip.icon} 
                    className={`${tip.color} text-3xl flex-shrink-0`}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-100 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {tip.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="custom-card bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30 border-2">
            <div className="flex items-start gap-4">
              <motion.div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FontAwesomeIcon icon={faLightbulb} className="text-white text-xl" />
              </motion.div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-100 mb-3">
                  下一步建议
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {nextSteps[0].content}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-blue-400">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span className="font-medium">这个过程就是你转行成功的开始</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterviewTips;
