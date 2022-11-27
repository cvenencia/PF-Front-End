import React from 'react'
import { Link } from 'react-router-dom'

function CatalogCard({ image, month, day, title, ubication }) {
    return (
        <Link className='w-72 h-72 bg-white rounded-2xl overflow-hidden white_shadow hover:scale-105 transition-all' to={'/event'} >
            <div className='overflow-hidden h-44'>
                <img src={image} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='flex justify-center gap-5 px-5 py-4'>
                <div className='flex flex-col items-center'>
                    <p className='font-bold text-[#3D37F1] text-xs'>{month}</p>
                    <p className='text-3xl font-bold'>{day}</p>
                </div>
                <div>
                    <p className='text-md font-bold'>{title}</p>
                    <div className='flex gap-1 items-start mt-1'>
                        <img src="Location.png" alt="" className='w-6' />
                        <p className='text-xs font-bold text-[#6A6A6A]'>{ubication}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CatalogCard