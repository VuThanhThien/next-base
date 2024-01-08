import { axios } from '@/libs/axios'
import { ExtractFnReturnType, QueryConfig } from '@/libs/react-query'
import { format } from 'date-fns'
import { useQuery } from 'react-query'

export type QueryDto = {
  config?: QueryConfig<QueryFnType>
}

type blogCategoriesList =
  | {
      id: string
      title: string
      date: string
      img: string
    }[]
  | undefined

export const queryFunc = async (): Promise<blogCategoriesList> => {
  const data: any = await axios.get('/blog?pageSize=6&isFeatured=true')
  const formattedData = data.results.map((item: any) => {
    return {
      id: item.id,
      title: item.properties.Name.title[0]?.plain_text,
      date: format(new Date(item.created_time), 'MMM dd, yyyy'),
      img: item.cover?.file?.url || item.cover?.external.url,
    }
  })
  return formattedData
}

type QueryFnType = typeof queryFunc

export const useLatestBlogs = () => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['useBlogLastestPostItem'],
    queryFn: () => queryFunc(),
  })
}
