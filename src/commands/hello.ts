import { Command } from 'commander'

const program = new Command()

program
  .command('hello <string>')
  .description('enter your name to receive a greeting')
  .alias('hl')
  .action((name: string) => console.log(`Hello, ${name}!`))

program.parse()
