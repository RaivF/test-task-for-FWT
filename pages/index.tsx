import { useState, type FC } from 'react'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import useFetchPaintings, { getPaintings } from '@/src/api/useFetchPaintings'
import useFetchAuthors, { getAuthors } from '@/src/api/useFetchAuthors'
import useFetchLocations, { getLocations } from '@/src/api/useFetchLocations'

import { useRouter } from 'next/router'
import styles from './index.module.scss'
import {debounce} from "next/dist/server/utils";
import PaintingsFilters from "@/src/components/PaintingsFilters/PaintingsFilters";
import Head from "next/head";
import ListCardsPaintings from "@/src/components/ListCardsPaintings/ListCardsPaintings";

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  try {
    await Promise.all([
      await queryClient.prefetchQuery({
        queryKey: ['paintings', 1, {}],
        queryFn: () => getPaintings({ page: 1 }),
      }),
      await queryClient.prefetchQuery({
        queryKey: ['authors'],
        queryFn: getAuthors,
      }),
      await queryClient.prefetchQuery({
        queryKey: ['locations'],
        queryFn: getLocations,
      }),
    ])
    const paintings = queryClient.getQueryData(['paintings', 1, {}])

    if (!paintings) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      }
    }

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: 1800,
    }
  } catch (error) {
    console.log(error)

    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
}

const HomePage: FC = () => {
  const [page, setPage] = useState<number>(1)

  const { data: authors } = useFetchAuthors()
  const { data: locations } = useFetchLocations()
  const { data: paintings, isFetching } = useFetchPaintings({
    page,
  })


  return (
    <div className={styles.container}>

      <PaintingsFilters paintings={paintings || undefined} authors={authors || undefined} locations={locations || undefined}/>
      <div className={styles.test}>
      <ListCardsPaintings paintings={paintings} authors={authors} locations={locations}/>

      <div className={styles.navButton}>
        <button className={styles.navButtonFirst}>{'<<'}</button>
        <button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 1}> {'<'}</button>{' '}

        <span>{page}</span>
        <button onClick={() => {setPage((old) => old + 1)}}> {'>'} </button>
        {isFetching ? <span> Loading...</span> : null}{' '}
        <button className={styles.navButtonLast}>{'>>'}</button>
      </div>
      </div>
    </div>
  )
}

export default HomePage
