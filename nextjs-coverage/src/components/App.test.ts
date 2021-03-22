beforeEach(async () => {
  await page.goto("http://localhost:3000", {timeout: 60000});
  page.setDefaultTimeout(10000);
});

test("smoke", async () => {
  jest.setTimeout(60000);
  await expect(page).not.toHaveSelector("[data-testid=win]");
  await expect(page).toHaveSelector("[data-testid=score]");
  await expect(page).toHaveSelector("[data-testid=button]");
});

test("click", async () => {
  jest.setTimeout(60000);

  await expect(page).toHaveSelector("[data-testid=button]");
  await expect(page).not.toHaveSelector("[data-testid=win]");

  await expect(page).toHaveText("[data-testid=score]", "0");

  await page.click("[data-testid=button]");
  await expect(page).toHaveText("[data-testid=score]", "1");

  await page.click("[data-testid=button]");
  await expect(page).toHaveText("[data-testid=score]", "2");

  await page.click("[data-testid=button]");
  await expect(page).toHaveText("[data-testid=score]", "3");

  await expect(page).toHaveSelector("[data-testid=win]");

  await jestPlaywright.saveCoverage(page)

});

// Workaround for TS error: 'All files must be modules when the '--isolatedModules' flag is provided.'
export {};
