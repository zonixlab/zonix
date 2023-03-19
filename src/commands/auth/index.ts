import { Command } from 'commander'
import { config } from '../../config'

interface AuthProps {
  apiKey: string
}

export const auth = new Command()
  .command('auth')
  .description('sign in with your OpenAI API key to authenticate')
  .option('-k, --key <key>', 'your OpenAI API key')
  .alias('a')
  .action(({ apiKey }: AuthProps) => {
    if (!apiKey)
      return console.log(
        'use the -k or --apiKey option to declare your API key'
      )

    config.apiKey = apiKey
    console.log(`Your apiKey: ${apiKey}`)
  })
