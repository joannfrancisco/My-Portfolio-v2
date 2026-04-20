export default function sitemap() {
  const baseUrl = "https://www.joannfrancisco.com";
  const now = new Date();

  // Portfolio slugs — in a real setup, you'd read these from a CMS or the filesystem.
  // For now, a simple array works.
  const portfolioSlugs = [
    "b-digital-media",
    "granola",
    "marci-metzger",
    "moviedux",
    "nb-auto",
    "pawikan-divers",
  ];

  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const portfolioPages = portfolioSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...portfolioPages];
}
