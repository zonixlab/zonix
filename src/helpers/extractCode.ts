import fs from 'fs'

export const extractCodeFromFile = (path: string) => {
  try {
    return fs.readFileSync(path, 'utf-8')
  } catch {
    return
  }
}

export const extractCodeFromString = (string: string) => {
  const start = string.indexOf('```')

  if (start !== -1) {
    const end = string.indexOf('```', start + 3)

    if (end !== -1) {
      return string.substring(start + 3, end)
    }
  } else {
    const importIndex = string.indexOf('import')

    if (importIndex < 0) {
      return
    }

    const lastBracketIndex = string.lastIndexOf('}')

    if (lastBracketIndex < 0) {
      return
    }

    return string.substring(importIndex, lastBracketIndex + 1)
  }
}
