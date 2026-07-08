// Next 16 removed `next lint`; we invoke ESLint directly (`eslint .`).
// eslint-config-next v16 ships a flat-config array, so spread it in directly.
import next from "eslint-config-next";

const config = [
  ...next,
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
  {
    rules: {
      // Custom fonts are loaded once in the root layout <head>, not per-page.
      "@next/next/no-page-custom-font": "warn",
    },
  },
];

export default config;
