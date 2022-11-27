import React, { useEffect, useState } from 'react'

function Event() {

    const [image, setImage] = useState('Prueba3.png')
    const [title, setTitle] = useState('Imagine Dragons, Mercury World Tour')
    const [quantity, setQuantity] = useState(1)
    const [location, setLocation] = useState('Estadio Movistar Arena-Bogotá, Colombia')
    const [month, setMonth] = useState('OCT')
    const [day, setDay] = useState(18)
    const [year, setYear] = useState(2022)

    return (
        <div className='my-36 flex justify-center gap-10 rounded-2xl px-10 py-20 '>
            <div className='rounded-2xl overflow-hidden'>
                <img src={image} alt="" className='w-[700px]' />
            </div>
            <div>
                <h1 className='text-6xl text-white font-bold w-[30vw]'>
                    {title}
                </h1>
                <p className='text-white'>
                    {month} {day}, {year}
                </p>
                <div className='flex items-center'>
                    <img src="Location.png" alt="" />
                    <p className='text-white'>
                        {location}
                    </p>
                </div>
                <div className='mt-10'>
                    <p className='text-[#FFD166] text-2xl font-semibold yellow_text_shadow'>
                        Cantidad
                    </p>
                    <div className='flex glass_background rounded-xl w-56 h-14 justify-between items-center px-5'>
                        <button onClick={() => {
                            if (quantity > 1) {
                                setQuantity(quantity - 1)
                            }
                        }
                        } className='text-4xl text-white hover:text-[#EF476F]'>-</button>
                        <p className='text-white text-3xl'>{quantity}</p>
                        <button onClick={() => setQuantity(quantity + 1)} className='text-4xl text-white hover:text-[#06D6A0]'>+</button>
                    </div>
                    <div className='w-56 h-14 bg-[#06D6A0] hover:bg-[#00C592] active:bg-[#00AF82] flex justify-center items-center green_shadow rounded-xl mt-5'>
                        <a href="#" className='text-white text-2xl'>
                            Comprar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event