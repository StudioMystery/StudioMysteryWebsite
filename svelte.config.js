import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import { resolve } from "path";

const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  vite: {
    resolve: {
      alias: {
        $data: resolve("./src/data"),
      },
    },
  },
  kit: {
    adapter: adapter({
      pages: "build",
      fallback: "404.html",
    }),
    alias: {
      $lib: "./src/lib",
      $data: "./src/data",
    },
    paths: {
      base: process.argv.includes("dev") ? "" : "/StudioMysteryWebsite", //process.env.BASE_PATH,
    },
    outDir: "build",
  },
};

export default config;
