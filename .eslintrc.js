module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    rules: {
        'class-methods-use-this': 0,
        'import/prefer-default-export': 0,
        '@typescript-eslint/indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', { code: 120 }],
        'no-alert': 0,
        'no-plusplus': 0,
        'no-console': 0,
        'no-prototype-builtins': 0,
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript',
        'plugin:react/recommended',
    ],
    plugins: [
        '@typescript-eslint',
        'import',
        'react',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts'],
            },
        },
    },
    globals: {},
};
