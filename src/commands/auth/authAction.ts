import { writeConfig } from '../../config'
import type { GeneralOptions } from '../../typings/General'

export const authAction = (options: GeneralOptions) => {
  const key = options[Object.keys(options)[0]]

  if (!key) {
    return console.log(`\n* use the --key or -k option to declare your API key`)
  }

  writeConfig({ apiKey: key })
  console.log(`Your apiKey: ${key}`)
}
