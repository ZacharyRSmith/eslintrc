/*
.eslintrc.js
*/
const ERROR = 2;
const WARN = 1;

module.exports = {
    extends: "eslint:recommended",
    env: {
        es6: true
    },
    rules: {
        'handle-callback-err': [ERROR, ".*(e|E)rr.*"], // this wasn't working for `function(error, blah...)` for some reason...
        'no-bitwise': ERROR,
        'no-warning-comments': WARN,
        'semi': WARN
    },
    overrides: [
        {
            files: [
                "**/*.test.js"
            ],
            env: {
                jest: true // now **/*.test.js files' env has both es6 *and* jest
            },
            // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
            // "extends": ["plugin:jest/recommended"]
            plugins: ["jest"],
            rules: {
                "jest/no-disabled-tests": "warn",
                "jest/no-focused-tests": "error",
                "jest/no-identical-title": "error",
                "jest/prefer-to-have-length": "warn",
                "jest/valid-expect": "error"
            }
        }
    ],
};
