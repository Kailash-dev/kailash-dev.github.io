import { chromium } from "playwright";
import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "../src/app");

const html = `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;">
    <div id="icon" style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:#171717;border-radius:8px;color:#fafafa;font:600 20px system-ui,sans-serif;">K</div>
  </body>
</html>
`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 32, height: 32 } });
await page.setContent(html);
const buffer = await page.locator("#icon").screenshot({ type: "png" });
writeFileSync(path.join(appDir, "favicon-32.png"), buffer);
await browser.close();

console.error("Generated favicon-32.png");
