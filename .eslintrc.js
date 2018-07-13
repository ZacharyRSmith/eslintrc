/*
.eslintrc.js
*/
const ERROR = 2;
const WARN = 1;

module.exports = {
    extends: "eslint:recommended",
    rules: {
        'handle-callback-err': [ERROR, ".*(e|E)rr.*"],
        'no-warning-comments': WARN,
        'no-bitwise': ERROR,
        'semi': ERROR,
        'use-strict': ERROR
    },
    overrides: [
        {
            files: [
                "public/**/*"
            ],
            env: { // TODO: better handle browser ver, either by linting or a transpiler...
                browser: true,
                es6: false,
                node: false
            }
        },
        {
            // TODO: all files except public/
            files: [
                "modules/**/*",
                "routes/**/*",
                ".eslintrc.js",
                "appssl.js",
                "gulpfile.js",
                "package.json"
            ],
            env: {
                browser: false,
                es6: true,
                node: true
            },
            rules: {
                'no-var': WARN,
                'prefer-const': WARN
            }
        },
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
