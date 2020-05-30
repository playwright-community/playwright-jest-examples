const { saveVideo } = require('playwright-video')

let capture
beforeAll(async () => {
  capture = await saveVideo(page, 'recording.mp4')
})
afterAll(async () => {
  await capture.stop()
})

describe("Example.com", () => {
  it("should have the exact text 'Example Domain' in the h1", async () => {
    await page.goto("https://example.com");
    // via the toEqualText method
    await expect(page).toEqualText("h1", "Example Domain")
    // or via the Playwright text selector engine
    await expect(page).toHaveSelector('"Example Domain"', {
      state: "attached"
    })
  })
  it("should navigate to iana once you click on 'More information'", async () => {
    await page.click("a");
    expect(page.url()).toMatch(/iana\.org/)
  })
})