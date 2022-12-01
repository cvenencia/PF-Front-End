import React from 'react'

function PageSlide({ page, setPage, pages }) {
    return (
        <div className='flex gap-3 self-start'>
            <button className='w-10 h-10 bg-[#1B1C1E] rounded-full border border-[#8843E1] purple_shadow flex justify-center items-center hover:scale-105 transition-all' onClick={
                () => {
                    if (page > 1) {
                        setPage(page - 1)
                    }
                }
            }>
                <img className='aspect-square' src="/LeftArrow.svg" alt="" />
            </button>
            {
                [...Array(pages)].map((_, i) => (
                    <button
                        key={i}
                        className={page === i + 1 ?
                            'w-10 h-10 bg-[#2C2C2D] rounded-full border border-[#ACACAC] font-bold text-lg flex justify-center items-center text-white' :
                            'w-10 h-10 bg-[#1B1C1E] rounded-full border border-[#545454] flex justify-center items-center font-bold text-lg text-[#545454] hover:bg-[#28292c] '}
                        onClick={() => setPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))
            }
            <button className='w-10 h-10 bg-[#1B1C1E] rounded-full border border-[#8843E1] purple_shadow flex justify-center items-center hover:scale-105 transition-all' onClick={
                () => {
                    if (page < pages) {
                        setPage(page + 1)
                    }
                }
            }>
                <img className=' aspect-square' src="/RightArrow.svg" alt="" />
            </button>
        </div>
    )
}

export default PageSlide