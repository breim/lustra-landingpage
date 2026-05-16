import js from '@eslint/js'
import tsEslint from 'typescript-eslint'
import sonarjs from 'eslint-plugin-sonarjs'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier/flat'

/** @type {import("eslint").Linter.Config[]} */
const config = [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      'out/**',
      'build/**',
      '**/coverage/**',
      '**/*.tsbuildinfo',
      'next-env.d.ts'
    ]
  },
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    plugins: { sonarjs, unicorn },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser
      },
      parserOptions: {
        // Enable type-aware linting (no-floating-promises, no-misused-promises,
        // await-thenable). `projectService: true` auto-discovers each file's
        // tsconfig. Files not covered by any tsconfig (configs, standalone
        // scripts) get type-aware rules disabled in a separate override below.
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      complexity: ['error', { max: 15 }],
      'sonarjs/cognitive-complexity': ['error', 15],
      'max-lines': [
        'error',
        { max: 300, skipBlankLines: true, skipComments: true }
      ],
      'max-lines-per-function': [
        'error',
        { max: 100, skipBlankLines: true, skipComments: true, IIFEs: true }
      ],

      'max-params': ['error', 4],
      'max-depth': ['error', 4],
      'max-nested-callbacks': ['error', 3],

      'no-else-return': ['error', { allowElseIf: false }],
      'unicorn/no-lonely-if': 'error',
      'consistent-return': 'error',
      'sonarjs/prefer-immediate-return': 'error',
      'sonarjs/no-redundant-jump': 'error',
      'sonarjs/no-collapsible-if': 'error',

      // Blank line after guard-clause-style `if` blocks (Rubocop's
      // Style/EmptyLineAfterGuardClause). Allow back-to-back `if`s so
      // chained guards don't get padded between themselves.
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'if', next: '*' },
        { blankLine: 'any', prev: 'if', next: 'if' }
      ],

      'unicorn/no-negated-condition': 'error',
      'unicorn/prefer-ternary': ['error', 'only-single-line'],
      'sonarjs/no-identical-functions': ['error', 5],
      'sonarjs/no-duplicated-branches': 'error',
      'sonarjs/no-inverted-boolean-check': 'error',
      'sonarjs/no-nested-template-literals': 'error',

      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // Style / clarity
      // Allow `== null` / `!= null` as a TS-idiomatic null|undefined check;
      // converting to `===` would change semantics.
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'prefer-template': 'error',
      'object-shorthand': 'error',
      'no-unneeded-ternary': 'error',
      // disallowTypeAnnotations off so `typeof import('...')` is still allowed —
      // we need it for lazy module loads in tests + dynamic SDK imports.
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { disallowTypeAnnotations: false }
      ],

      // Async correctness (type-aware). `checksVoidReturn: false` permits
      // `onClick={async () => ...}` and other void-returning event handlers,
      // which are idiomatic in React/Next.
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: false }
      ],
      '@typescript-eslint/await-thenable': 'error'
    }
  },
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}', '**/__tests__/**'],
    rules: {
      'sonarjs/no-identical-functions': 'off',
      'sonarjs/no-duplicated-branches': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // Bun's `expect(...).rejects.X` chain is awaitable in practice but typed
      // such that ts-eslint flags it as non-thenable. False positives outweigh
      // the value of the rule in tests.
      '@typescript-eslint/await-thenable': 'off'
    }
  },
  {
    // Files outside any tsconfig — disable type-aware rules entirely.
    files: [
      'eslint.config.mjs',
      'next.config.{ts,mjs,js}',
      'postcss.config.{mjs,ts,js}'
    ],
    ...tsEslint.configs.disableTypeChecked
  },
  {
    files: [
      '**/*.config.{ts,mts,mjs,js,cjs}',
      '**/next.config.*',
      '**/postcss.config.*'
    ],
    rules: {
      'no-console': 'off',
      'max-lines-per-function': 'off',
      'max-lines': 'off'
    }
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  },
  ...nextCoreWebVitals.map(c => ({
    ...c,
    files: ['src/**/*.{ts,tsx}']
  })),
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      // React 19 / React Compiler-strict rules introduced in
      // eslint-plugin-react-hooks@7. Existing code predates them; flag as
      // warnings so refactors can be tackled incrementally.
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/purity': 'warn',
      'react-hooks/refs': 'warn'
    }
  },
  {
    files: ['src/components/ui/**/*.{ts,tsx}'],
    rules: {
      'unicorn/no-negated-condition': 'off',
      'max-lines-per-function': 'off',
      'sonarjs/no-identical-functions': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  prettier
]

export default config
