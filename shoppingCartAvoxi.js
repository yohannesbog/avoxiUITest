
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Avoxi shoping cart test ', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it('Should go to the page and select country ', async () => {
        await driver.get('https://shoppingcart-staging.avoxi.io/');
       // Select country 
         driver.findElement(By.name('country')).click();
         await driver.findElement(By.css('[id="originatingCountrySelect"] > select > option:nth-child(2)')).click();
        });

        // select it('Should go to the page and select number type '
        it('Should go to the page and select number type ', async () => {
            driver.navigate().refresh();
         driver.findElement(By.name('numberType')).click();
          await driver.findElement(By.xpath('//*[@id="numberType"]/select/option[2]')).click();
        });

  // select number 
 it('Should go to the page and select number ', async () => {
    // driver.navigate().refresh();
     await driver.findElement(By.name('number')).isDisplayed;
    // await driver.findElement(By.name('number')).click();
    // await driver.findElement(By.css('[id="number"] > select > option:nth-child(2)')).click();
});

// // forwared call to
it('Should go to the page and select forward call to ', async () => {
 driver.findElement(By.name('userCountry')).click();
 await driver.findElement(By.css('[id="terminatingCountrySelect"] > select > option:nth-child(4)')).click();
  await driver.findElement(By.name('userNumber')).sendKeys('5712243150');
        driver.sleep(1000);
    });

    // choose your plan 
     it('Should go to the page and select plan ', async () => {
  await driver.findElement(By.xpath('//*[@id="businessStandardButton"]/p')).click();
        });

        // complete your information '
        it('Should go to the page and complete your information ', async () => {

        await driver.findElement(By.id('firstName')).sendKeys('Yohannes');

        await driver.findElement(By.id('lastName')).sendKeys('Bogale');

        await driver.findElement(By.id('businessName')).sendKeys('Avoxi');     
        await driver.findElement(By.id('email')).sendKeys('yohann@avoxi.io');

    });

        //step 4 reviwe and place order
        it('Should go to the page and reviwe and place order ', async () => {
        await driver.findElement(By.name('billingName')).sendKeys('Avoxi card');
        await driver.findElement(By.name('billingCardNumber')).sendKeys('4111111111111111');

        // billing exp month
        await driver.findElement(By.name('billingExpMon')).click();
        await driver.findElement(By.css('[id="bilingExpMon"] > option:nth-child(3)')).click();

        // biling exp year
        await driver.findElement(By.name('billingExpYear')).click();
        await driver.findElement(By.css('[id="billingExpYear"] > option:nth-child(2)')).click();
        await driver.findElement(By.name('billingCVC')).sendKeys('324');
    });

//  // accept condition toggle
it('Should accept condition toggle ', async () => {
await driver.findElement(By.id('finalCheckBox')).click();
});

/// submitt order
it('Should submitt order ', async () => {
await driver.findElement(By.id('placeOrder')).submit();     
    });

    // close the browser
    after(async () => driver.quit());
});