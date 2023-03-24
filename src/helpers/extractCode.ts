export const extractCode = (text: string) => {
  const regex = /```([\s\S]*?)```/
  const match = text.match(regex)

  if (!match) return

  return match[1]
}
