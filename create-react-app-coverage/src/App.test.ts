import fs from "fs";
import { promisify } from 'util'
import path from "path";

const fsWriteFile = promisify(fs.writeFile);

const COV_DIR = ".pw-cov"

beforeAll(async () => {
  if (!fs.existsSync(COV_DIR)) {
    fs.mkdirSync(COV_DIR)
  }
})

beforeEach(async () => {
  await page.goto('http://localhost:3000')
})

afterEach(async () => {
  const coverage = await page.evaluate(`window.__coverage__`)
  if (coverage) {
    await fsWriteFile(path.join(COV_DIR, `${new Date().getTime()}.json`), JSON.stringify(coverage))
  }
})

test('use Turquoise as a default background color', async () => {
  await expect(page).toHaveSelector("text=#1abc9c")
});

test('use Red as a background color', async () => {
  await page.click("text=Red")
  await expect(page).toHaveSelector("text=#e74c3c")
});

// Demonstrate how a not covered code path would look like
// test('use Yellow as a background color', async () => {
//   await page.click("text=Yellow")
//   await expect(page).toHaveSelector("text=#f1c40f")
// });

test('use Turquoise as a background color', async () => {
  await page.click("text=Turquoise")
  await expect(page).toHaveSelector("text=#1abc9c")
});

// Workaround for TS error: 'All files must be modules when the '--isolatedModules' flag is provided.'
export { }