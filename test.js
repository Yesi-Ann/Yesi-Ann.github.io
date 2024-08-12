const puppeteer = require('puppeteer');

describe('Página Hola Mundo', () => {
  it('debe mostrar el mensaje Hola Mundo', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:80');  // La URL debe apuntar a la raíz si el archivo está allí

    // Usar page.evaluate() para obtener el contenido de un elemento específico
    const headingText = await page.evaluate(() => document.querySelector('h1').innerText);

    expect(headingText).toBe('Hola Mundo');
    await browser.close();
  });
});
