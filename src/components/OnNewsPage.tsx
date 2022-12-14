import React from 'react'
import { useAppSelector } from '../Redux/store'
import { Link } from 'react-router-dom'
import '../CSS/on-news-page.scss'

const OnNewsPage: React.FC = () => {

    const theme = useAppSelector(state => state.redux.theme_mode)

    return (
        <div className={`on-news-page on-news-page-${theme}`}>
            <Link to='/news'>
                <span>crypto news</span>
            </Link>
        </div>
    )
}

export default OnNewsPage;