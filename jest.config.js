module.exports = {
  preset: "react-native",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^@/(.*)$": "<rootDir>/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  transformIgnorePatterns: ["node_modules/?!(static-container)"],
  cacheDirectory: ".jest/cache",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  clearMocks: true,
  setupFilesAfterEnv: ["./jest.setup.js"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/node_modules/**"],
  transform: {
    "^.+\\.svg$": "jest-transformer-svg",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
  },
  moduleDirectories: ["node_modules", "src"],
};
