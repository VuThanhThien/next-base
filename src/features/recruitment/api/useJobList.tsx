import { axios } from '@/libs/axios'
import { ExtractFnReturnType, QueryConfig } from '@/libs/react-query'
import { useQuery } from 'react-query'

export type QueryDto = {
  config?: QueryConfig<QueryFnType>
}

export interface IRecruitmentItemType {
  id: string
  name: string
  summary: string
  category: string
  img: string
}

export const queryFunc = async (url: string): Promise<IRecruitmentItemType[]> => {
  const data: any = await axios.get(`/recruitment?category=${url}`)
  const formattedData = data.map((data: any) => {
    return {
      id: data.id,
      name: data.properties.name,
      summary: data.properties.summary,
      category: data.properties.category,
      img: data.properties.cover,
    }
  })
  return formattedData
}

type QueryFnType = typeof queryFunc

export const useJobList = (url: string) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [url],
    queryFn: () => queryFunc(url),
  })
}
