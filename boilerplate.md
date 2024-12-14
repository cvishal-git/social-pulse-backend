- bun init
- bun add express body-parser
- bun add -d typescript @types/node @types/express eslint prettier
    <!-- tsconfig.json
    {
      "compilerOptions": {
        "module": "ESNext", // Use ES Modules
        "moduleResolution": "Node",
        "target": "ESNext", // For modern JavaScript
        "strict": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "outDir": "./dist",
        "rootDir": "./src",
        "resolveJsonModule": true
      },
      "include": ["src/**/*"],
      "exclude": ["node_modules"]
    } 
    -->
- bun add dotenv
- bun add -d eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
- npx eslint --init
    <!-- eslint.config.mjs
    import globals from 'globals';
    import pluginJs from '@eslint/js';
    import tseslint from 'typescript-eslint';
    import prettier from 'eslint-config-prettier';
    import prettierPlugin from 'eslint-plugin-prettier';
  
    /** @type {import('eslint').Linter.Config[]} */
    export default [
      { files: ['**/*.{js,mjs,cjs,ts}'] },
      { languageOptions: { globals: globals.node } }, // Use Node globals
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      {
        plugins: { prettier: prettierPlugin },
        rules: { 'prettier/prettier': 'error' },
      },
      prettier,
    ]; 
    -->

- bun add -d eslint-config-prettier eslint-plugin-prettier
