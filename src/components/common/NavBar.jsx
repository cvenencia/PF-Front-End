import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ onTop }) {
    // Fixed on top
    return (
        <div className={'fixed flex justify-between w-screen px-5 py-2  items-center h-fit z-10 ' + (onTop ? 'bg-transparent' : 'bg-black')}>
            <Link to={'/'}>

                <img className='w-[71px] h-[54px]' src="Logo.png" alt="" />
            </Link>
            {
                (true) ? (
                    <div className='px-5'>
                        <Link className='bg-[#06D6A0] flex justify-center items-center w-[130px] h-[35px] rounded-lg green_shadow hover:bg-[#00C592] active:bg-[#00AF82]'>
                            <p className='text-white font-semibold'>
                                Iniciar sesión
                            </p>
                        </Link>
                    </div>
                ) : (
                    <div className='flex gap-10 px-5'>
                        {
                            (true) ? (
                                <Link className=''>
                                    <p className='text-white font-semibold hover:text-[#06D6A0] hover:underline'>
                                        Agregar cuenta
                                    </p>
                                </Link>
                            ) : (
                                null
                            )
                        }
                        <Link className=''>
                            <p className='text-white font-semibold hover:text-[#FFD166] hover:underline'>
                                Mi perfil
                            </p>
                        </Link>
                    </div>
                )
            }

        </div>
    )
}

export default NavBar