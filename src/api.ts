import axios from "axios"

export type ApiResponse = {
    choices: {
      text: string
    }[]
  }

export const sendMessage = (text: string) => {
    return axios.post<ApiResponse>('/v1/engines/text-curie-001/completions', {
        "prompt": text,
        "temperature": 0.5,
        "max_tokens": 64,
        "top_p": 1.0,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.0
       })
}