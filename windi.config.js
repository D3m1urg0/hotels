import { defineConfig } from "windicss/helpers";

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt);
}

export default defineConfig({
  safelist: [range(10).map(i => `col-start-${i}`)]
});
