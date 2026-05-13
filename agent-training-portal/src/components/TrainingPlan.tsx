import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faBook, 
  faTools, 
  faChartLine,
  faCheckDouble,
  faLightbulb,
  faCode,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

const phases = [
  {
    phase: 1,
    title: '从"对话"到"推理"',
    duration: '第 1-3 周',
    icon: faBrain,
    color: 'from-blue-500 to-cyan-500',
    focus: '掌握 Agent 的大脑决策机制',
    goals: [
      { title: 'ReAct 模式', desc: '深度理解 Reason + Act 机制', icon: faLightbulb },
      { title: 'LangGraph', desc: '构建带循环的非线性工作流（State Machine）', icon: faCode },
      { title: 'PydanticAI', desc: '强制模型输出 100% 准确的结构化数据（JSON）', icon: faCheckDouble },
    ],
    project: {
      title: '自我纠错的代码生成 Agent',
      desc: '能够根据编译器的报错信息自动循环修改代码',
      icon: faCode
    }
  },
  {
    phase: 2,
    title: '构建"企业级"知识大脑',
    duration: '第 4-6 周',
    icon: faBook,
    color: 'from-purple-500 to-pink-500',
    focus: '解决 Agent 的健壮性与幻觉问题',
    goals: [
      { title: 'Advanced RAG', desc: '查询转换、混合检索、重排序（Rerank）', icon: faSearch },
      { title: 'GraphRAG', desc: '利用知识图谱处理跨文档的复杂关联查询', icon: faBrain },
      { title: 'LanceDB 实战', desc: '在 Tauri 项目中实现完全本地化的向量检索', icon: faCode },
    ],
    project: {
      title: '升级 Private-RAG 项目',
      desc: '支持"多跳查询"（分析多个财报文件并对比增长率）',
      icon: faBook
    }
  },
  {
    phase: 3,
    title: '赋予 Agent 手脚',
    duration: '第 7-9 周',
    icon: faTools,
    color: 'from-orange-500 to-red-500',
    focus: '学习 2026 年最重要的 Agent 交互标准',
    goals: [
      { title: 'MCP 协议', desc: '编写自定义 MCP 服务器，连接本地数据库和 API', icon: faTools },
      { title: '多智能体协作', desc: '策划者 - 执行者 - 质检员三层架构', icon: faBrain },
      { title: 'Rust 性能调优', desc: '处理高并发任务流', icon: faCode },
    ],
    project: {
      title: '基于 MCP 协议的本地运维 Agent',
      desc: '通过自然语言管理 Docker 容器并监控系统负载',
      icon: faTools
    }
  },
  {
    phase: 4,
    title: '生产级 AIOps 与评估',
    duration: '第 10-12 周',
    icon: faChartLine,
    color: 'from-green-500 to-emerald-500',
    focus: '证明你的 Agent 真的"好用"且"可控"',
    goals: [
      { title: '可观测性', desc: '使用 LangSmith 追踪每一个 Token 的流转', icon: faChartLine },
      { title: '评估框架', desc: '使用 Ragas 或 DeepEval 量化检索准确度和推理逻辑', icon: faCheckDouble },
      { title: '成本与延迟优化', desc: '模型路由平衡速度与质量', icon: faLightbulb },
    ],
    project: {
      title: '完整测试报告',
      desc: '包含检索准确率曲线和 Token 消耗统计',
      icon: faChartLine
    }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const TrainingPlan = () => {
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
          <h2 className="section-title-custom">12 周实战培训计划</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            四个阶段，从基础到进阶，全面掌握 AI Agent 开发
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {phases.map((phase, index) => (
            <motion.div 
              key={phase.phase} 
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline line */}
              {index < phases.length - 1 && (
                <div className="absolute left-8 top-full h-8 w-0.5 bg-gradient-to-b from-gray-700 to-gray-800 hidden md:block" />
              )}

              <div className="custom-card ml-0">
                {/* Phase header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    {/* Phase icon */}
                    <motion.div
                      className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${phase.color} shadow-lg flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <FontAwesomeIcon icon={phase.icon} className="text-white text-2xl" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-gray-400">
                          {phase.duration}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${phase.color} text-white`}>
                          阶段 {phase.phase}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-100 mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-gray-400">{phase.focus}</p>
                    </div>
                  </div>
                </div>

                {/* Learning goals */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-300 mb-4">学习目标</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {phase.goals.map((goal, goalIndex) => (
                      <motion.div
                        key={goalIndex}
                        className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start gap-3">
                          <FontAwesomeIcon 
                            icon={goal.icon} 
                            className="text-blue-400 mt-1 flex-shrink-0"
                          />
                          <div>
                            <h5 className="font-semibold text-gray-200 mb-1">{goal.title}</h5>
                            <p className="text-sm text-gray-400">{goal.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Practical project */}
                <div className="p-4 bg-gradient-to-r from-gray-800/80 to-gray-800/40 rounded-lg border border-gray-700">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon 
                      icon={phase.project.icon} 
                      className="text-purple-400 mt-1 flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-1">
                        实战任务：{phase.project.title}
                      </h4>
                      <p className="text-sm text-gray-400">{phase.project.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

export default TrainingPlan;
