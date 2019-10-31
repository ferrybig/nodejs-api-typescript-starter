module.exports = () => {
  return {
    files: ["package.json", "tsconfig.json", "src/**/*.ts"],
    env: {
      type: "node",
    },
    testFramework: "jest",
  };
};
s;
