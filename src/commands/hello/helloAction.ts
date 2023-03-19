import type { GeneralOptions } from '../../typings/General'
import kleur from 'kleur'

export const helloAction = (options: GeneralOptions) => {
  const name = options[Object.keys(options)[0]]

  if (!name) {
    return console.log(
      `Greetings, little ${kleur.green(
        'Jedi'
      )}. May the force be with you!\n\n* use --name or -n to declare your name and get a greeting `
    )
  }

  console.log(`Hello, ${kleur.green(name)}!`)
}
