import useNotification from '@/hooks/useNotification'
import { axios } from '@/libs/axios'
import { MutationConfig } from '@/libs/react-query'
import { BaseResponse } from '@/types/root-types'
import { useMutation } from 'react-query'

type IPayload = {
  projectType: string
  deadline: string
  techStack: string
  requirement: string
}

const mutationFunc = (payload: IPayload): Promise<BaseResponse> => {
  return axios.post('/projects', payload)
}

type QueryFnType = typeof mutationFunc

export const useCreateProjectMutation = (config?: MutationConfig<QueryFnType>) => {
  const { showNotification } = useNotification()
  return useMutation({
    mutationFn: mutationFunc,
    onError: (err: any) => showNotification({ msg: err.message, variant: 'error' }),
    onSuccess: () => showNotification({ msg: 'Created project', variant: 'success' }),
    ...config,
  })
}
