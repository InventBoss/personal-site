const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("flexoki_prism.css");
  eleventyConfig.addPassthroughCopy("SpaceMono-Regular.ttf");
  eleventyConfig.addPassthroughCopy("InterVariable.woff2");
  eleventyConfig.addPassthroughCopy("InterVariable-Italic.woff2");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  eleventyConfig.addPassthroughCopy("src/assets/");

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: "src",
      output: "docs", // Done as it's a default location
    },
  };
};
