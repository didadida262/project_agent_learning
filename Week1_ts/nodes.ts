import vm from "node:vm";
import { ChatOpenAI } from "@langchain/openai";
import { AgentCodeResponseSchema, type GraphState } from "./schema.js";
import { MODEL_NAME, OPENAI_BASE_URL } from "./config.js";

// 实例化大模型
const model = new ChatOpenAI({
  model: MODEL_NAME,
  configuration: {
    baseURL: OPENAI_BASE_URL,
  },
}).withStructuredOutput(AgentCodeResponseSchema);

// 节点一：代码生成与修正
export async function generateCodeNode(
  state: GraphState,
): Promise<Partial<GraphState>> {
  const prompt = state.error_message
    ? `你上一次编写的代码报错了。\n【错误信息】:\n${state.error_message}\n\n请结合你的思考（Thought）并彻底修复这个错误，重新输出完整可运行的代码。`
    : `请根据以下需求编写 JavaScript 代码：\n${state.requirement}`;

  const response = await model.invoke(prompt);

  return {
    current_code: response.code,
    iterations: state.iterations,
  };
}

// 节点二：代码本地动态执行
export function executeCodeNode(state: GraphState): Partial<GraphState> {
  const code = state.current_code;
  let errorInfo: string | null = null;

  try {
    // 动态执行 Agent 编写的 JavaScript 代码
    vm.runInNewContext(code ?? "", {}, { timeout: 5000 });
  } catch (error) {
    errorInfo =
      error instanceof Error ? (error.stack ?? error.message) : String(error);
  }

  return {
    error_message: errorInfo,
    iterations: state.iterations + 1,
  };
}
