import { Command } from 'commander'
import { authAction } from './authAction'
import type { GeneralOptions } from '../../typings/General'

export const auth = new Command()
  .command('auth')
  .description('sign in with your OpenAI API key to authenticate')
  .option('-k, --key <key>', 'your OpenAI API key')
  .action((options: GeneralOptions) => authAction(options))
