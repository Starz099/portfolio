/**
 * Blog content registry.
 *
 * To add a new blog:
 *   1. Create  src/content/blogs/<your-slug>.tsx
 *   2. Export a default React component with your content
 *   3. Add an entry here:  "your-slug": YourComponent
 *   4. Add the matching metadata entry in src/components/Blogs/constants.ts
 */

import { ComponentType } from "react";
import UrlAsASkill from "./url-as-a-skill";
import MakingTura from "./making-tura";
export const blogRegistry: Record<string, ComponentType> = {
  "url-as-a-skill": UrlAsASkill,
  "making-tura": MakingTura,
};
