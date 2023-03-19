import { Command } from 'commander'
import { helloAction } from './helloAction'
import type { GeneralOptions } from '../../typings/General'

export const hello = new Command()
  .command('hello')
  .description('enter your name to receive a greeting')
  .option('-n, --name <string>', 'your name')
  .action((options: GeneralOptions) => helloAction(options))
