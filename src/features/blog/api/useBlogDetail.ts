import { axios } from '@/libs/axios'
import { ExtractFnReturnType, QueryConfig } from '@/libs/react-query'
import { NotionBlock } from '@9gustin/react-notion-render'
import { useQuery } from 'react-query'

export type QueryDto = {
  config?: QueryConfig<QueryFnType>
}

interface IGetBlogResponse {
  metadata: any
  results: NotionBlock[]
}

export const queryFunc = (slug: string | string[] | undefined): Promise<IGetBlogResponse> => {
  return axios.get(`/blog/${slug}`)
}

type QueryFnType = typeof queryFunc

export const useBlogDetail = (slug: string | string[] | undefined) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['useBlogDetail' + slug],
    queryFn: () => queryFunc(slug),
    enabled: !!slug,
  })
}
