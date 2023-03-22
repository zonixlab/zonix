import type { GeneralOptions } from '../../typings/General'
import { writeConfig } from '../../helpers/authSystem'
import { openAIChat } from '../../helpers/openAIChat'
import { red, yellow, green } from 'kleur/colors'

export const authAction = async (options: GeneralOptions) => {
  const key = options[Object.keys(options)[0]]

  if (!key) {
    return console.log(
      red(`\nYou have not entered the expected key!`),
      yellow(`\n* use the --key or -k option to declare your API key`)
    )
  }

  const params = {
    text: `Hello!`,
    method: 'POST',
    key
  }

  const openAIChatResponse = await openAIChat(params)

  if (openAIChatResponse.error) {
    return console.log(
      red(
        `\nYour key is not valid!\nPlease review your API key, or create a new one at: https://platform.openai.com/account/api-keys`
      )
    )
  }

  writeConfig({ apiKey: key })
  console.log(
    green(
      `\nYou have successfully authenticated!\nSee more about Zonix Open Source CLI at: https://github.com/zonixlab/zonix`
    )
  )
}
