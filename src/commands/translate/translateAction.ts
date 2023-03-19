import type { GeneralOptions } from '../../typings/General'
import { openAIChat } from '../../helpers/openAIChat'
import { config } from '../../config'
import kleur from 'kleur'

export const translateAction = async (options: GeneralOptions) => {
  const text = options[Object.keys(options)[0]]
  const language = options[Object.keys(options)[1]]

  if (!text || !language) {
    return console.log(
      `\n* use --text or -t to declare the text to be translated\n* use --language or -l to declare the language you want to translate`
    )
  }

  const params = {
    text: `Translate to ${language}: ${text}`,
    method: 'POST',
    key: config.apiKey
  }

  const openAIChatResponse = await openAIChat(params)

  if (openAIChatResponse.error) {
    if (openAIChatResponse.error === 'Unauthorized') {
      return console.log(
        `${kleur.red(
          'Authentication error in OpenAI.\nPlease review your API key, or create a new one at: https://platform.openai.com/account/api-keys'
        )}`
      )
    } else {
      return console.log(
        `${kleur.red(`Error: ${openAIChatResponse.error}.\nPlease try again`)}`
      )
    }
  }

  console.log(`> ${kleur.green(openAIChatResponse.data)}`)
}
