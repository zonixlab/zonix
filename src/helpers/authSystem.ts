import path from 'path'
import fs from 'fs'
import globalDirs from 'global-dirs'
import { red } from 'kleur/colors'

interface Config {
  apiKey: string
}

const readConfig = (): Config => {
  try {
    const packageDir = path.join(globalDirs.npm.packages, 'zonix')
    const configPath = path.join(packageDir, 'config.json')
    const data = fs.readFileSync(configPath, 'utf8')
    return JSON.parse(data)
  } catch {
    return { apiKey: '' }
  }
}

const writeConfig = (config: Config) => {
  try {
    const packageDir = path.join(globalDirs.npm.packages, 'zonix')
    const configPath = path.join(packageDir, 'config.json')
    const configDir = path.dirname(configPath)

    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true })
    }

    fs.writeFileSync(configPath, JSON.stringify(config))
  } catch (error) {
    console.log(red(`\nFailed to write config file: ${error}`))
  }
}

const config: Config = readConfig()

export { config, writeConfig }
