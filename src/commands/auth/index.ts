import { Command } from 'commander'
import { authAction } from './authAction'
import type { AuthProps } from '../../typings/Auth'

export const auth = new Command()
  .command('auth')
  .description('sign in with your OpenAI API key to authenticate')
  .option('-k, --key <key>', 'your OpenAI API key')
  .alias('a')
  .action(({ apiKey }: AuthProps) => authAction({ apiKey }))
