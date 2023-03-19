import { config } from '../../config'
import type { AuthProps } from '../../typings/Auth'

export const authAction = ({ apiKey }: AuthProps) => {
  if (!apiKey) {
    return console.log('use the -k or --apiKey option to declare your API key')
  }

  config.apiKey = apiKey
  console.log(`Your apiKey: ${apiKey}`)
}
