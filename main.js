const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://resident.icondo.asia/#/login');
  await page.screenshot({ path: 'test/example.png' });

  await browser.close();
})();
