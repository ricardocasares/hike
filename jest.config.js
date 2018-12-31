module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)sx?$",
  transform: {
    "^.+\\.(t|j)sx?$": "babel-jest"
  }
};
