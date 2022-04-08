// https://prettier.io/docs/en/options.html

module.exports = {
  /** General */
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  quoteProps: 'as-needed', // prettier default
  bracketSpacing: true, // prettier default
  bracketSameLine: false, // prettier default
  arrowParens: 'always', // prettier default
  proseWrap: 'preserve', // prettier default
  singleAttributePerLine: false, // prettier default
  embeddedLanguageFormatting: 'auto', // prettier default
  // printWidth: // configured in .editorconfig->max_line_length
  // useTabs: // configured in .editorconfig->indent_size
  // tabWidth: // configured in .editorconfig->indent_style
  // endOfLine: // configured in .editorconfig->end_of_line

  /** HTML */
  htmlWhitespaceSensitivity: 'css', // prettier default

  /** JSX */
  jsxSingleQuote: false, // prettier default

  /** Vue */
  vueIndentScriptAndStyle: false, // prettier default

  /** Ruby */
  rubyArrayLiteral: true,
  rubyHashLabel: true,
  rubyModifier: true,
  rubySingleQuote: true,
  rubyToProc: false,
};
