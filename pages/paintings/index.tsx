import { useState, type FC } from 'react'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import useFetchPaintings, { getPaintings } from '@/src/api/useFetchPaintings'
import useFetchAuthors, { getAuthors } from '@/src/api/useFetchAuthors'
import useFetchLocations, { getLocations } from '@/src/api/useFetchLocations'
import Image from 'next/image'
import { useRouter } from 'next/router'

const PaintingsPage: FC = () => {
  return <div>All paintings</div>
}

export default PaintingsPage
