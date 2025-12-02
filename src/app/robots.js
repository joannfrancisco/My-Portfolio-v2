export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://joannfrancisco.com/sitemap.xml",
  };
}
