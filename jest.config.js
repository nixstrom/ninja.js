const config = {
	roots: ["<rootDir>"],
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	moduleDirectories: ["node_modules", "src"],
	moduleFileExtensions: ["js", "jsx", "json"],
	transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
	transform: {
		"^.+\\.(js|jsx)$": [
			"babel-jest",
			{ presets: ["@babel/preset-env", "@babel/preset-react"] },
		],
		"^.+\\.css$": "<rootDir>/__mocks__/styleMock.js",
	},
};
export default config;
