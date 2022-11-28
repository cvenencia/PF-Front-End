import React, { useState, useEffect, useContext } from 'react'
import CatalogCard from './CatalogCard'
import { getCatalog } from '../../api/catalog'
import { SearchContext } from '../../contexts/SearchContext'
import { getMonth } from '../../api/util'

function Catalog() {

    const { searchText, datePrev, dateNext } = useContext(SearchContext)

    const [catalog, setCatalog] = useState([])
    const [catalogFiltered, setCatalogFiltered] = useState([])

    useEffect(() => {
        setCatalog(getCatalog())
        setCatalogFiltered(getCatalog())
    }, [])

    const getDate = (numberDay, month, year) => {
        month = month.toLowerCase();
        var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        month = months.indexOf(month) + 1;
        month = month < 10 ? '0' + month : month;
        return year + "-" + month + "-" + numberDay
    }

    useEffect(() => {
        if (searchText !== "") {
            setCatalogFiltered(catalog.filter(event => event.title.toLowerCase().includes(searchText.toLowerCase())))
        } else {
            setCatalogFiltered(getCatalog())
        }
    }, [searchText])

    useEffect(() => {
        if (datePrev !== "" && dateNext !== "") {
            setCatalogFiltered(catalog.filter(event => {
                let date = new Date(getDate(event.numberDay, event.month, event.year))
                let datePrevDate = new Date(datePrev)
                let dateNextDate = new Date(dateNext)

                return date >= datePrevDate && date <= dateNextDate
            }))
        } else if (datePrev !== "") {
            setCatalogFiltered(catalog.filter(event => {
                let date = new Date(getDate(event.numberDay, event.month, event.year))
                let datePrevDate = new Date(datePrev)

                return date >= datePrevDate
            }))
        } else if (dateNext !== "") {
            setCatalogFiltered(catalog.filter(event => {
                let date = new Date(getDate(event.numberDay, event.month, event.year))
                let dateNextDate = new Date(dateNext)

                return date <= dateNextDate
            }))
        } else {
            setCatalogFiltered(getCatalog())
        }
    }, [datePrev, dateNext])

    return (
        <div className='flex flex-wrap gap-10 mb-8 w-full'>
            {(catalogFiltered.length > 0) ? (
                catalogFiltered.map((item, index) => (
                    <CatalogCard key={index} image={item.image} month={item.month} day={item.numberDay} title={item.title} ubication={item.location} />
                ))
            ) : (
                <div className='w-full text-center'>
                    <p className='text-6xl text-white mt-10 opacity-70 '>No hay eventos disponibles</p>
                </div>
            )
            }
        </div>
    )
}

export default Catalog