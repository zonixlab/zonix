import type { GeneralOptions } from '../../typings/General'
import { isAuthenticated } from '../../helpers/isAuthenticated'
import { config } from '../../helpers/authSystem'
import { openAIChat } from '../../helpers/openAIChat'
import { yellow, green } from 'kleur/colors'

export const helloAction = async (options: GeneralOptions) => {
  const name = options[Object.keys(options)[0]]

  if (!name) {
    // verify authentication
    const isAuth = await isAuthenticated()
    if (!isAuth) return

    const params = {
      text: `Return me a random greeting from movies, cartoons or series`,
      method: 'POST',
      key: config.apiKey
    }

    const openAIChatResponse = await openAIChat(params)

    return console.log(
      green(`\n${openAIChatResponse.data}`),
      yellow(`\nuse --name or -n to declare your name and get a greeting`)
    )
  }

  console.log(green(`\nHello, ${name}!`))
}
