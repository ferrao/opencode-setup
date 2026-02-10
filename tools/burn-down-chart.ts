import { tool } from "@opencode-ai/plugin";
import path from "path";
import { fileURLToPath } from "url";

export default tool({
  description:
    "Generate a burn down chart from a data.json file with project data",
  args: {
    filePath: tool.schema
      .string()
      .describe("path to the json file with project data"),
    imagePath: tool.schema
      .string()
      .describe("path to the png file with the burn down chart"),
  },
  async execute(args) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const script = path.join(__dirname, "burn-it-down/plot.mjs");
    const result =
      await Bun.$`node ${script} ${args.filePath} ${args.imagePath} 2>&1`.text();
    return result.trim();
  },
});
