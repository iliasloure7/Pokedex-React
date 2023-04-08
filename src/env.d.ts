/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POKEMON_API_URL: string;
  readonly VITE_POKEMON_API_IMAGE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
