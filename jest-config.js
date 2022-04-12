module.exports = {
  roots: ["<rootDir>/components"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/components/setupTests.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
};
