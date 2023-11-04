import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {
    HydrationBoundary,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {useState} from 'react'
import Header from "@/src/components/layout/Header/Header";

export default function App({Component, pageProps}: AppProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: Infinity,
                    },
                },
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={pageProps.dehydratedState}>
                <Header/>
                <Component {...pageProps} />
            </HydrationBoundary>
        </QueryClientProvider>
    )
}
