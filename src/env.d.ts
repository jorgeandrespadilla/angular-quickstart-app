// Define the available environment variables
declare interface Env {
  readonly NODE_ENV: string;
  readonly NG_APP_VERSION: string;
  [key: string]: unknown;
}

// Use import.meta.env.YOUR_ENV_VAR
declare interface ImportMeta {
  readonly env: Env;
}
