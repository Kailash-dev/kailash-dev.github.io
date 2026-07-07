import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/projects");

const sites = [
  { slug: "safework-global", url: "https://safeworkglobal.com" },
  { slug: "vyaparpost", url: "https://vyaparpost.in" },
  { slug: "vendor-infra", url: "https://vendorinfra.com" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

for (const site of sites) {
  const filePath = path.join(outDir, `${site.slug}.jpg`);
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: filePath,
      type: "jpeg",
      quality: 88,
      fullPage: false,
    });
    console.error(`Captured ${site.slug}`);
  } catch (error) {
    console.error(`Failed ${site.slug}:`, error.message);
  }
}

await browser.close();
