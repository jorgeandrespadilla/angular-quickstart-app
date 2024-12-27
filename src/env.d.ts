// Define the available environment variables
declare interface ImportMetaEnv {
  readonly NG_APP_ENV: string;
  readonly NG_APP_VERSION: string;
}

// Use import.meta.env.NG_APP_MY_VARIABLE
declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
