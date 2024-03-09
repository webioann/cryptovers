interface ICryptoNews {
    url: string
    title: string
    description: string
    thumbnail: string
    createdAt: string
}
export type CryptoNewsResponse = {
    data: ICryptoNews []
}
export type newsProviderType = 
    | 'coindesk' 
    | 'cointelegraph' 
    | 'bitcoinist' 
    | 'decrypt'
    | 'bsc'
    | 'theguardian'
// TYPES FOR NEWS API ==========
interface IResult {
    response: string
    newsCount: number
}
interface INewsItem {
    Title: string
    Source: string
    Url: string
    PublishedOn: string
    Discription: string
    Language: string
    Image: string
    SourceNationality: string
    TitleSentiment: {
        sentiment: string
        score: number
    }
    Summary: string
    Countries: string[]
    CryptoCurrencies: string[]
}

type RawNewsApiResponse = {
    result: IResult
    news: INewsItem[]
}
