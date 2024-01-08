import { axios } from '@/libs/axios'

export const useSendCV = async (file: File) => {
  try {
    const formData = new FormData()
    formData.append('file', file)
    const response = await axios.post('/storage/upload', formData)
    return response
  } catch (error) {
    console.error(error)
  }
}
