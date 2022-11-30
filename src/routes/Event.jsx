import React, { useLayoutEffect, useState, useContext } from 'react'
import { EventContext } from '../contexts/EventContext'

function Event() {

    const { event } = useContext(EventContext)
    const [quantity, setQuantity] = useState(1)

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className=' flex justify-center gap-10 rounded-2xl px-10 py-20 '>
            <div className='rounded-2xl'>
                <img src={event.image} alt="" className='w-[700px]' />
            </div>
            <div>
                <h1 className='text-6xl text-white font-bold w-[30vw]'>
                    {event.title}
                </h1>
                <p className='text-white'>
                    {event.month} {event.numberDay}, {event.year}
                </p>
                <div className='flex items-center'>
                    <img src="Location.png" alt="" />
                    <p className='text-white'>
                        {event.location}
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