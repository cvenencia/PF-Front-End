import React from 'react'
import FooterContactanos from './FooterContactanos'

function Footer() {
    return (
        <div className=' w-screen bg-[#1F1F1F] h-[280px] flex justify-between px-20 items-start pt-5 mt-auto'>
            <img src="Logo.png" alt="" />
            <div className='flex gap-40'>
                <div>
                    <h1 className='text-white font-bold text-3xl'>
                        Contactanos
                    </h1>
                    <ul className='mt-3 ml-3 flex flex-col gap-2'>
                        <FooterContactanos name='Facebook' url='https://www.facebook.com/' />
                        <FooterContactanos name='Instagram' url='https://www.instagram.com/' />
                        <FooterContactanos name='Twitter' url='https://twitter.com/' />
                        <FooterContactanos name='TikTok' url='https://www.tiktok.com/' />
                    </ul>
                </div>
                <div>
                    <h1 className='text-white font-bold text-3xl mb-3'>Sobre nosotros</h1>
                    <ul>
                        <li className='text-white opacity-80 ml-3 text-xl'>
                            FRONTEND S.A.S
                        </li>
                        <li className='text-white opacity-80 ml-3 text-xl'>
                            NIT: 123456789
                        </li>
                        <li className='text-white opacity-80 ml-3 text-xl'>
                            Universidad del Norte
                        </li>
                        <li className='text-white opacity-80 ml-3 text-xl'>
                            Call Center (60-1) 000-0000 o #000
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer