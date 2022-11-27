import React from 'react'
import SearcherFilter from './SearcherFilter'
import SearchBar from './SearchBar'
import Catalog from './Catalog'

function Searcher() {
    return (
        <div className='flex gap-10 justify-center px-10'>
            <div className='flex flex-col w-fit items-stretch gap-10'>
                <SearchBar />
                <SearcherFilter />
            </div>
            <Catalog />
        </div>
    )
}

export default Searcher