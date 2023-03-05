module.exports = {
  printWidth: 90,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
};
