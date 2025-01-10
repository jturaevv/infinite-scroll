import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.js'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    rules: {
      // eslint-rules
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'indent': ['error', 2],
  
      // vue-rules
      'vue/multi-word-component-names': 'off',
      'vue/component-name-in-template-casing': ['error', 'kebab-case', {
        'registeredComponentsOnly': false
      }],
      'vue/block-order': ['error', {
        'order': ['script', 'template', 'style']
      }],
      'vue/block-tag-newline': ['error', {
        'singleline': 'always',
        'multiline': 'always',
        'maxEmptyLines': 0,
        'blocks': {
          'script': {
            'maxEmptyLines': 1,
          }
        }
      }],
      'vue/define-macros-order': 'off',
      'vue/html-closing-bracket-newline': ['error', {
        'singleline': 'never',
        'multiline': 'never'
      }],
      'vue/html-indent': ['error',
        2, {
          'baseIndent': 1,
          'alignAttributesVertically': true
        }
      ],
      'vue/max-attributes-per-line': ['error', {
        'singleline': 100,
        'multiline': 100,
      }],
      'vue/first-attribute-linebreak': ['error', {
        'singleline': 'beside',
        'multiline': 'beside'
      }],
      'vue/multiline-html-element-content-newline': ['error', {
        'ignoreWhenEmpty': true,
        'allowEmptyLines': false
      }],
      'vue/no-multi-spaces': ['error', {
        'ignoreProperties': false
      }],
      'vue/mustache-interpolation-spacing': ['error'],
      'vue/singleline-html-element-content-newline': ['error', {
        'ignoreWhenNoAttributes': true,
        'ignoreWhenEmpty': false,
        'ignores': ['h1', 'span'],
      }],
      'vue/component-definition-name-casing': ['error', 'kebab-case'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/require-macro-variable-name': 'error',
      'vue/require-prop-types': 'off',
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
    }
  }
)
