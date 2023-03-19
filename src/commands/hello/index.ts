import { Command } from 'commander'

interface HelloProps {
  name: string
}

export const hello = new Command()
  .command('hello')
  .description('enter your name to receive a greeting')
  .alias('hl')
  .action(({ name }: HelloProps) => console.log(`Hello, ${name}!`))
