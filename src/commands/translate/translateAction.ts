import type { GeneralOptions } from '../../typings/General'
import { isAuthenticated } from '../../helpers/isAuthenticated'
import { config } from '../../helpers/authSystem'
import { openAIChat } from '../../helpers/openAIChat'
import { red, yellow, green } from 'kleur/colors'

export const translateAction = async (options: GeneralOptions) => {
  const text = options[Object.keys(options)[0]]
  const language = options[Object.keys(options)[1]]

  // verify authentication
  const isAuth = await isAuthenticated()
  if (!isAuth) return

  if (!text || !language) {
    return console.log(
      red(`\nYou have not entered the expected text or language!`),
      yellow(
        `\n* use --text or -t to declare the text to be translated\n* use --language or -l to declare the language you want to translate`
      )
    )
  }

  const params = {
    text: `Translate to ${language}: ${text}`,
    method: 'POST',
    key: config.apiKey
  }

  const openAIChatResponse = await openAIChat(params)

  console.log(`\n${green(openAIChatResponse.data)}`)
}
