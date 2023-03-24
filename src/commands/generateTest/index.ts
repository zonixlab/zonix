import { Command } from 'commander'
import { generateTestAction } from './generateTestAction'
import type { GeneralOptions } from '../../typings/General'

export const generateTest = new Command()
  .command('generate-test')
  .description('enter the path of the component that will receive the test')
  .option('-c, --component <component>', 'component name')
  .option('-p, --path <path>', 'component path')
  .action((options: GeneralOptions) => generateTestAction(options))
