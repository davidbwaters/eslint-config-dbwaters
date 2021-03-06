/**
 *  ESLint settings for rules that deal with stylistic
 *  issues.
 */

module.exports = {
  rules: {
    // Enforce consistent spacing inside single-line blocks
    // (fixable)
    'block-spacing': ['error', 'always'],

    // Enforce consistent brace style for blocks (fixable)
    'brace-style': [
      'error',
      'stroustrup',
      {
        allowSingleLine: true
      }
    ],

    // Enforce camelcase naming convention
    camelcase: ['error', { properties: 'never' }],

    // Require or disallow trailing commas (fixable)
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],

    // Enforce consistent spacing before and after commas
    // (fixable)
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],

    // Enforce consistent comma style (fixable)
    'comma-style': ['error', 'last'],

    // Enforce at least one newline at the end of files
    // (fixable)
    'eol-last': 'error',

    // Enforce consistent indentation (fixable)
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: ['TemplateLiteral *']
      }
    ],

    // Enforce consistent spacing between keys and values in
    // object literal properties (fixable)
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],

    // Enforce consistent spacing before and after keywords
    // (fixable)
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],

    // Enforce a maximum line length
    'max-len': [
      'error',
      {
        code: 60,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],

    // Require constructor 'function' names to begin with a
    // capital letter
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false
      }
    ],

    // Require parentheses when invoking a constructor with
    // no arguments (fixable)
    'new-parens': 'error',

    // Disallow 'Array' constructors
    'no-array-constructor': 'error',

    // Disallow mixes of different operators
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: true
      }
    ],

    // Disallow mixed spaces and tabs for indentation
    // (recommended)
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow multiple empty lines (fixable)
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 1
      }
    ],

    // Disallow 'Object' constructors
    'no-new-object': 'error',

    // Disallow trailing whitespace at the end of lines
    // (fixable)
    'no-trailing-spaces': 'error',

    // Disallow whitespace before properties (fixable)
    'no-whitespace-before-property': 'error',

    // Enforce consistent spacing inside braces (fixable)
    'object-curly-spacing': ['error', 'always'],

    // Enforce placing object properties on separate lines
    // (fixable)
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true
      }
    ],

    // Enforce variables to be declared either together or
    // separately in functions (fixable)
    'one-var': [
      'error',
      {
        initialized: 'never'
      }
    ],

    // Enforce consistent linebreak style for operators
    // (fixable)
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: { '?': 'before', ':': 'before' }
      }
    ],

    // Require or disallow padding within blocks (fixable)
    'padded-blocks': [
      'error',
      {
        blocks: 'always',
        switches: 'always',
        classes: 'always'
      },
      {
        allowSingleLineBlocks: true
      }
    ],

    // Enforce the consistent use of either backticks,
    // double, or single quotes (fixable)
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],

    // Require or disallow semicolons instead of ASI
    // (fixable)
    semi: ['error', 'never'],

    // Enforce consistent spacing before and after
    // semicolons (fixable)
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],

    // Enforce consistent spacing before blocks (fixable)
    'space-before-blocks': ['error', 'always'],

    // Enforce consistent spacing before 'function'
    // definition opening parenthesis (fixable)
    'space-before-function-paren': ['error', 'never'],

    // Enforce consistent spacing inside parentheses
    // (fixable)
    'space-in-parens': ['error', 'never'],

    // Require spacing around operators (fixable)
    'space-infix-ops': 'error',

    // Enforce consistent spacing before or after unary
    // operators (fixable)
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],

    // Enforce consistent spacing after the '//' or '/*' in
    // a comment (fixable)
    'spaced-comment': 'off',

    // Require or disallow the Unicode BOM (fixable)
    'unicode-bom': ['error', 'never']
  }
}
