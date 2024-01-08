import { axios } from '@/libs/axios'
import { ExtractFnReturnType, QueryConfig } from '@/libs/react-query'
import { ProjectEntity } from '@/types/root-types'
import { useQuery } from 'react-query'

export type QueryDto = {
  config?: QueryConfig<QueryFnType>
}

export const queryFunc = async (id: string | string[] | undefined): Promise<ProjectEntity> => {
  return await axios.get(`/projects/${id}`)
}

type QueryFnType = typeof queryFunc

export const useProjectDetail = (id: string | string[] | undefined) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['useProjectDetail' + id],
    queryFn: () => queryFunc(id),
    enabled: !!id,
  })
}
