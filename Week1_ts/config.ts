import "dotenv/config";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `缺少环境变量 ${name}。请复制 .env.example 为 .env 并填入你的配置。`,
    );
  }
  return value;
}

// 1. 从 .env 读取 API Key（不要写进代码仓库）
export const OPENAI_API_KEY = requireEnv("OPENAI_API_KEY");
process.env.OPENAI_API_KEY = OPENAI_API_KEY;

// 2. API 调用地址（非敏感，可用默认值）
export const OPENAI_BASE_URL =
  process.env.OPENAI_BASE_URL ?? "https://aiplatform.njsrd.com/llm/v1";
process.env.OPENAI_API_BASE = OPENAI_BASE_URL;
process.env.OPENAI_BASE_URL = OPENAI_BASE_URL;

// 3. 模型名称
export const MODEL_NAME = process.env.MODEL_NAME ?? "qwen3.5-122b-a10b";

// 最大重试轮数，防止 Agent 陷入死循环
export const MAX_ITERATIONS = Number(process.env.MAX_ITERATIONS ?? 5);
