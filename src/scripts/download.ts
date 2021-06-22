import fetch from "node-fetch"
import fs from "fs"
import path from "path"
import { promisify } from "util"

const NORD_THEME_JSON_URL = 'https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/themes/nord-color-theme.json'
const OUTPUT_PATH = path.join(__dirname, '..', '..', 'input', 'nord-theme.json')

async function downloadFile() {
    const response = await fetch(NORD_THEME_JSON_URL)
    const json = await response.text()
    const write = promisify(fs.writeFile)
    await write(OUTPUT_PATH, json)
}

async function main() {
    downloadFile()
}
main()