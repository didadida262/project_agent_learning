import { END, StateGraph } from "@langchain/langgraph";
import { GraphStateAnnotation, type GraphState } from "./schema.js";
import { generateCodeNode, executeCodeNode } from "./nodes.js";
import { MAX_ITERATIONS } from "./config.js";

// 条件路由决策函数
function decideNextStep(state: GraphState): "generate" | "end" {
  if (state.error_message === null) {
    console.log(
      `\n[+] 成功：代码在第 ${state.iterations} 轮尝试中运行成功！`,
    );
    return "end";
  }

  if (state.iterations >= MAX_ITERATIONS) {
    console.log(
      `\n[-] 失败：已达到最大重试次数 ${MAX_ITERATIONS}，纠错失败。`,
    );
    return "end";
  }

  console.log(
    `[-] 错误：代码运行失败，准备进入第 ${state.iterations + 1} 轮自我纠错...`,
  );
  return "generate";
}

// 1. 构建图结构并注册节点
const workflow = new StateGraph(GraphStateAnnotation)
  .addNode("generate_code", generateCodeNode)
  .addNode("execute_code", executeCodeNode)
  .addEdge("__start__", "generate_code")
  .addEdge("generate_code", "execute_code")
  .addConditionalEdges("execute_code", decideNextStep, {
    generate: "generate_code",
    end: END,
  });

// 2. 编译应用
const app = workflow.compile();

// 3. 运行测试
const testRequirement =
  "写一个函数 `parseAndSum(jsonStr)`，接收一个嵌套的 JSON 字符串，" +
  "提取出里面所有的数字并求和。注意：数字可能以字符串形式存在（如 '123'），" +
  "部分 key 可能缺失，必须处理好类型转换和异常，不能崩溃。";

console.log("导入任务，开始执行 Agent...");
const initialState = { requirement: testRequirement };

const finalResult = await app.invoke(initialState);

console.log("\n================ 最终交付结果 ================");
console.log(`最终生成的代码：\n${finalResult.current_code ?? ""}`);
