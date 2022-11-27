import React from 'react'
import CatalogCard from './CatalogCard'
import Event from '../../routes/Event'

function Catalog() {
    return (
        <div className='flex flex-wrap gap-10 mb-8 w-fit'>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <CatalogCard key={index} image={'Prueba3.png'} month={'OCT'} day={18} title={'Imagine Dragons, Mercury World Tour'} ubication={'Estadio Movistar Arena-Bogotá, Colombia'} />
                ))
            }
        </div>
    )
}

export default Catalog