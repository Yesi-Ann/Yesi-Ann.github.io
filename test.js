const puppeteer = require('puppeteer');

describe('Página Hola Mundo', () => {
  it('debe mostrar el mensaje Hola Mundo', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:80');
    const content = await page.content();
    expect(content).toContain('<h1>Hola Mundo</h1>');
    await browser.close();
  });
});

