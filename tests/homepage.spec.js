import { test, expect, Locator} from '@playwright/test';

test('Homepage lädt', async ({ page }) => {
    await page.goto('https://kleidermafia.com/');
    await expect(page).toHaveTitle('Kleidermafia - Young & Street Fashion');
});

test('Homepage enthält den Text "Kleidermafia"', async ({ page }) => {
    await page.goto('https://kleidermafia.com/');
    await expect(page.locator('body')).toContainText('Kleidermafia');
});

test('Anzahl der Bestseller anzeigen',async ({ page }) => {
    const HomePage = new HomePage(page);

    await page.goto('https://kleidermafia.com/');
    await expect(HomePage.bestsellerItems).toHaveCount(19);
});