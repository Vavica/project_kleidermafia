import { test, expect } from '@playwright/test';

test('Homepage lädt', async ({ page }) => {
    await page.goto('https://kleidermafia.com/');
    await expect(page).toHaveTitle('Kleidermafia - Mode für Männer und Frauen');
});

test('Homepage enthält den Text "Kleidermafia"', async ({ page }) => {
    await page.goto('https://kleidermafia.com/');
    await expect(page).toContainText('Kleidermafia');
});

test('MEN: New in', async ({ page }) => {
    await page.goto('https://kleidermafia.com/');
});