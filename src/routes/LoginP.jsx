import React from 'react'
import Inputlogin from '../components/login/Inputlogin';
import Checkbox from '../components/login/Checkbox';
import { Link } from 'react-router-dom'

function LoginP() {
    return (
        <div className='h-screen flex justify-center items-center '>
            <div className='bg-[#2C2C2D] w-[510px] h-[505px] flex rounded-2xl  px-5  justify-center '>
                <div className='flex flex-col mt-4'>
                    <h1 className='font-bold text-[60px] text-white mb-2  text-center'>
                    Inicia Sesión
                    </h1>
                    <div className="flex flex-row justify-center mb-2">
                        <Checkbox name={'Comprador'} />
                        <Checkbox name={'Vendedor'}/>
                    </div>
                    <Inputlogin name={'Usuario'} placeholder={'JaneDoe23'} type={'text'} />
                    <Inputlogin name={'Contraseña'} placeholder={'**************'} type={'text'} />
                    <div className='flex flex-col w-full '> 
                            <p className="text-white">¿No tienes una cuenta? 
                            <Link className='' to={'/register'}>
                            <a className='ml-1 text-[#EF476F] font-semibold hover:text-[#EF476F] hover:none'>
                               Registrate
                            </a>
                        </Link>
                            
                            </p>
                     </div>

                     <div className='flex flex-col w-full mt-4'>
                         <button className='bg-[#06D6A0] green_shadow rounded-lg w-[343px] h-[52.46px] text-white font-bold text-lg'>Iniciar Sesión</button>
                     </div>
                </div>

               




            </div>


        </div>
       
    
    );
}

export default LoginP;