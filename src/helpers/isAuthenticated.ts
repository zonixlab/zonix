import { config } from './authSystem'
import { openAIChat } from './openAIChat'
import { red, yellow } from 'kleur/colors'

export const isAuthenticated = async () => {
  const params = {
    text: `Hello!`,
    method: 'POST',
    key: config.apiKey
  }

  const openAIChatResponse = await openAIChat(params)

  if (openAIChatResponse.error) {
    console.log(
      red(
        `\n${
          openAIChatResponse.error === 'Unauthorized'
            ? `Authentication error in OpenAI!`
            : `Error: ${openAIChatResponse.error}.`
        }\nPlease review your API key, or create a new one at: https://platform.openai.com/account/api-keys`
      ),
      yellow(
        `\n* use the auth command and the --key or -k option to declare your API key`
      )
    )

    return false
  } else {
    return true
  }
}
