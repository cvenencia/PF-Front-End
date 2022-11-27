import React from 'react'

function SearcherFilter() {
    return (
        <div className='w-fit h-fit bg-[#303030] rounded-lg flex flex-col items-center px-5 py-3'>
            <h1 className='font-bold text-2xl text-white opacity-70 mb-3'>
                Filtros
            </h1>
            <ul>
                <li>
                    <h2 className='text-white font-semibold mb-2'>
                        Fecha
                    </h2>
                    <div className='flex'>
                        <input type="date" className='rounded-md bg-[#464646] text-white text-center' />
                        <p className='text-3xl text-white px-2'>-</p>
                        <input className='rounded-md bg-[#464646] text-white text-center' type="date" />
                    </div>
                </li>
                {/* <li>
                    <h2 className='text-white font-semibold mt-5 mb-2'>
                        Precio
                    </h2>
                    <input type="numeric" />

                </li> */}
            </ul>
        </div>
    )
}

export default SearcherFilter