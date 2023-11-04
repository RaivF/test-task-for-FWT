import { useState, type FC } from 'react'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import useFetchPaintings, { getPaintings } from '@/src/api/useFetchPaintings'
import useFetchAuthors, { getAuthors } from '@/src/api/useFetchAuthors'
import useFetchLocations, { getLocations } from '@/src/api/useFetchLocations'
import Image from 'next/image'
import { useRouter } from 'next/router'

const PaintingPage: FC = () => {
  const router = useRouter()
  const { paintingId } = router.query

  return <div>{paintingId}</div>
}

export default PaintingPage
