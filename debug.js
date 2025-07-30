const { chromium } = require('playwright');

async function debugPage() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Listen for console messages
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', exception => console.log('PAGE ERROR:', exception));

  try {
    console.log('Navigating to localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    // Take screenshot
    await page.screenshot({ path: 'debug-screenshot.png' });
    console.log('Screenshot saved as debug-screenshot.png');
    
    // Get page content
    const content = await page.content();
    console.log('Page HTML length:', content.length);
    
    // Check if React app is mounted
    const rootElement = await page.locator('#root').innerHTML();
    console.log('Root element content:', rootElement);
    
    // Check for any errors in console
    const errors = await page.evaluate(() => {
      return window.console.error.toString();
    });
    
    console.log('Console errors:', errors);
    
    // Wait a bit to see if anything loads
    await page.waitForTimeout(3000);
    
    // Take another screenshot after waiting
    await page.screenshot({ path: 'debug-screenshot-after-wait.png' });
    console.log('Second screenshot saved');
    
  } catch (error) {
    console.error('Error during debugging:', error);
  }
  
  await browser.close();
}

debugPage();