import fs from "fs"
import path from "path"
import { promisify } from "util"

const INPUT_PATH = path.join(__dirname, '..', '..', 'input', 'nord-theme.json')
const OUTPUT_PATH = path.join(__dirname, '..', '..', 'themes', 'nord-color-theme.json')

const map: Record<string, string> = {
    "#2e3440": "#2b2b2b"
}

async function readFile() {
    const read = promisify(fs.readFile)
    const jsonString = await read(INPUT_PATH)
    return jsonString.toString()
}

async function writeFile(dataString: string) {
    const write = promisify(fs.writeFile)
    await write(OUTPUT_PATH, dataString)
}

async function main() {
    const jsonString = await readFile()
    console.dir(jsonString)

    for (let [key, value] of Object.entries(map)) {
        console.log(key, value)
        jsonString.replace(key, value)
    }

    writeFile(jsonString)
}
main()