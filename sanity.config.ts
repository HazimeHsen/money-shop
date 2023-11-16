import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import about from "./app/sanity/schemas/about-schema";
import schemas from "./app/sanity/schemas";

const config = defineConfig({
  projectId: "ltl22r4j",
  dataset: "production",
  title: "Marc-Shop",
  apiVersion: "2023-11-06",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
export default config;
