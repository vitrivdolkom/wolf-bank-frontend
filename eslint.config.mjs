import { eslint } from '@siberiacancode/eslint';

export default eslint({
  typescript: true,
  react: true,
  jsx: true,
  rules: {
    'unicorn/number-literal-case': 'off'
  }
});
