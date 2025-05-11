import type { MetadataRoute } from 'next';
import GlobalConst from "./var-global";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${GlobalConst.domain}/sitemap.xml`,
  }
}
