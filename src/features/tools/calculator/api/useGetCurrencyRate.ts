import { axios } from '@/libs/axios'
import { ExtractFnReturnType, QueryConfig } from '@/libs/react-query'
import { useQuery } from 'react-query'

export type QueryDto = {
  config?: QueryConfig<QueryFnType>
}

export type ExchangeRateType = {
  result: string
  documentation: string
  terms_of_use: string
  time_last_update_unix: number
  time_last_update_utc: string
  time_next_update_unix: number
  time_next_update_utc: string
  base_code: string
  conversion_rates: Record<string, number>
}
export const queryFunc = async (): Promise<ExchangeRateType> => {
  const data: ExchangeRateType = await axios.get('/exchange-rate')
  return data
}

type QueryFnType = typeof queryFunc

export const useGetCurrencyRate = () => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [],
    queryFn: () => queryFunc(),
  })
}
