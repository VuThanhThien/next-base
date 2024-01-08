import { axios } from '@/libs/axios'
import { BaseResponse } from '@/types/root-types'
import { UseQueryOptions, useQuery } from 'react-query'

interface IGetAvailableMeetingSchedule {
  timeMin: string
  timeMax: string
}

export const getAvailableMeetingScheduleApi = (payload: IGetAvailableMeetingSchedule): Promise<BaseResponse> => {
  return axios.get('/meeting-requests', {
    params: { ...payload },
  })
}

type QueryFnType = typeof getAvailableMeetingScheduleApi

export const getAvailableMeetingSchedule = (params: IGetAvailableMeetingSchedule, config?: UseQueryOptions<any>) => {
  return useQuery({
    queryKey: ['getAvailableMeetingSchedule', params],
    queryFn: () => getAvailableMeetingScheduleApi(params),
    ...config,
  })
}
