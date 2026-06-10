// 先把环境变量和公共配置抽离出来，方便后续修改。

// 1. 填入你的真实 API Key
process.env.OPENAI_API_KEY = "sk-TACbJg3jbxEjjaiSANsCBA1ZDyM8khqAT7moQSw9";

// 2. 填入你的专属调用地址
export const OPENAI_BASE_URL = "https://aiplatform.njsrd.com/llm/v1";
process.env.OPENAI_API_BASE = OPENAI_BASE_URL;
process.env.OPENAI_BASE_URL = OPENAI_BASE_URL;

// 3. 指定你的 Qwen 专属模型名称
export const MODEL_NAME = "qwen3.5-122b-a10b";

// 最大重试轮数，防止 Agent 陷入死循环
export const MAX_ITERATIONS = 5;
