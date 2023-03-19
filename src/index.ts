#!/usr/bin/env node
import { Command } from 'commander'
import { auth } from './commands/auth'
import { hello } from './commands/hello'
import { translate } from './commands/translate'

const program = new Command()

program.addCommand(auth)
program.addCommand(hello)
program.addCommand(translate)

program.parse(process.argv)
