import { resolve } from "path";

const config = {
  projectName: "robot_web",
  date: "2022-6-1",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins:
    process.env.NODE_ENV === "development"
      ? [
          "taro-plugin-compiler-optimization",
          resolve(__dirname, "plugins/minifyMainPackage.js"),
        ]
      : ["taro-plugin-compiler-optimization"],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  mini: {
    hot: true,
    miniCssExtractPluginOption: {
      ignoreOrder: true,
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    esnextModules: ["taro-ui"],
    router: {
      mode: "browser",
    },
  },
  sass: {
    resource: [resolve(__dirname, "..", "src/style/common.scss")],
  },
  alias: {
    "@/components": resolve(__dirname, "..", "src/components"),
    "@/utils": resolve(__dirname, "..", "src/utils"),
    "@/assets": resolve(__dirname, "..", "src/assets"),
    "@/img": resolve(__dirname, "..", "src/assets/img"),
    "@/model": resolve(__dirname, "..", "src/model"),
    "@/api": resolve(__dirname, "..", "src/api"),
    "@/action": resolve(__dirname, "..", "src/action"),
    "@/config": resolve(__dirname, "..", "src/config"),
    "@/stores": resolve(__dirname, "..", "src/stores"),
    "@/hooks": resolve(__dirname, "..", "src/hooks"),
    "@/packages": resolve(__dirname, "..", "src/packages"),
    "@/widget": resolve(__dirname, "..", "src/widget"),
  },
};

export default function(merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
}
