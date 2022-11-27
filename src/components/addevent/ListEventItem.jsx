import React from 'react'

function ListEventItem({ title, selected, onClick }) {
    return (
        <>
            <li className='mt-3 hover:cursor-pointer' onClick={onClick}>
                <div className={selected ? 'bg-[#4A4A4A] rounded-xl w-[190px] h-[53px] flex items-center justify-center text-center' : ' rounded-xl w-[190px] h-[53px] flex items-center justify-center text-center opacity-70'}>
                    <p className='text-white text-sm'>
                        {title}
                    </p>
                </div>
            </li>
            <hr className='mt-3 text-black bg-black border border-black' />
        </>
    )
}

export default ListEventItem