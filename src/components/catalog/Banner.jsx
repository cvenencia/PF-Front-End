import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className='py-20 flex justify-around w-screen min-h-screen items-center gradient_banner '>
            <div>
                <h1 className='text-white font-bold text-9xl w-[650px] animate_entrance_1'>
                    Music of Spheres
                </h1>
                <h2 className='text-[#8968FA] text-4xl font-bold purple_text_shadow mt-5 ml-2 animate_entrance_2'>
                    World Tour
                </h2>
                <div className='mt-10 animate_entrance_3'>
                    <div className='border-2 border-[#F49CB1] w-[280px] h-[55px] relative rounded-lg bg-[#49A1FE] bg-opacity-30'>

                    </div>
                    <Link>
                        <div className='relative -top-12 -right-2 w-[280px] h-[55px] bg-[#EF476F] rounded-lg flex justify-center items-center active:bg-[#BC3858] hover:bg-[#CD3E60] hover:-left-0 hover:-top-14 transition-all'>
                            <Link to={'/event'}>
                                <p className='text-white text-xl font-bold'>
                                    ¡OBTEN TU BOLETA YA!
                                </p>
                            </Link>
                        </div>
                    </Link>
                </div>
            </div >
            <img className='h-[500px] w-auto rounded-xl' src="Banner.png" alt="" />
        </div >
    )
}

export default Banner