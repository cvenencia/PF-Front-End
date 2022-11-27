import React from 'react'
import { Link } from 'react-router-dom'
import ListEventItem from '../components/addevent/ListEventItem'
import InputPurple from '../components/common/InputPurple'

function AddEvent() {
    return (
        <div className='h-screen flex justify-center items-center '>
            <div className='bg-[#2C2C2D] w-[1000px] h-[600px] flex rounded-2xl py-5 px-5'>
                <div className='flex flex-col items-center w-fit pr-5 pl-5'>
                    <h1 className='text-white text-2xl font-bold pr-16'>Eventos</h1>
                    <ul className='mt-5 overflow-y-auto pr-10 scrollbar-thin scrollbar-thumb-[#424242] scrollbar-track-[#C0C0C0]
                    scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                                return (
                                    <ListEventItem key={index} title={'Maneskin, Loud Kis Get Louder Tour 2022'} selected={false} />
                                )
                            })
                        }
                        <Link className='bg-[#06D6A0] flex justify-center items-center w-[185px] min-h-[38px] rounded-lg green_shadow hover:bg-[#00C592] active:bg-[#00AF82] my-5'>
                            <p className='text-white font-semibold'>
                                Agregar evento
                            </p>
                        </Link>
                    </ul>
                </div>
                <div className='px-10 flex flex-col justify-between mt-16 w-full '>
                    <div className='flex flex-col gap-5'>
                        <InputPurple name={'Titulo'} placeholder={'Titulo'} type={'text'} value={''} onChange={() => { }} />
                        <InputPurple name={'Imagen (URL)'} placeholder={'URL'} type={'text'} value={''} onChange={() => { }} />
                        <div className='flex w-full justify-between gap-10'>
                            <InputPurple name={'Ubicación'} placeholder={'Ubicación'} type={'text'} value={''} onChange={() => { }} />
                            <InputPurple name={'Fecha'} placeholder={'Fecha'} type={'date'} value={''} onChange={() => { }} />
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='flex gap-3'>
                            <Link className='bg-[#06D6A0] flex justify-center items-center w-[100px] min-h-[38px] rounded-lg green_shadow hover:bg-[#00C592] active:bg-[#00AF82] my-5'>
                                <p className='text-white font-semibold'>
                                    Guardar
                                </p>
                            </Link>
                            <Link className='bg-[#FFD166] flex justify-center items-center w-[100px] min-h-[38px] rounded-lg yellow_shadow hover:bg-[#FFC24C] active:bg-[#FFB53D] my-5'>
                                <p className='text-white font-semibold'>
                                    Cancelar
                                </p>
                            </Link>
                        </div>
                        <Link className='bg-[#FF6B6B] flex justify-center items-center w-[100px] min-h-[38px] rounded-lg red_shadow hover:bg-[#FF4F4F] active:bg-[#FF3A3A] my-5'>
                            <p className='text-white font-semibold'>
                                Eliminar
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEvent