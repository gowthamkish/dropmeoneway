import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";

const stream = new SitemapStream({
  hostname: "https://dropme1way.com"
});

const writeStream = createWriteStream("./public/sitemap.xml");

[
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/tariff", changefreq: "weekly", priority: 0.8 }
].forEach((link) => stream.write(link));

stream.end();
stream.pipe(writeStream);