import type { GeneralOptions } from '../../typings/General'

export const helloAction = (options: GeneralOptions) => {
  const name = options[Object.keys(options)[0]]

  if (!name) {
    return console.log(
      `Greetings, little Jedi. May the force be with you!\n\n* use --name or -n to declare your name and get a greeting `
    )
  }

  console.log(`Hello, ${name}!`)
}
