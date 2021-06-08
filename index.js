const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com');

  await page.waitForSelector('[name="username"]', { timeout: 60000 });

  // ACESSA A PAGINA E CLICA EM LOGIN
  await page.type('[name="username"]', 'email@email.com', {delay: 95});
  await page.type('[type="password"]', 'yourpassword', {delay: 95});

  await page.click('[type="submit"]');

  await page.waitForNavigation();

  //Click para desabilitar salvamento de dados

  //await page.click('[class="aOOlW   HoLwm "]');

  // Pagina do instagram com foto
  
  await page.goto('https://www.instagram.com/p/CJMoqNohjS5KeTcp7wXm95jj3aZAJruZjptiXM0/');

  //Comentario + publicação

  await page.type('[class="Ypffh"]', 'Bela paisagem, amigo! ✌', {delay: 95});
  
  await page.click('[type="submit"]');

  // Like na foto
  
  await page.waitForSelector('[class="fr66n"]', { timeout: 60000 });

  await page.click('[class="fr66n"]');

  // await browser.close();
})();