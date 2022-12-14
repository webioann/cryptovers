import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { INewsResponse } from '../Types/news.types'

interface INewsRequestParams {
    newsCategory: string | undefined
    count: 3 | 6 | 12
}

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bing-news-search1.p.rapidapi.com'
    }),
    endpoints: builder => ({
        // data for seven trending coins
        getNews: builder.query<INewsResponse, INewsRequestParams | undefined>({
            query: (params: INewsRequestParams) => ({
                url: `/news/search`,
                params: {
                    q: params.newsCategory,
                    count: params.count,
                    freshness: 'Day',
                    textFormat: 'Raw',
                    safeSearch: 'Off'
                },
                headers: {
                    'X-BingApis-SDK': 'true',
                    'X-RapidAPI-Key': 'b5630f9220msh48dcfd94725e69bp1ef056jsn1e6f0c739872',
                    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
                },
            }),
        })
    }), 
})

export const { useGetNewsQuery } = newsApi;
