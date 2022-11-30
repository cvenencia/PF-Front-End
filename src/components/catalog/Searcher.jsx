import React from 'react'
import SearcherFilter from './SearcherFilter'
import SearchBar from './SearchBar'
import Catalog from './Catalog'
import { SearchProvider } from '../../contexts/SearchContext'

function Searcher() {
    return (
        <SearchProvider>
            <div className='flex gap-10 px-10 mb-10'>
                <div className='flex flex-col items-stretch gap-10'>
                    <SearchBar />
                    <SearcherFilter />
                </div>
                <Catalog />
            </div>
        </SearchProvider>
    )
}

export default Searcher