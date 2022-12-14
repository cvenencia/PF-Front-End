import React, { useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'

function SearchBar() {

    const { searchText, setSearchText } = useContext(SearchContext)

    return (
        <div className='flex gap-5 items-center'>
            <input type="text" placeholder='Escribe aquí...' className='w-[300px] rounded-full bg-transparent border border-gray-400 px-5 py-2 text-lg text-white' onChange={
                (e) => {
                    setSearchText(e.target.value)
                }
            } />
            <div className='rounded-full aspect-square h-12 green_shadow bg-[#06D6A0] hover:bg-[#00C592] active:bg-[#00AF82] flex items-center justify-center hover:cursor-pointer'>
                <img src="Search.png" alt="" />
            </div>
        </div>
    )
}

export default SearchBar