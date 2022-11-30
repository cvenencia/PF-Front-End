import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { login, register } from '../../api/user'


function NavBar({ onTop }) {

    const { user, setUser } = useContext(UserContext)

    const tempIniciarSeasion = () => {
        // entrar como comprador
        // register('admin', 'admin', 'buyer')
        // setUser(login('admin', 'admin'))

        //entrar como vendedor
        console.log('entrar como vendedor')
        register('admin', 'admin', 'seller')
        setUser(login('admin', 'admin'))
    }

    return (
        <div className={'fixed flex justify-between w-screen px-5 py-2  items-center h-fit z-10 ' + (onTop ? 'bg-transparent' : 'bg-black')}>
            <Link to={'/'}>

                <img className='w-[71px] h-[54px]' src="Logo.png" alt="" />
            </Link>
            {
                (!user) ? (

                    <div className='px-5'>
                        <Link to={'/login'}>
                        <button className='bg-[#06D6A0] flex justify-center items-center w-[130px] h-[35px] rounded-lg green_shadow hover:bg-[#00C592] active:bg-[#00AF82]' onClick={tempIniciarSeasion}>
                            <p className='text-white font-semibold'>
                                Iniciar sesión
                            </p>
                        </button>
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