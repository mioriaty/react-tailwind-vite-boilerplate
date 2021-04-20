import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

import tsconfigPaths from "vite-tsconfig-paths";

export const KNOWN_ASSET_TYPES = [
  // images
  "png",
  "jpe?g",
  "gif",
  "svg",
  "ico",
  "webp",
  "avif",

  // media
  "mp4",
  "webm",
  "ogg",
  "mp3",
  "wav",
  "flac",
  "aac",

  // fonts
  "woff2?",
  "eot",
  "ttf",
  "otf",

  // other
  "wasm",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  assetsInclude: KNOWN_ASSET_TYPES,
});
