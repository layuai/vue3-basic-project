module.exports = {
    semi: true, // 使用分号
    singleQuote: true, // 使用单引号
    trailingComma: "none", // 不使用尾随逗号
    printWidth: 80, // 每行最大长度
    tabWidth: 4, // 缩进大小
    useTabs: false, // 使用空格缩进
    bracketSpacing: true, // 对象字面量的花括号间加空格
    arrowParens: "avoid", // 箭头函数只有一个参数时省略括号
    jsxBracketSameLine: false, // 在jsx中把'>' 单独放一行
    vueIndentScriptAndStyle: false, // vue文件中的script及style标签不缩进
    endOfLine: "lf", // 换行符
    proseWrap: "never", // 不换行
    quoteProps: "as-needed", // 仅在必需时在对象属性周围添加引号
    htmlWhitespaceSensitivity: "css", // html空格敏感度
    vueCustomBlockSpacing: false, // vue文件中自定义块与其他块之间不加空格
    vueMaxAttributesPerLine: 3, // vue文件中每行最多3个属性数量
    vueSingleFileComponentIndentation: false, // vue文件中单文件组件不缩进
    vueTemplateIndentation: false, // vue文件中template标签不缩进
    arrowBodyStyle: "block", // 箭头函数体始终使用大括号
    arrowFunctionParentheses: "always", // 箭头函数参数始终使用括号
    bracketSameLine: false, // 在对象字面量声明所在行的末尾放置 } 或者新起一行
    embeddedLanguageFormatting: "auto", // 格式化嵌入式代码
    jsxSingleQuote: false, // 在jsx中使用单引号
    jsxBracketSpacing: true, // 在jsx中把'>' 单独放一行
    requirePragma: false, // 是否需要在文件开头加上 @prettier
    spaceUnfoldable: true, // 在对象字面量中的括号之间不添加空格
    vueInterpolationMode: "html", // vue文件中插值语法的模式在对象字面量中
    propertyName: true, // 在对象字面量中的属性名后面加上一个空格
    functionSpacing: true, // 在函数名和括号之间加上一个空格
};
