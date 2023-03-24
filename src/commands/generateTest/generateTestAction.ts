import type { GeneralOptions } from '../../typings/General'
import { isAuthenticated } from '../../helpers/isAuthenticated'
import fs from 'fs'
import path from 'path'
import {
  extractCodeFromFile,
  extractCodeFromString
} from '../../helpers/extractCode'
import { config } from '../../helpers/authSystem'
import { openAIChat } from '../../helpers/openAIChat'
import { red, yellow, green } from 'kleur/colors'

export const generateTestAction = async (options: GeneralOptions) => {
  const componentName = options[Object.keys(options)[0]]
  const componentPath = options[Object.keys(options)[1]]
  const testLibrary = options[Object.keys(options)[2]]
  const componentExtension = path.extname(componentPath)

  // verify authentication
  const isAuth = await isAuthenticated()
  if (!isAuth) return

  if (!componentName || !componentPath) {
    return console.log(
      red(`\nYou did not enter the expected component name or path!`),
      yellow(
        `\n* use --component or -c to declare component name\n* use --path or -p to declare component path\nuse --library or -l to declare the desired test library`
      )
    )
  }

  // read the contents of the component file
  const componentCode = extractCodeFromFile(componentPath)

  if (!componentCode) {
    return console.log(
      red(`\nI didn't find your component. Check the path and try again!`),
      yellow(`\nexample path: ./src/components/MyComponent/index.tsx`)
    )
  }

  // generate test code
  const params = {
    text: `Create the code with test (containing all necessary imports) in ${
      testLibrary ? testLibrary : 'Jest'
    } in code form based on the following component:\n${componentCode}`,
    method: 'POST',
    key: config.apiKey
  }

  const openAIChatResponse = await openAIChat(params)
  const testCode = extractCodeFromString(openAIChatResponse.data)

  if (!testCode) {
    return console.log(
      red(
        `\nUnable to generate a test. Check the component code and try again!`
      )
    )
  }
  // get component folder path
  const componentFolderPath = componentPath.split('/').slice(0, -1).join('/')

  // save the test code to a new file
  const testFilePath = `${componentFolderPath}/${componentName}.test${componentExtension}`
  fs.writeFileSync(testFilePath, testCode)

  console.log(
    green(`\nTest generated successfully in: ${testFilePath}`),
    yellow(
      `\nif you don't like the generated test, you can run the command again to generate another one over the previous one`
    )
  )
}
