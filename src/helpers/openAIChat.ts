import axios, { AxiosError } from 'axios'
import type { OpenAIChatProps } from '../typings/OpenAI'

export const openAIChat = async ({ text, method, key }: OpenAIChatProps) => {
  try {
    const chatBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: text
        }
      ]
    }

    const response = await axios(`https://api.openai.com/v1/chat/completions`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`
      },
      data: JSON.stringify(chatBody)
    })

    return {
      data: response.data.choices[0].message.content
    }
  } catch (error) {
    const axiosError = error as AxiosError
    return {
      error: axiosError.response?.statusText
    }
  }
}
