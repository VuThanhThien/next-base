import useNotification from '@/hooks/useNotification'
import { axios } from '@/libs/axios'
import { MutationConfig } from '@/libs/react-query'
import { BaseResponse } from '@/types/root-types'
import { useMutation } from 'react-query'

const mutationFunc = ({
  file,
  folder,
  subfolder,
}: {
  file: File
  folder: string
  subfolder?: string
}): Promise<BaseResponse> => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('folder', folder)

  if (subfolder) {
    formData.append('subfolder', subfolder)
  }

  return axios.post('/storage/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

type QueryFnType = typeof mutationFunc

export const useUploadToDrive = (config?: MutationConfig<QueryFnType>) => {
  const { showNotification } = useNotification()
  return useMutation({
    mutationFn: mutationFunc,
    onError: (err: any) => showNotification({ msg: err.message, variant: 'error' }),
    ...config,
  })
}
