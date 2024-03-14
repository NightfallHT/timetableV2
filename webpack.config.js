import { resolve } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import TsConfigpathsPlugin from "tsconfig-paths-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: {
    index: "./src/index.ts",
    settings: "./src/settings.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    plugins: [new TsConfigpathsPlugin()],
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist"),
  },
};
