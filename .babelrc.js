module.exports = {
  plugins: [
    "emotion",
    [
      "module-resolver",
      {
        alias: {
          "@app": "./"
        }
      }
    ]
  ],
  presets: ["next/babel", "@zeit/next-typescript/babel"]
};
