import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faNetworkWired, 
  faDatabase, 
  faServer, 
  faBrain,
  faCheckCircle,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

const techStacks = [
  {
    category: '编排层',
    icon: faNetworkWired,
    color: 'text-blue-400',
    technologies: [
      { name: 'LangGraph', required: true, desc: '必精通' },
      { name: 'PydanticAI', required: false, desc: '结构化数据' },
      { name: 'CrewAI', required: false, desc: '多智能体' },
    ]
  },
  {
    category: '协议层',
    icon: faLayerGroup,
    color: 'text-purple-400',
    technologies: [
      { name: 'MCP', required: true, desc: '2026 行业标准' },
    ]
  },
  {
    category: '数据层',
    icon: faDatabase,
    color: 'text-green-400',
    technologies: [
      { name: 'LanceDB', required: true, desc: '嵌入式向量库' },
      { name: 'GraphRAG', required: true, desc: '知识图谱' },
      { name: 'pgvector', required: false, desc: 'PostgreSQL 扩展' },
    ]
  },
  {
    category: '工程层',
    icon: faServer,
    color: 'text-orange-400',
    technologies: [
      { name: 'Tauri 2', required: true, desc: 'Rust 高性能' },
      { name: 'Docker', required: false, desc: '容器化' },
      { name: 'OpenTelemetry', required: false, desc: '可观测性' },
    ]
  },
  {
    category: '模型层',
    icon: faBrain,
    color: 'text-pink-400',
    technologies: [
      { name: 'Function Calling', required: true, desc: '优化' },
      { name: 'Prompt Caching', required: false, desc: '性能提升' },
      { name: 'Token 成本管理', required: false, desc: '优化' },
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const TechStack = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title-custom">核心技术栈</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            在面试前，请确保你的简历中包含以下关键词
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techStacks.map((stack, index) => (
            <motion.div key={stack.category} variants={itemVariants}>
              <div className="custom-card h-full">
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon 
                    icon={stack.icon} 
                    className={`${stack.color} text-3xl`}
                  />
                  <h3 className="text-2xl font-bold text-gray-100">
                    {stack.category}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {stack.technologies.map((tech) => (
                    <div 
                      key={tech.name}
                      className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        {tech.required && (
                          <FontAwesomeIcon 
                            icon={faCheckCircle} 
                            className="text-blue-400 text-sm"
                          />
                        )}
                        <span className="text-gray-200 font-medium">{tech.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{tech.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
