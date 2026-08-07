import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  // Avoid a Rolldown circular chunk emitted for TanStack Start on Vercel.
  inlineDynamicImports: true,
});
