import type { GeneralOptions } from '../../typings/General'
import { isAuthenticated } from '../../helpers/isAuthenticated'
import fs from 'fs'
import { extractCode } from '../../helpers/extractCode'
import { config } from '../../helpers/authSystem'
import { openAIChat } from '../../helpers/openAIChat'
import { red, yellow, green } from 'kleur/colors'

export const generateTestAction = async (options: GeneralOptions) => {
  const componentName = options[Object.keys(options)[0]]
  const componentPath = options[Object.keys(options)[1]]

  // verify authentication
  const isAuth = await isAuthenticated()
  if (!isAuth) return

  if (!componentName || !componentPath) {
    return console.log(
      red(`\nYou did not enter the expected component name or path!`),
      yellow(
        `\n* use --component or -c to declare component name\n* use --path or -p to declare component path`
      )
    )
  }

  // read the contents of the component file
  const componentCode = fs.readFileSync(componentPath, 'utf-8')

  // generate test code
  const params = {
    text: `Give me the test code in Jest based on the following component: ${componentCode}`,
    method: 'POST',
    key: config.apiKey
  }

  const openAIChatResponse = await openAIChat(params)
  const testCode = extractCode(openAIChatResponse.data)

  if (!testCode) {
    return console.log(
      red(`\nWe were unable to generate a test for your component. Try again!`)
    )
  }
  // get component folder path
  const componentFolderPath = componentPath.split('/').slice(0, -1).join('/')

  // save the test code to a new file
  const testFilePath = `${componentFolderPath}/${componentName}.test.js`
  fs.writeFileSync(testFilePath, testCode)

  console.log(
    green(`\nTest generated at ${testFilePath}`),
    yellow(
      `\n* if you don't like the generated test, you can run the command again to generate another one over the previous one`
    )
  )
}
