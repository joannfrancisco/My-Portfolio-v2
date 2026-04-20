export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Uncomment if you add admin routes later:
        // disallow: ["/admin/", "/api/"],
      },
      {
        userAgent: "AhrefsBot",
        crawlDelay: 10,
      },
      {
        userAgent: "SemrushBot",
        crawlDelay: 10,
      },
    ],
    sitemap: "https://www.joannfrancisco.com/sitemap.xml",
  };
}
