module.exports = {
  root: true,
  env: {
    amd: true,
    es6: true,
    es2020: true,
    node: true,
    browser: true,
    serviceworker: true,
  },

  globals: {
    browser: 'readonly',
    JSX: 'readonly',
  },

  extends: ['airbnb', 'eslint:recommended'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      objectLiteralDuplicateProperties: false,
    },
    requireConfigFile: false,
    allowImportExportEverywhere: true,
    projects: './tsconfig.config',
  },

  plugins: ['react', 'react-hooks', 'import'], // Warn about unused eslint-disable and eslint-disable-line comments

  reportUnusedDisableDirectives: true,

  settings: {
    'react': {
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version, default to the latest React stable release, needed also for react/no-deprecated
      linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
    }, // Avoid the copious amount of fs.statSync/module parse calls required to correctly report errors
    'import/cache': 100, // File extensions that will be parsed as modules and inspected for exports
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'], // Let imports in js files parse ts files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    }, // Import resolvers
    'import/resolver': {
      node: {
        moduleDirectory: 'node_modules',
      },
    },
    'testing-library/utils-module': '@test',
  },

  rules: {
    'strict': [2, 'never'],

    'arrow-body-style': [0, 'as-needed', { requireReturnForObjectLiteral: false }], // require parens in arrow function arguments // handled by #prettier. this becomes optional as upgrade to TypeScript will require us to have type metadata in function signature
    'arrow-parens': [0, 'as-needed'], // require space before/after arrow function's arrow, handled by #prettier.
    'arrow-spacing': [0, { before: true, after: true }], // require trailing commas in multiline object literals
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ], // verify super() callings in constructors
    'constructor-super': 0, // enforce the spacing around the * in generator functions // handled by #prettier. This is non-overridable opinion of prettier, stars will have no spaces around them in generator function
    'generator-star-spacing': [
      0,
      {
        before: false,
        after: true,
        method: { before: true, after: true },
      },
    ], // disallow modifying variables of class declarations
    'no-class-assign': 2, // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 0, // disallow modifying variables that are declared using const
    'no-const-assign': 2, // disallows expressions where the operation doesn't affect the value.
    'no-constant-binary-expression': 2, // disallow duplicate class members
    'no-dupe-class-members': 2, // disallow importing from the same path more than once. Use 'import/no-duplicates' instead of this
    'no-duplicate-imports': 0, // disallow symbol constructor
    'no-new-symbol': 2, // disallow specified names in exports
    'no-restricted-exports': 0, // disallow specific globals
    'no-restricted-globals': 0, // disallow specific imports
    'no-restricted-imports': 0, // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 0, // Require let or const instead of var
    'no-var': 2, // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': [2, { enforceForClassMembers: true }], // disallow unnecessary constructor
    'no-useless-constructor': 2, // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 2, // require method and property shorthand syntax for object literals
    'object-shorthand': [2, 'always', { avoidQuotes: true }], // suggest using arrow functions as callbacks
    'prefer-arrow-callback': [2, { allowNamedFunctions: true }], // suggest using of const declaration for variables that are never modified after declared // destructuring:all means if some variable within destructuring is modified later(let), // even if others never(const), whole destructuring can be defined as let
    'prefer-const': [2, { destructuring: 'all', ignoreReadBeforeAssign: true }], // require destructuring from arrays and/or objects
    'prefer-destructuring': 0, // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 2, // Suggest using the spread operator instead of .apply()
    'prefer-spread': 2, // suggest using Reflect methods where applicable
    'prefer-reflect': 0, // use rest parameters instead of arguments
    'prefer-rest-params': 2, // suggest using template literals instead of string concatenation
    'prefer-template': 2, // disallow generator functions that do not have yield
    'require-yield': 0, // import sorting
    'sort-imports': 0, // require symbol descriptions
    'symbol-description': 2, // enforce usage of spacing in template strings, handled by #prettier
    'template-curly-spacing': 0, // enforce spacing around the * in yield* expressions, handled by #prettier
    'yield-star-spacing': [0, 'after'] /** Best Practices section http://eslint.org/docs/rules/#best-practices **/, // enforces getter/setter pairs in objects

    'accessor-pairs': 0, // enforces return statements in callbacks of array's methods
    'array-callback-return': [2, { allowImplicit: true, checkForEach: false }], // treat var statements as if they were block scoped
    'block-scoped-var': 0, // enforce that class methods utilize this
    'class-methods-use-this': 0, // specify the maximum cyclomatic complexity allowed in a program
    'complexity': [0, 11], // require return statements to either always or never specify values
    'consistent-return': 0, // specify curly brace conventions for all control statements
    'curly': [2, 'all'], // require default case in switch statements
    'default-case': 0, // enforce default clauses in switch statements to be last
    'default-case-last': 2, // enforce default parameters to be last
    'default-param-last': 0, // encourages use of dot notation whenever possible
    'dot-notation': 2, // enforces consistent newlines before or after dots
    'dot-location': [2, 'property'], // require the use of === and !==
    'eqeqeq': 2, // require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': [2, 'setBeforeGet'], // make sure for-in loops have an if statement
    'guard-for-in': 2, // enforce a maximum number of classes per file
    'max-classes-per-file': 0, // Denylist certain identifiers to prevent them being used
    'id-denylist': 0, // disallow the use of alert, confirm, and prompt
    'no-alert': 2, // disallow use of arguments.caller or arguments.callee
    'no-caller': 2, // disallow lexical declarations in case/default clauses
    'no-case-declarations': 0, // disallow returning value from constructor
    'no-constructor-return': 2, // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 2, // disallow else after a return in an if
    'no-else-return': [2, { allowElseIf: false }], // disallow empty functions
    'no-empty-function': [2, { allow: ['arrowFunctions'] }], // disallow empty static blocks
    'no-empty-static-block': 2, // disallow Unnecessary Labels
    'no-extra-label': 2, // disallow comparisons to null without a type-checking operator
    'no-eq-null': 2, // disallow use of eval()
    'no-eval': 2, // disallow adding to native types
    'no-extend-native': 2, // disallow unnecessary function binding
    'no-extra-bind': 2, // disallow fallthrough of case statements
    'no-fallthrough': 0, // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2, // disallow assignments to native objects or read-only global variables
    'no-global-assign': 2, // disallow the type conversions with shorter notations
    'no-implicit-coercion': [
      2,
      { boolean: true, number: true, string: true, allow: [], disallowTemplateShorthand: true },
    ], // disallow use of eval()-like methods
    'no-implied-eval': 2, // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 0, // disallow usage of __iterator__ property
    'no-iterator': 2, // disallow use of labels for anything other then loops and switches
    'no-labels': [2, { allowLoop: true, allowSwitch: false }], // disallow unnecessary nested blocks
    'no-lone-blocks': 2, // disallow creation of functions within loops
    'no-loop-func': 0, // disallow magic numbers
    'no-magic-numbers': 0, // disallow use of multiple spaces
    'no-multi-spaces': [2, { ignoreEOLComments: true }], // disallow use of multiline strings
    'no-multi-str': 2, // disallow use of new operator when not part of the assignment or comparison
    'no-new': 2, // disallow use of new operator for Function object
    'no-new-func': 2, // disallow 'new' operators with global no constructor functions,
    'no-new-native-nonconstructor': 2, // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 2, // disallow `\8` and `\9` escape sequences in string literals
    'no-param-reassign': 0, // disallow use of process.env
    'no-process-env': 0, // disallow usage of __proto__ property
    'no-proto': 2, // disallow declaring the same variable more then once
    'no-redeclare': [2, { builtinGlobals: true }], // disallow certain properties on certain objects
    'no-restricted-properties': [0, [{ object: '_', property: 'chain' }]], // disallow use of assignment in return statement
    'no-return-assign': 0, // disallow unnecessary return await
    'no-return-await': 2, // disallow use of `javascript:` urls.
    'no-script-url': 2, // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2, // disallow use of comma operator
    'no-sequences': 2, // restrict what can be thrown as an exception
    'no-throw-literal': 2, // disallow unmodified conditions of loops // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 2, // disallow usage of expressions in statement position
    'no-unused-expressions': [
      2,
      { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false, enforceForJSX: true },
    ], // disallow unused labels
    'no-unused-labels': 2, // disallow unnecessary .call() and .apply()
    'no-useless-call': 0, // disallow unnecessary catch clauses
    'no-useless-catch': 2, // Disallow unnecessary escape usage
    'no-useless-escape': 2, // Disallow redundant return statements
    'no-useless-return': 0, // disallow use of void operator
    'no-void': 2, // disallow usage of configurable warning terms in comments: e.g.
    'no-warning-comments': [0, { terms: ['todo', 'fixme', 'xxx'], location: 'start' }], // disallow use of the with statement
    'no-with': 2, // enforce using named capture group in regular expression
    'prefer-named-capture-group': 0, // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 2, // disallow use of the RegExp constructor in favor of regular expression literals
    'prefer-regex-literals': 2, // require use of the second argument for parseInt()
    'radix': 2, // disallow async functions which have no await expression
    'require-await': 0, // enforce the use of u flag on RegExp
    'require-unicode-regexp': 0, // requires to declare all vars on top of their containing scope
    'vars-on-top': 0, // require immediate function invocation to be wrapped in parentheses // http://eslint.org/docs/rules/wrap-iife.html // handled by #prettier. Non-configurable opinion from prettier for iife.
    'wrap-iife': [0, 'outside', { functionPrototypeMethods: true }],
    'yoda': 2 /** Variables section http://eslint.org/docs/rules/#variables **/, // enforce or disallow variable initializations at definition

    'init-declarations': 0, // requires or disallows logical assignment operator shorthand
    'logical-assignment-operators': [2, 'always', { enforceForIfStatements: true }], // disallow deletion of variables
    'no-delete-var': 2, // disallow var and named functions in global scope
    'no-implicit-globals': 2, // disallow labels that share a name with a variable
    'no-label-var': 2, // disallow self assignment
    'no-self-assign': [2, { props: true }], // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 2, // disallow declaration of variables already declared in the outer scope
    'no-shadow': [0, { builtinGlobals: true, hoist: 'functions', allow: [] }], // disallow use of undefined when initializing variables
    'no-undef-init': 0, // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 2, // disallow use of undefined variable
    'no-undefined': 0, // disallow declaration of variables that are not used in the code
    // 'no-unused-vars': [2, { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // disallow use of variables before they are defined // Note: you must disable the base rule as it can report incorrect errors // Reference: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    'no-use-before-define': [
      2,
      { functions: false, classes: true, allowNamedExports: true },
    ] /** Possible Errors section http://eslint.org/docs/rules/#possible-errors **/, // enforce “for” loop update clause moving the counter in the right direction.

    'for-direction': 2, // enforce return statements in getters
    'getter-return': 2, // disallow using an async function as a Promise executor
    'no-async-promise-executor': 2, // disallow await inside of loops
    'no-await-in-loop': 0, // disallow comparing against -0. Use Object.is(x, -0)
    'no-compare-neg-zero': 2, // disallow assignment in conditional expressions
    'no-cond-assign': [2, 'always'], // disallow use of console
    'no-console': 0, // disallow use of constant expressions in conditions
    'no-constant-condition': [2, { checkLoops: false }], // disallow control characters in regular expressions
    'no-control-regex': 2, // disallow use of debugger
    'no-debugger': 0, // disallow duplicate arguments in functions
    'no-dupe-args': 2, // disallow duplicate conditions in if-else-if chains
    'no-dupe-else-if': 2, // Creating objects with duplicate keys in objects can cause unexpected behavior in your application
    'no-dupe-keys': 2, // disallow a duplicate case label.
    'no-duplicate-case': 2, // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 2, // disallow empty statements
    'no-empty': 2, // disallow assigning to the exception in a catch block
    'no-ex-assign': 2, // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': [2, { enforceForLogicalOperands: true }], // disallow unnecessary parentheses. // handled by #prettier. Prettier likes to wrap everything in parenthesis that is multiline
    'no-extra-parens': 0, // disallow unnecessary semicolons
    'no-extra-semi': 2, // disallow overwriting functions written as function declarations
    'no-func-assign': 2, // disallow assigning to imported bindings
    'no-import-assign': 2, // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 2, // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 2, // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 2, // disallow literal numbers that lose precision
    'no-loss-of-precision': 2, // disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 0, // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 2, // disallow returning values from Promise executor functions
    'no-promise-executor-return': 0, // disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 0, // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 2, // disallow returning values from setters
    'no-setter-return': 2, // disallow sparse arrays
    'no-sparse-arrays': 2, // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 0, // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 2, // disallow loops with a body that allows only one iteration
    'no-unreachable-loop': [2, { ignore: [] }], // disallow control flow statements in finally blocks
    'no-unsafe-finally': 2, // disallow negating the left operand of relational operators
    'no-unsafe-negation': [2, { enforceForOrderingRelations: true }], // disallow use of optional chaining in contexts where the `undefined` value is not allowed
    'no-unsafe-optional-chaining': [2, { disallowArithmeticOperators: true }], // disallow unused private class members
    'no-unused-private-class-members': 2, // disallow useless backreferences in regular expressions
    'no-useless-backreference': 2, // disallow assignments that can lead to race conditions due to usage of await or yield.
    'require-atomic-updates': 0, // disallow comparisons with the value NaN
    'use-isnan': [2, { enforceForSwitchCase: true, enforceForIndexOf: true }], // ensure JSDoc comments are valid
    'valid-jsdoc': 0, // ensure that the results of typeof are compared against a valid string
    'valid-typeof': 2, // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 2 /** Stylistic Issues section http://eslint.org/docs/rules/#stylistic-issues **/, // enforce linebreaks after opening and before closing array brackets // handled by #prettier, it will enforce the array line breaks

    'array-bracket-newline': [0, 'consistent'], // enforce spacing inside array brackets // handled by #prettier, it will enforce the array spacing
    'array-bracket-spacing': [0, 'never'], // enforce line breaks after each array element // handled by #prettier, it will decide when to break based on the printWidth option
    'array-element-newline': 0, // enforce consistent spacing inside single-line blocks // handled by #prettier
    'block-spacing': [0, 'never'], // enforce one true brace style
    'brace-style': [2, '1tbs', { allowSingleLine: false }], // require camel case names
    'camelcase': [0, { properties: 'never', ignoreDestructuring: true, allow: [] }], // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': [0, 'always', { ignoreInlineComments: true, ignoreConsecutiveComments: true }], // enforce spacing before and after comma // handled by #prettier, it will enforce correct spacing around commas
    'comma-spacing': [0, { before: false, after: true }], // enforce one true comma style
    'comma-style': [2, 'last'], // disallow padding inside computed properties // handled by #prettier, it will enforce no spacing around computed properties
    'computed-property-spacing': [0, 'never', { enforceForClassMembers: true }], // enforces consistent naming when capturing the current execution context
    'consistent-this': 0, // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2, // require or disallow spacing between function identifiers and their invocations // handled by #prettier
    'func-call-spacing': 0, // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': [2, 'always', { considerPropertyDescriptor: true, includeCommonJSModuleExports: false }], // require function expressions to have a name
    'func-names': 0, // enforces use of function declarations or expressions
    'func-style': 0, // enforce line breaks between arguments of a function call
    'function-call-argument-newline': [0, 'consistent'], // enforce consistent line breaks inside function parentheses. // currently conflicts with max-len and if argument is a function with argument on first line
    'function-paren-newline': [0, 'multiline'], // enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 0, // enforce consistent indentation // delegated to #prettier. Prettier will bring its own flavor of indentation.
    'indent': 0, // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': [2, 'prefer-double'], // enforces spacing between keys and values in object literal properties // handled by #prettier
    'key-spacing': [0, { beforeColon: false, afterColon: true }], // require a space before & after certain keywords, handled by #prettier
    'keyword-spacing': [
      0,
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ], // enforce position of line comments
    'line-comment-position': 0, // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 0, // enforces empty lines around comments
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowClassStart: true,
        allowClassEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayEnd: true,
        applyDefaultIgnorePatterns: true,
      },
    ], // require or disallow an empty line between class members
    'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }], // specify the maximum depth that blocks can be nested
    'max-depth': [0, 4], // maximum length of a line in your program // handled by #prettier. Everything that will be longer than that will be automatically wrapped.
    'max-len': 0, // enforce a maximum file length
    'max-lines': [0, { max: 300, skipBlankLines: true, skipComments: true }], // enforce a maximum number of line of code in a function
    'max-lines-per-function': [0, { max: 50, skipBlankLines: true, skipComments: true }], // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 0, // limits the number of parameters that can be used in the function declaration.
    'max-params': [0, 3], // specify the maximum number of statement allowed in a function
    'max-statements': [0, 10], // enforce a maximum number of statements allowed per line
    'max-statements-per-lines': 0, // enforce a particular style for multiline comments
    'multiline-comment-style': 0, // enforce newlines between operands of ternary expressions
    'multiline-ternary': [0, 'always-multiline'], // require a capital letter for constructors
    'new-cap': [2, { newIsCap: true, capIsNew: false }], // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2, // enforces new line after each method call in the chain to make it more readable and easy to maintain
    'newline-per-chained-call': [0, { ignoreChainWithDepth: 3 }], // disallow use of the Array constructor
    'no-array-constructor': 2, // disallow use of bitwise operators
    'no-bitwise': 0, // disallow use of the continue statement
    'no-continue': 0, // disallow comments inline after code
    'no-inline-comments': 0, // disallow if as the only statement in an else block
    'no-lonely-if': 2, // disallow mixed binary operators, handled by #prettier.
    'no-mixed-operators': 0, // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2, // disallow use of chained assignment expressions
    'no-multi-assign': [2, { ignoreNonDeclaration: true }], // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1, maxBOF: 1 }], // disallow nested ternary expressions
    'no-nested-ternary': 0, // disallow use of the Object constructor
    'no-new-object': 2, // disallow use of unary operators, ++ and --
    'no-plusplus': 0, // disallow specified syntax
    'no-restricted-syntax': 0, // disallow tabs in file
    'no-tabs': 2, // disallow the use of ternary operators
    'no-ternary': 0, // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2, // disallow dangling underscores in identifiers
    'no-unneeded-ternary': [2, { defaultAssignment: false }], // disallow whitespace before properties
    'no-whitespace-before-property': 2, // enforce the location of single-line statements
    'nonblock-statement-body-position': [2, 'beside'], // enforce consistent line breaks inside braces, handled by #prettier.
    'object-curly-newline': [0, { consistent: true }], // enforce consistent spacing inside braces // handled by #prettier, it will enforce correct spacing with bracketSpacing option
    'object-curly-spacing': [0, 'never'], // enforce placing object properties on separate lines
    'object-property-newline': 0, // allow just one var statement per function
    'one-var': [2, 'never'], // require a newline around variable declaration
    'one-var-declaration-per-line': [2, 'always'], // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 0, // enforce operators to be placed before or after line breaks // handled by #prettier. Override is done for prettier, where ternary usually goes as the first character in the new line
    'operator-linebreak': [2, 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }], // enforce padding within blocks
    'padded-blocks': [2, { blocks: 'never', classes: 'never', switches: 'never' }, { allowSingleLineBlocks: false }], // require or disallow padding lines between statements
    'padding-line-between-statements': [
      2, // Always require blank lines after directive (like 'use-strict'), except between directives
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' }, // Always require blank lines after import, except between imports
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' }, // Always require blank lines before and after every sequence of variable declarations and export
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'export'] },
      { blankLine: 'always', prev: ['const', 'let', 'var', 'export'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var', 'export'], next: ['const', 'let', 'var', 'export'] }, // Always require blank lines before and after class declaration, if, do/while, switch, try, iife
      { blankLine: 'always', prev: '*', next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try', 'iife'] },
      { blankLine: 'always', prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try', 'iife'], next: '*' }, // Always require blank lines before return statements
      { blankLine: 'always', prev: '*', next: 'return' },
    ], // disallow the use of Math.pow in favor of the ** operator
    'prefer-exponentiation-operator': 0, // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call() (prefer-object-has-own)
    'prefer-object-has-own': 2, // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    'prefer-object-spread': 2, // require quotes around object literal property names
    'quote-props': [2, 'as-needed', { keywords: false, unnecessary: false, numbers: false }], // specify whether double or single quotes should be used
    'quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }], // require identifiers to match the provided regular expression
    'id-match': 0, // enforce the location of arrow function bodies
    'implicit-arrow-linebreak': 0, // enforce spacing before and after semicolons // handled by #prettier.
    'semi-spacing': [0, { before: false, after: true }], // enforce location of semicolons
    'semi-style': [2, 'last'], // require use of semicolons where they are valid instead of ASI
    'semi': [2, 'always', { omitLastInOneLineBlock: false }], // requires object keys to be sorted
    'sort-keys': 0, // sort variables within the same declaration block
    'sort-vars': 0, // require or disallow space before blocks
    'space-before-blocks': 2, // require or disallow space before function opening parenthesis
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never', asyncArrow: 'always' }], // require or disallow spaces inside parentheses
    'space-in-parens': [2, 'never'], // require spaces around operators
    'space-infix-ops': 2, // Require or disallow spaces before/after unary operators
    'space-unary-ops': 0, // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [
      0,
      'always',
      {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
    ], // enforce spacing around colons of switch statements, handled by #prettier.
    'switch-colon-spacing': [0, { after: true, before: false }], // require or disallow spacing between template tags and their literals, handled by #prettier.
    'template-tag-spacing': [0, 'never'], // files must not begin with the Unicode Byte Order Mark (BOM)
    'unicode-bom': [2, 'never'], // require regex literals to be wrapped in parentheses
    'wrap-regex': 0 /* https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin */, // Turn them on as they're needed

    'react/boolean-prop-naming': [0, { rule: '^(is|has|can|no|auto)[A-Z]([A-Za-z0-9]?)+', validateNested: false }], // Forbid "button" element without an explicit "type" attribute
    // 'react/button-has-type': 2, // Prevent extraneous defaultProps on components
    'react/default-props-match-prop-types': [2, { allowRequiredDefaults: false }], // Enforces consistent usage of destructuring assignment in component
    'react/destructuring-assignment': 0, // Prevent missing displayName in a React component definition
    'react/display-name': [0, { ignoreTranspilerName: false }], // Forbid certain props on Components
    'react/forbid-component-props': 0, // Forbid certain props on DOM Nodes
    'react/forbid-dom-props': 0, // Forbid certain elements
    'react/forbid-elements': 0, // Forbid certain propTypes (any, array, object)
    'react/forbid-prop-types': [0, { forbid: ['any', 'array', 'object'] }], // Standardize the way function component get defined
    'react/function-component-definition': 0, // Enforce symmetric useState hook variable names
    'react/hook-use-state': 0, // Enforce sandbox attribute on iframe elements
    'react/iframe-missing-sandbox': 0, // Forbid foreign propTypes
    'react/forbid-foreign-prop-types': 2, // Prevent using this.state inside this.setState
    'react/no-access-state-in-setstate': 2, // Prevent adjacent inline elements not separated by whitespace
    'react/no-adjacent-inline-elements': 0, // Prevent using Array index in key props
    'react/no-array-index-key': 0, // Lifecycle methods should be methods on the prototype, not class fields
    'react/no-arrow-function-lifecycle': 2, // Prevent passing children as props
    'react/no-children-prop': 0, // Prevent usage of dangerous JSX properties
    'react/no-danger': 0, // Prevent using children and the dangerouslySetInnerHTML prop at the same time
    'react/no-danger-with-children': 2, // Prevent usage of deprecated methods
    'react/no-deprecated': 2, // Prevent usage of setState in componentDidMount // Updating the state after a component mount will trigger a second render() call and leads to property/layout thrashing // disallow-in-func
    'react/no-did-mount-set-state': [2], // Prevent usage of setState in componentDidUpdate // Updating the state after a component update will trigger a second render() call and leads to property/layout thrashing
    'react/no-did-update-set-state': [2, 'disallow-in-func'], // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2, // Prevent usage of findDOMNode // Facebook will eventually deprecate findDOMNode as it blocks certain improvements in React in the future
    'react/no-find-dom-node': 2, // Forbid attribute with an invalid values`
    'react/no-invalid-html-attribute': 2, // isMounted is an anti-pattern, is not available when using ES6 classes, and it is on its way to being officially deprecated
    'react/no-is-mounted': 2, // Prevent multiple component definition per file
    'react/no-multi-comp': [2, { ignoreStateless: true }], // Enforces the absence of a namespace in React elements, such as with svg:circle, as they are not supported in React
    'react/no-namespace': 2, // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-redundant-should-component-update': 2, // Prevent usage of the return value of React.render
    'react/no-render-return-value': 2, // Prevent usage of setState
    'react/no-set-state': 0, // Prevent common casing typos
    'react/no-typos': 2, // Prevent using string references
    'react/no-string-refs': [2, { noTemplateLiterals: true }], // Prevent using this in stateless functional components
    'react/no-this-in-sfc': 2, // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 0, // Prevent usage of unknown DOM property
    'react/no-unknown-property': 2, // Prevent usage of UNSAFE_ methods
    'react/no-unsafe': 2, // Prevent creating unstable components inside components
    'react/no-unstable-nested-components': [2, { allowAsProps: true }], // Prevent declaring unused methods of component class // Disable, since we have methods/props on classes that are used on ref instances from other components
    'react/no-unused-class-component-methods': 0, // Prevent definitions of unused prop types
    'react/no-unused-prop-types': 0, // Covered by flow // discovers state fields in a React component and warns if any of them are never read
    'react/no-unused-state': 0, // Covered by flow // Prevent usage of setState in componentWillUpdate. We don't allow it
    'react/no-will-update-set-state': 0, // Require ES6 class declarations over React.createClass
    'react/prefer-es6-class': [0, 'always'], // Prefer exact proptype definitions
    'react/prefer-exact-props': 2, // Enforce that props are read-only
    'react/prefer-read-only-props': 0, // Require stateless functions when not using lifecycle methods, setState or ref
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }], // Prevent missing props validation in a React component definition. Covered by flow
    'react/prop-types': [0, { ignore: [], skipUndeclared: true, customValidators: [] }], // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 0, // Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 0, // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': [0, { allowDecorators: ['customDecorators'] }], // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 2, // Prevent extra closing tags for components without children
    'react/self-closing-comp': [2, { component: true, html: true }], // Enforce component methods order
    'react/sort-comp': [
      2,
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'instance-methods',
          'lifecycle',
          'setters',
          'getters',
          '/^(get|set)(?!(ChildContext$)).+$/',
          '/^save.+$/',
          '/^handle.+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ], // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': [
      0,
      {
        ignoreCase: false,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ], // Enforce the state initialization style to be either in a constructor or with a class property
    'react/state-in-constructor': 0, // Enforces where React component static properties should be positioned
    'react/static-property-placement': [2, 'static public field'], // Enforce style prop value being an object
    'react/style-prop-object': [2, { allow: [] }], // Prevent void DOM elements (e.g. <img/>, <br/>) from receiving children
    'react/void-dom-elements-no-children': 2 /** React JSX section https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules **/, // Enforce boolean attributes notation in JSX

    'react/jsx-boolean-value': [2, 'never'], // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    'react/jsx-child-element-spacing': 0, // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': [0, 'line-aligned'], // Validate closing tag location in JSX
    'react/jsx-closing-tag-location': 2, // Enforce or disallow newlines inside of curly braces in JSX attributes and expressions
    'react/jsx-curly-newline': [0, { multiline: 'consistent', singleline: 'consistent' }], // Enforce or disallow spaces inside of curly braces in JSX attributes, handled by #prettier.
    'react/jsx-curly-spacing': [
      0,
      {
        when: 'never',
        children: true,
        attributes: true,
        allowMultiline: true,
        spacing: { objectLiterals: 'never' },
      },
    ], // Enforce or disallow spaces around equal signs in JSX attributes, handled by #prettier.
    'react/jsx-equals-spacing': [0, 'never'], // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }], // Configure the position of the first property
    'react/jsx-first-prop-new-line': [0, 'multiline-multiprop'], // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': [
      2,
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: false,
      },
    ], // Validate JSX indentation. // handled by #prettier. Prettier will do indentation for jsx syntax.
    'react/jsx-indent': 0, // Validate props indentation in JSX
    'react/jsx-indent-props': [2, 'first'], // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 0, // Validate JSX maximum depth
    'react/jsx-max-depth': [0, { max: 10 }], // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': [0, { maximum: 1, when: 'multiline' }], // Enforce a new line after jsx elements and expressions (fixable)
    'react/jsx-newline': 0, // Prevent usage of .bind() and arrow functions in JSX props // A bind call or arrow function in a JSX prop creates a brand new function on every single render // This is bad for performance and cause unnecessary re-rerenders // if child component is pure or contains shouldComponentUpdate hook
    // 'react/jsx-no-bind': [
    //   2,
    //   {
    //     ignoreRefs: false,
    //     ignoreDOMComponents: false,
    //     allowArrowFunctions: false,
    //     allowBind: false,
    //   },
    // ],
    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 2, // Prevents JSX context provider values from taking values that will cause needless rerenders.
    'react/jsx-no-constructed-context-values': 2, // Creating JSX elements with duplicate props can cause unexpected behavior in your application
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }], // Prevent problematic leaked values from being rendered
    'react/jsx-no-leaked-render': [0, { validStrategies: ['ternary', 'coerce'] }], // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 0, // Forbid javascript: URLs
    'react/jsx-no-script-url': [
      2,
      [
        { name: 'Link', props: ['href', 'to'] },
        { name: 'Button', props: ['link'] },
      ],
    ], // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 0, // Enforce curly braces or disallow unnecessary curly braces in JSX
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }], // Enforce shorthand or standard form for React fragments
    'react/jsx-fragments': [2, 'syntax'], // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 2, // Disallow unnecessary fragments
    'react/jsx-no-useless-fragment': 2, // One JSX Element Per Line
    'react/jsx-one-expression-per-line': 0, // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 2, // Disallow multiple spaces between inline JSX props
    'react/jsx-props-no-multi-spaces': 2, // Disallow JSX props spreading
    'react/jsx-props-no-spreading': 0, // Enforce default props alphabetical sorting
    'react/jsx-sort-default-props': 0, // Enforce props alphabetical sorting
    'react/jsx-sort-props': [
      0,
      {
        ignoreCase: false,
        reservedFirst: true,
        callbacksLast: false,
        shorthandFirst: true,
        noSortAlphabetically: true,
      },
    ], // Validate whitespace in and around the JSX opening and closing bracket
    'react/jsx-tag-spacing': [
      0,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'never',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-uses-react': 0,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': [
      0,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: false,
        prop: 'parens-new-line',
      },
    ] /** Hooks analysis https://reactjs.org/docs/hooks-rules.html **/,

    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'import/no-unresolved': [2, { caseSensitive: true, caseSensitiveStrict: true, commonjs: true, amd: false }], // Ensure named imports correspond to a named export in the remote file
    'import/named': 2, // Ensure a default export is present, given a default import
    'import/default': 2, // Ensure imported namespaces contain dereferenced properties as they are dereferenced
    'import/namespace': [2, { allowComputed: true }], // Forbid import of modules using absolute paths
    'import/no-absolute-path': [2, { esmodule: true, commonjs: true, amd: false }], // Forbid require() calls with expressions (We use it for intl, svg icons)
    'import/no-dynamic-require': 0, // Prevent importing the submodules of other modules
    'import/no-internal-modules': 0, // Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 0, // Forbid a module from importing itself
    'import/no-self-import': 2, // Forbid a module from importing a module with a dependency path back to itself
    'import/no-cycle': 0, // Forbid useless path segments
    'import/no-useless-path-segments': [2, { noUselessIndex: true }], // Forbid importing modules from parent directories
    'import/no-relative-parent-imports': 0, // Prevent importing packages through relative paths
    'import/no-relative-packages': 0,
    'import/no-unused-modules': [0, { missingExports: true, unusedExports: true }],
    'import/export': 2, // Report use of exported name as identifier of default export
    'import/no-named-as-default': 0, // Report use of exported name as property of default export
    'import/no-named-as-default-member': 2, // Report imported names marked with @deprecated documentation tag
    'import/no-deprecated': 0, // Forbid the use of extraneous packages, allow devDependencies
    'import/no-mutable-exports': 2 /** Import Module systems https://github.com/benmosher/eslint-plugin-import#rules **/, // Report potentially ambiguous parse goal
    'import/unambiguous': 0, // Report CommonJS require calls and module.exports or exports.*
    'import/no-commonjs': 0, // Report AMD require and define calls
    'import/no-amd': 0, // No Node.js builtin modules. Allow in general, forbid in ./app
    'import/no-nodejs-modules': 0, // Forbid imports with CommonJS exports
    'import/no-import-module-exports': 0 /** Import Style guide https://github.com/benmosher/eslint-plugin-import#rules **/, // Ensure all imports appear before other statements
    'import/first': 2, // Ensure all exports appear after other statements
    'import/exports-last': 0, // Report repeated import of the same module in multiple places
    'import/no-duplicates': 2, // Report namespace imports
    'import/no-namespace': 0, // Ensure consistent use of file extension within the import path. Use extensions except .js/jsx
    // 'import/extensions': [2, 'always', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }], // Enforce a convention in module import order.
    'import/order': [
      2,
      {
        'groups': [],
        'newlines-between': 'ignore',
        'alphabetize': { order: 'ignore', caseInsensitive: true },
      },
    ], // Enforce a newline after import statements. 'padding-line-between-statements' handles this for us
    'import/newline-after-import': 0, // Prefer a default export if module exports a single name
    'import/prefer-default-export': 0, // Limit the maximum number of dependencies a module can have
    'import/max-dependencies': 0, // Forbid unassigned imports
    'import/no-unassigned-import': 0, // Forbid named default exports
    'import/no-named-default': 0, // Forbid default exports
    'import/no-default-export': 0, // Forbid named exports
    'import/no-named-export': 0, // Forbid anonymous values as default exports
    'import/no-anonymous-default-export': 0, // Prefer named exports to be grouped together in a single export declaration
    'import/group-exports': 0, // Enforce a leading comment with the webpackChunkName for dynamic imports
    'import/dynamic-import-chunkname': 0, // Improve regexes by making them shorter, consistent, and safer. (fixable)
  }, // Override rules in some folders here as opposed to having separate .eslintrc files in those folders due to the WebStorm issue // https://youtrack.jetbrains.com/issue/WEB-45381#focus=Comments-27-4299974.0-0

  overrides: [
    {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [
          './tsconfig.json', // This setting is required if you want to use rules which require type information
          './tsconfig.jest.json',
        ],
        warnOnUnsupportedTypeScriptVersion: true,
      },

      plugins: ['@typescript-eslint'],

      files: ['**/*.ts?(x)', '**/*.d.ts'],
      rules: {
        'no-use-before-define': 0, // Handled by typescript.config.json
        'no-unused-vars': 0, // Handled by @typescript-eslint/no-dupe-class-members
        'no-dupe-class-members': 0, // Handled by @typescript-eslint/lines-between-class-members
        'lines-between-class-members': 0, // Handled by @typescript-eslint/no-implied-eval
        'no-implied-eval': 0, // Handled by @typescript-eslint/no-array-constructor
        'no-array-constructor': 0, // Handled by @typescript-eslint/dot-notation
        'dot-notation': 0, // Handled by @typescript-eslint/no-throw-literal
        'no-throw-literal': 0, // Handled by @typescript-eslint/no-useless-constructor
        'no-useless-constructor': 0, // Handled by @typescript-eslint/no-extra-semi
        'no-extra-semi': 0, // Handled by @typescript-eslint/func-call-spacing
        'func-call-spacing': 0, // Handled by @typescript-eslint/no-loss-of-precision
        'no-loss-of-precision': 0, // Handled by @typescript-eslint/brace-style
        'brace-style': 0, // Handled by @typescript-eslint/no-redeclare
        'no-redeclare': 0, // Disable to allow global declaration
        'prefer-object-has-own': 0, // Disable some imports rules because tsc can check it instead // and also because eslint-import can't resolve *.d.ts ambient/augmented modules // see: https://github.com/alexgorbatchev/eslint-import-resolver-typescript/issues/72

        'import/no-unresolved': 0,
        'import/named': 0,
        'import/default': 0 /** @typescript-eslint rules */, // disallow use of variables before they are defined

        '@typescript-eslint/no-use-before-define': [2, { functions: false, classes: true }], // disallow duplicate class members
        '@typescript-eslint/no-dupe-class-members': 2, // require or disallow an empty line between class members
        '@typescript-eslint/lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }], // disallow use of eval()-like methods
        '@typescript-eslint/no-implied-eval': 2, // disallow use of the Array constructor
        '@typescript-eslint/no-array-constructor': 2, // encourages use of dot notation whenever possible
        '@typescript-eslint/dot-notation': 2, // restrict what can be thrown as an exception
        '@typescript-eslint/no-throw-literal': 2, // disallow unnecessary constructor
        '@typescript-eslint/no-useless-constructor': 2, // disallow unnecessary semicolons
        '@typescript-eslint/no-extra-semi': 2, // require or disallow spacing between function identifiers and their invocations
        '@typescript-eslint/func-call-spacing': 2, // disallow literal numbers that lose precision
        '@typescript-eslint/no-loss-of-precision': 2, // Enforce consistent brace style for blocks
        '@typescript-eslint/brace-style': [2, '1tbs', { allowSingleLine: false }], // Require that member overloads be consecutive

        '@typescript-eslint/adjacent-overload-signatures': 2, // Requires using either T[] or Array<T> for arrays
        '@typescript-eslint/array-type': [2, { default: 'array', readonly: 'array' }], // Disallows awaiting a value that is not a Thenable
        '@typescript-eslint/await-thenable': 0, // Bans “// @ts-ignore” comments from being used
        '@typescript-eslint/ban-ts-ignore': 0, // Bans specific types from being used
        '@typescript-eslint/ban-types': [
          2,
          {
            types: {
              Array: null,
              Object: 'Use {} instead',
              String: {
                message: 'Use string instead',
                fixWith: 'string',
              },
            },
          },
        ], // Enforce camelCase naming convention
        '@typescript-eslint/camelcase': 0, // Require PascalCased class and interface names
        '@typescript-eslint/class-name-casing': 0, // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
        '@typescript-eslint/consistent-generic-constructors': [2, 'constructor'], // Enforces consistent usage of type assertions
        '@typescript-eslint/consistent-type-assertions': [
          2,
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
        ], // Consistent with type definition either interface or type // Type and interface have different unique abilities, we should let users decide
        '@typescript-eslint/consistent-type-definitions': [0, 'interface'], // Require explicit return types on functions and class methods
        '@typescript-eslint/explicit-function-return-type': [
          0,
          {
            // if true, only functions which are part of a declaration will be checked
            allowExpressions: true, // if true, type annotations are also allowed on the variable of a function expression rather than on the function directly
            allowTypedFunctionExpressions: true, // if true, functions immediately returning another function expression will not be checked
            allowHigherOrderFunctions: true,
          },
        ], // Require explicit accessibility modifiers on class properties and methods
        '@typescript-eslint/explicit-member-accessibility': [
          2,
          {
            accessibility: 'no-public',
            overrides: {},
          },
        ], // Enforces naming conventions for class members by visibility
        '@typescript-eslint/generic-type-naming': 0, // Enforce consistent indentation
        '@typescript-eslint/indent': 0, // Require that interface names should or should not prefixed with I
        '@typescript-eslint/interface-name-prefix': 0, // Require a specific member delimiter style for interfaces and type literals
        '@typescript-eslint/member-delimiter-style': 0, // Enforces naming conventions for class members by visibility
        '@typescript-eslint/member-naming': 0, // Require a consistent member declaration order
        '@typescript-eslint/member-ordering': 0, // Disallow empty functions
        '@typescript-eslint/no-empty-function': 0, // Disallow the declaration of empty interfaces
        '@typescript-eslint/no-empty-interface': 0, // Disallow usage of the any type
        '@typescript-eslint/no-explicit-any': [2, { fixToUnknown: true, ignoreRestArgs: true }], // Disallow unnecessary parentheses
        '@typescript-eslint/no-extra-parens': 0, // Forbids the use of classes as namespaces
        '@typescript-eslint/no-extraneous-class': 0, // Requires Promise-like values to be handled appropriately
        '@typescript-eslint/no-floating-promises': 0, // Disallow iterating over an array with a for-in loop
        '@typescript-eslint/no-for-in-array': 0, // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
        '@typescript-eslint/no-inferrable-types': 2, // Disallows magic numbers
        '@typescript-eslint/no-magic-numbers': 0, // Enforce valid definition of new and constructor
        '@typescript-eslint/no-misused-new': 2, // Avoid using promises in places not designed to handle them
        '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: false, checksConditionals: true }], // Disallow the use of custom TypeScript modules and namespaces
        '@typescript-eslint/no-namespace': 2, // Disallows non-null assertions using the ! postfix operator (Replaced by the optional chaining?)
        '@typescript-eslint/no-non-null-assertion': 0, // Disallow the use of parameter properties in class constructors
        '@typescript-eslint/no-parameter-properties': 0, // Disallows invocation of require()
        '@typescript-eslint/no-require-imports': 2, // Disallow aliasing this
        '@typescript-eslint/no-this-alias': [2, { allowDestructuring: true }], // Disallow the use of type aliases
        '@typescript-eslint/no-type-alias': 0, // Warns when a namespace qualifier is unnecessary
        '@typescript-eslint/no-unnecessary-qualifier': 2, // Warns if an explicitly specified type argument is the default for that type parameter
        '@typescript-eslint/no-unnecessary-type-arguments': 2, // Warns if a type assertion does not change the type of an expression
        '@typescript-eslint/no-unnecessary-type-assertion': 2, // Disallow unused variables
        '@typescript-eslint/no-unused-vars': 0, // Disallows the use of require statements except in import statements
        '@typescript-eslint/no-var-requires': 0, // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
        '@typescript-eslint/prefer-for-of': 0, // Use function types instead of interfaces with call signatures
        '@typescript-eslint/prefer-function-type': 0, // Enforce includes method over indexOf method // Disable as long as we support IE without polyfilling
        '@typescript-eslint/prefer-includes': 0, // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
        '@typescript-eslint/prefer-namespace-keyword': 0, // Requires that private members are marked as readonly if they're never modified outside of the constructor
        '@typescript-eslint/prefer-readonly': 0, // Prefer RegExp#exec() over String#match() if no global flag is provided
        '@typescript-eslint/prefer-regexp-exec': 0, // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings // Disable as long as we use indexOf === 0 for performance reasons
        '@typescript-eslint/prefer-string-starts-ends-with': 0, // Requires any function or method that returns a Promise to be marked async
        '@typescript-eslint/promise-function-async': 0, // Enforce the consistent use of either backticks, double, or single quotes
        '@typescript-eslint/quotes': 0, // Enforce giving compare argument to Array#sort
        '@typescript-eslint/require-array-sort-compare': 0, // Disallow async functions which have no await expression
        '@typescript-eslint/require-await': 0, // When adding two variables, operands must both be of type number or of type string
        '@typescript-eslint/restrict-plus-operands': 0, // Require or disallow semicolons instead of ASI
        '@typescript-eslint/semi': 0, // Restricts the types allowed in boolean expressions
        '@typescript-eslint/strict-boolean-expressions': 0, // Sets preference level for triple slash directives versus ES6-style import declarations
        '@typescript-eslint/triple-slash-reference': 0, // Require consistent spacing around type annotations
        '@typescript-eslint/type-annotation-spacing': 0, // Requires type annotations to exist
        '@typescript-eslint/typedef': 0, // Enforces unbound methods are called with their expected scope
        '@typescript-eslint/unbound-method': 0, // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
        '@typescript-eslint/unified-signatures': 0, // Ensures that literals on classes are exposed in a consistent style
        '@typescript-eslint/class-literal-property-style': 0, // Disallow extra non-null assertion
        '@typescript-eslint/no-extra-non-null-assertion': 0, // Enforce the usage of the nullish coalescing operator instead of logical chaining
        '@typescript-eslint/prefer-nullish-coalescing': 0, // require or disallow initialization in variable declarations
        '@typescript-eslint/init-declarations': 0, // Enforces consistent spacing before function parenthesis
        '@typescript-eslint/space-before-function-paren': 0, // Prefer usage of as const over literal type
        '@typescript-eslint/prefer-as-const': 0, // Flags unnecessary equality comparisons against boolean literals
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0, // Disallow non-null assertion in locations that may be confusing
        '@typescript-eslint/no-confusing-non-null-assertion': 0, // Enforces using a particular method signature syntax.
        '@typescript-eslint/method-signature-style': 0, // Disallow variable declarations from shadowing variables declared in the outer scope
        '@typescript-eslint/no-shadow': 0, // Disallows using a non-null assertion after an optional chain expression
        '@typescript-eslint/no-non-null-asserted-optional-chain': 0, // Enforce consistent spacing before and after keywords
        '@typescript-eslint/keyword-spacing': 0, // Disallows returning any from a function
        '@typescript-eslint/no-unsafe-return': 0, // Enforces naming conventions for everything across a codebase
        '@typescript-eslint/naming-convention': 0, // Require or disallow trailing comma
        '@typescript-eslint/comma-dangle': 0, // Prevents conditionals where the type is always truthy or always falsy
        '@typescript-eslint/no-unnecessary-condition': 0, // Bans @ts-<directive> comments from being used or requires descriptions after directive
        '@typescript-eslint/ban-ts-comment': 0, // Disallows usage of void type outside of generic or return types
        '@typescript-eslint/no-invalid-void-type': 0, // Prefer using concise optional chain expressions instead of chained logical ands
        '@typescript-eslint/prefer-optional-chain': 0, // Prefer initializing each enums member value
        '@typescript-eslint/prefer-enum-initializers': 0, // Enforces consistent usage of type imports
        '@typescript-eslint/consistent-type-imports': 0, // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
        '@typescript-eslint/prefer-readonly-parameter-types': 0, // Recommends using @ts-expect-error over @ts-ignore
        '@typescript-eslint/prefer-ts-expect-error': 0, // Exhaustiveness checking in switch with union type
        '@typescript-eslint/switch-exhaustiveness-check': 0, // Disallow function declarations that contain unsafe references inside loop statements
        '@typescript-eslint/no-loop-func': 0, // Disallow this keywords outside of classes or class-like objects
        '@typescript-eslint/no-invalid-this': 0, // Enforces consistent returning of awaited values
        '@typescript-eslint/return-await': 0, // Disallow usage of the implicit any type in catch clauses
        '@typescript-eslint/no-implicit-any-catch': 0, // Requires that .toString() is only called on objects which provide useful // information when stringified prefer-readonly-parameter-types
        '@typescript-eslint/no-base-to-string': 0, // Enforce template literal expressions to be of string type
        '@typescript-eslint/restrict-template-expressions': 0, // Enforces consistent spacing before and after commas
        '@typescript-eslint/comma-spacing': 0,
        '@typescript-eslint/ban-tslint-comment': 0, // Disallows assigning any to variables and properties
        '@typescript-eslint/no-unsafe-assignment': 0, // Enforce default parameters to be last
        '@typescript-eslint/default-param-last': 0, // Prefer using type parameter when calling Array#reduce instead of casting
        '@typescript-eslint/prefer-reduce-type-parameter': 0, // Disallow the delete operator with computed key expressions
        '@typescript-eslint/no-dynamic-delete': 0, // Disallows member access on any typed variables
        '@typescript-eslint/no-unsafe-member-access': 0, // Disallows calling an any type value
        '@typescript-eslint/no-unsafe-call': 0, // Enforce or disallow the use of the record type
        '@typescript-eslint/consistent-indexed-object-style': 0, // Require explicit return and argument types on exported functions' and classes' public class methods
        '@typescript-eslint/prefer-literal-enum-member': 0, // Disallow duplicate imports
        '@typescript-eslint/no-duplicate-imports': 0, // Disallow variable redeclaration
        '@typescript-eslint/no-redeclare': [2, { builtinGlobals: true, ignoreDeclarationMerge: true }],
      },
    },
    {
      files: ['types/**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],
};
