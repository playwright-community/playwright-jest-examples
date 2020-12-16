// Needs to be higher than the default Playwright timeout
jest.setTimeout(40 * 1000)

describe("GitHub", () => {
  it("should show the microsoft/Playwright project in the search if you search for Playwright", async () => {
    await page.goto("https://github.com");
    await page.type('input[name="q"]', "Playwright");
    await page.press('input[name="q"]', "Enter");
    await expect(page).toHaveText(".repo-list", "microsoft/playwright")
  })
  it("should contain 'Playwright' in the project title", async () => {
    await page.click(".repo-list-item:nth-child(1) a");
    // via the CSS selector
    await expect(page).toHaveText("#readme h1", "Playwright")

    // or via the Playwright text selector engine
    await expect(page).toHaveSelector('text=Playwright', {
      state: "attached"
    })
  })
})