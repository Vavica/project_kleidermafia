import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/HomePage.js';

test('Homepage lädt', async ({ page }) => {
    await page.goto('https://kleidermafia.com/');
    await expect(page).toHaveTitle('Kleidermafia - Young & Street Fashion');
});

test('Homepage enthält den Text "Kleidermafia"', async ({ page }) => {
    await page.goto('https://kleidermafia.com/');
    await expect(page.locator('body')).toContainText('Kleidermafia');
});

test('Anzahl der Bestseller anzeigen',async ({ page }) => {
    const homePage = new HomePage(page);

    await page.goto('https://kleidermafia.com/');
    const count = await homePage.getBestsellerCount();

    console.log('Bestseller Anzahl:', count);

    expect(count).toBe(20);
 });