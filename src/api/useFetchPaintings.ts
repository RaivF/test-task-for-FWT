import {
  UseQueryResult,
  keepPreviousData,
  useQuery,
} from '@tanstack/react-query'
import { axiosAPI } from './axiosInstances'
import { useRouter } from 'next/router'

export type ResultPaintings = {
  authorId: number
  created: string
  imageUrl: string
  name: string
  id: number
  locationId: number
}

type GetPaintingsProps = {
  page?: number
  query?: any
}

export const getPaintings = async ({
  page,
  query = {},
}: GetPaintingsProps): Promise<ResultPaintings[]> => {
  const { created, authorId, locationId /* q */ } = query
  const { data } = await axiosAPI.get('paintings', {
    params: {
      ...Object.assign(
        { _limit: 12},
          page && {_page: page},
        created && { created },
        authorId && { authorId },
        // q && { q },
        locationId && { locationId }
      ),
    },
  })

  return data
}

const useFetchPaintings = ({
  page,
}: GetPaintingsProps ={}): UseQueryResult<ResultPaintings[], Error> => {
  const { query } = useRouter()

  console.log('query', query)

  return useQuery({
    queryKey: ['paintings', page, query],
    queryFn: () => getPaintings({ page, query }),
  })
}

export default useFetchPaintings
