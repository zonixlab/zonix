import fs from 'fs'

interface Config {
  apiKey: string
}

const readConfig = (): Config => {
  try {
    const data = fs.readFileSync('config.json', 'utf8')
    return JSON.parse(data)
  } catch {
    return { apiKey: '' }
  }
}

const writeConfig = (config: Config) => {
  try {
    fs.writeFileSync('config.json', JSON.stringify(config))
  } catch (error) {
    console.error(`Failed to write config file: ${error}`)
  }
}

const config: Config = readConfig()

export { config, writeConfig }
