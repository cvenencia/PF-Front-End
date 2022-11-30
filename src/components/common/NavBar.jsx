import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

function NavBar({ onTop }) {

    const { user, setUser } = useContext(UserContext)

    return (
        <div className={'fixed flex justify-between w-screen px-5 py-2  items-center h-fit z-10 ' + (onTop ? 'bg-transparent' : 'bg-black')}>
            <Link to={'/'}>

                <img className='w-[71px] h-[54px]' src="Logo.png" alt="" />
            </Link>
            {
                (!user) ? (
                    <div className='px-5'>
                        <Link className='bg-[#06D6A0] flex justify-center items-center w-[130px] h-[35px] rounded-lg green_shadow hover:bg-[#00C592] active:bg-[#00AF82]' to={'/login'}>
                            <p className='text-white font-semibold'>
                                Iniciar sesión
                            </p>
                        </Link>
                    </div>
                ) : (
                    <div className='flex gap-10 px-5'>
                        {
                            (user.type == 'seller') && (
                                <Link className='' to={'/addevent'}>
                                    <p className='text-white font-semibold hover:text-[#06D6A0] hover:underline' >
                                        Agregar evento
                                    </p>
                                </Link>
                            )
                        }
                        <button onClick={
                            () => {
                                setUser(null)
                            }
                        }>
                            <p className='text-white font-semibold hover:text-[#ff6666] hover:underline'>
                                Cerrar sesión
                            </p>
                        </button>
                    </div>
                )
            }

        </div>
    )
}

export default NavBar