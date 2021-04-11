const path = require("path");

module.exports = {
  webpack: (config, webpack) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    // разрешить компилировать файлы в node_modules
    /*
    const regexToMatch = /\.m?js$/;
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test.toString() == regexToMatch.toString()) {
        delete rule.exclude;
      }
      return rule;
    });

     */

    // Allow scss modules
    config.resolve = {
      ...config.resolve,
      extensions: [...config.resolve.extensions, ".scss"],
    };

    // Configure a SASS loader
    config.module.rules.push({
      test: /\.less$/i,
      use: ["style-loader", "css-loader", "less-loader"],
    });

    return config;
  },
};
