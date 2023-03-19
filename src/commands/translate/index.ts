import { Command } from 'commander'
import { translateAction } from './translateAction'
import type { GeneralOptions } from '../../typings/General'

export const translate = new Command()
  .command('translate')
  .description('enter a text and the language you want to translate it into')
  .option('-t, --text <string>', 'text to be translated')
  .option('-l, --language <string>', 'language to translate the text')
  .action((options: GeneralOptions) => translateAction(options))
