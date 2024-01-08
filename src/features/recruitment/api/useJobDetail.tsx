import { axios } from '@/libs/axios'
import { ExtractFnReturnType, QueryConfig } from '@/libs/react-query'
import { useQuery } from 'react-query'

export type QueryDto = {
  config?: QueryConfig<QueryFnType>
}

export const queryFunc = async (pageId: string): Promise<{ metadata: any; results: any }> => {
  return axios.get(`/recruitment/${pageId}`)
}

type QueryFnType = typeof queryFunc

export const useRecruitmentDetail = (pageId: string) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['useRecruitmentTeamCard', pageId],
    queryFn: () => queryFunc(pageId),
  })
}
