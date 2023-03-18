import { Command } from 'commander'

const program = new Command()

program
  .option(
    '-hl, --hello <string>',
    'Enter your name to receive a greeting',
    'little Jedi'
  )
  .parse()

const options = program.opts()
const hello = options.hello

console.log(`Hello, ${hello}!`)
