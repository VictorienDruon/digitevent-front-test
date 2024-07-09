import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	include: ["./src/**/*.{ts,tsx}"],
	outdir: "styled-system",
	jsxFramework: "react",
});
