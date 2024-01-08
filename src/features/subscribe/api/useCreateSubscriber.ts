import { HttpStatus } from '@/constants/httpStatus'
import useNotification from '@/hooks/useNotification'
import { axios } from '@/libs/axios'
import { MutationConfig } from '@/libs/react-query'
import { BaseResponse, SubscriberDto } from '@/types/root-types'
import { useMutation } from 'react-query'

const mutationFunc = (payload: SubscriberDto): Promise<BaseResponse> => {
  console.log('zzz', axios)
  return axios.post('/subscriber', payload)
}

type QueryFnType = typeof mutationFunc

export const useCreateSubscriberMutation = (config?: MutationConfig<QueryFnType>) => {
  const { showNotification } = useNotification()
  return useMutation({
    mutationFn: mutationFunc,
    onError: (err: any) => {
      if (err.response.data.statusCode === HttpStatus.BAD_REQUEST) {
        showNotification({ msg: err.response.data.message, variant: 'warning' })
      } else {
        showNotification({ msg: err.response.data.message, variant: 'error' })
      }
    },
    onSuccess: data => console.log({ data }),
    ...config,
  })
}
