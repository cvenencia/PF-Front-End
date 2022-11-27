import React from 'react'

function FooterContactanos({ name, url }) {
    return (
        <li className='text-white font-semibold text-xl flex items-center gap-2'>
            <a href={url}>
                <img className='w-[40px] h-[40px]' src={name + ".svg"} alt="" />
            </a>
            <p className='opacity-70'>
                {name}
            </p>
        </li>
    )
}

export default FooterContactanos