import React from 'react'
import InputFirst from '../components/register/InputFirst';
import InputB from '../components/register/InputB';
import Checkbox from '../components/login/Checkbox';

function Register() {
    return (
        <div className='h-screen flex justify-center items-center '>
                <div className='bg-[#1B1C1E] w-[700px] h-[630px] flex rounded-2xl  px-5  '>
                    <div className='flex flex-col mt-4'>
                        <h1 className='font-bold text-[50px] text-white mb-2 '>
                            Crea una cuenta
                        </h1>
                        <div className="flex flex-row justify-center mb-2">
                            <InputFirst name={'Nombre'} placeholder={'Jane'} type={'text'} />
                            <InputFirst name={'Apellido'} placeholder={'Doe'} type={'text'} />
        
                        </div>
                        <InputB name={'Email'} placeholder={'name@example.com'} type={'text'}/>
                        <InputB name={'Usuario*'} placeholder={'JaneDoe23'} type={'text'}/>
                        <InputB name={'Contraseña*'} placeholder={'*********'} type={'text'}/>
                        <InputB name={'Confirme su contraseña'} placeholder={'*********'} type={'text'}/>
                        <div className='flex flex-col w-full '> 
                                <p className="text-white">Tipo de cuenta:</p>
                        </div>

                        <div className="flex flex-row justify-center mb-2">
                            <Checkbox name={'Comprador'} />
                            <Checkbox name={'Vendedor'}/>
                        </div>

                     <div className='flex flex-col w-full mt-4 items-center'>
                         <button className='bg-[#06D6A0] green_shadow rounded-lg w-[343px] h-[52.46px] text-white font-bold text-lg'>Registrarse</button>
                     </div>

                        

                    </div>
                    
                </div>
        </div>
    );
}

export default Register