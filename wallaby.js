module.exports = () => {
  return {
    files: ["package.json", "tsconfig.json", "src/**/*.ts"],
    tests: ["src/**/*Spec.ts"],
    env: {
      type: "node",
    },
    testFramework: "jest",
  };
};
s;
