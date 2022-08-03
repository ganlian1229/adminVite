module.exports = {
    root: true, // 禁用持续查找（root）
    env: {
        browser: true, // 启用浏览器全局变量。
        node: true, // Node.js全局变量和Node.js范围。
        es6: true // 启用ES6的功能。
    },
    globals: {
        storeToRefs: true,
        useRoute: true,
        useRouter: true,
        $ref: true
    },
    parserOptions: {
        parser: 'babel-eslint', // 解析器（parser）
        ecmaVersion: 2020, // ECMA版本
        sourceType: 'module' // 指定源代码存在的位置，script | module，默认为script
    },
    // eslint:recommended:表示引入eslint的核心功能，并且报告一些常见的共同错误。
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier', 'vue-global-api'],
    rules: {
        'vue/no-v-model-argument': 'off', // 在vue3中使用v-model报错
        'array-bracket-spacing': 'off', // 是否允许非空数组里面有多余的空格
        'object-curly-spacing': 'off', // 大括号内是否允许不必要的空格
        'prettier/prettier': 'warn',
        'space-before-function-paren': 'off', // 函数定义时括号前面要不要有空格
        'no-console': 'off', // 禁止使用console
        'no-debugger': 'off', // 禁止使用debugger
        'no-empty-source': 'off',
        // 使用四个空格进行缩进，
        indent: [4, 4],
        'no-unused-vars': 'off' // 不能有声明后未被使用的变量或参数
    }
};
