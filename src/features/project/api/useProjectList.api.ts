import { axios } from '@/libs/axios'
import { ExtractFnReturnType, QueryConfig } from '@/libs/react-query'
import { ProjectEntity } from '@/types/root-types'
import { useQuery } from 'react-query'

export type QueryDto = {
  config?: QueryConfig<QueryFnType>
}

export const queryFunc = async (): Promise<ProjectEntity[]> => {
  return await axios.get(`/projects`)
}

type QueryFnType = typeof queryFunc

export const useProjectList = () => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['useProjectList'],
    queryFn: () => queryFunc(),
  })
}
