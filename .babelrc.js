module.exports = {
  plugins: [
    "emotion",
    [
      "module-resolver",
      {
        root: "./",
        alias: {
          "@app": "./"
        }
      }
    ],
    "inline-dotenv"
  ],
  presets: ["next/babel", "@zeit/next-typescript/babel"]
};
