#!/usr/bin/env node
import { Command } from 'commander'
import { auth } from './commands/auth'
import { hello } from './commands/hello'

const program = new Command()

program.addCommand(auth)
program.addCommand(hello)

program.parse(process.argv)
