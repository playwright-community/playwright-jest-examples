const fs = require("fs")
const { promisify } = require("util")
const NYC = require("nyc")
const path = require("path")

const fsWriteFile = promisify(fs.writeFile);

const COV_DIR = ".pw-cov";

(async () => {
  const nyc = new NYC({
    _: ['merge'],
  })
  const map = await nyc.getCoverageMapFromAllCoverageFiles(COV_DIR)
  const NYC_OUTPUT = ".nyc_output"
  if (!fs.existsSync(NYC_OUTPUT)) {
    fs.mkdirSync(NYC_OUTPUT)
  }
  const outputFile = path.join(NYC_OUTPUT, "coverage.json")
  const content = JSON.stringify(map, null, 2)
  await fsWriteFile(outputFile, content)
  console.info(`coverage file (${content.length}) written to ${outputFile}`)
})()