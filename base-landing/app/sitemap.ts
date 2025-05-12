import type { MetadataRoute } from 'next';
import GlobalConst from "./var-global";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${GlobalConst.domain}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${GlobalConst.domain}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${GlobalConst.domain}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
