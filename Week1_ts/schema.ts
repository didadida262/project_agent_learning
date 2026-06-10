import { Annotation } from "@langchain/langgraph";
import { z } from "zod";

// 1. 强制 LLM 返回的严格 JSON 结构
export const AgentCodeResponseSchema = z.object({
  thought: z
    .string()
    .describe("你对当前代码需求或上一次报错信息的深入思考与分析"),
  code: z
    .string()
    .describe(
      "完整的、可直接运行的 JavaScript 代码，不要包含任何 markdown 标记（如 ```javascript）",
    ),
});

export type AgentCodeResponse = z.infer<typeof AgentCodeResponseSchema>;

// 2. LangGraph 状态机全局共享的状态 (State)
export const GraphStateAnnotation = Annotation.Root({
  requirement: Annotation<string>,
  current_code: Annotation<string | null>({
    reducer: (_left, right) => right,
    default: () => null,
  }),
  error_message: Annotation<string | null>({
    reducer: (_left, right) => right,
    default: () => null,
  }),
  iterations: Annotation<number>({
    reducer: (_left, right) => right,
    default: () => 0,
  }),
});

export type GraphState = typeof GraphStateAnnotation.State;
