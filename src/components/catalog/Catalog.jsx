import React, { useState, useEffect, useContext } from 'react'
import CatalogCard from './CatalogCard'
import { getCatalog } from '../../api/catalog'
import { SearchContext } from '../../contexts/SearchContext'
import { getMonth } from '../../api/util'
import PageSlide from './PageSlide'

function Catalog() {

    const { searchText, datePrev, dateNext } = useContext(SearchContext)

    const [catalog, setCatalog] = useState([])
    const [catalogFiltered, setCatalogFiltered] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)

    useEffect(() => {
        setCatalog(getCatalog())
        setCatalogFiltered(getCatalog())
        setPages(Math.ceil(getCatalog().length / 6))
    }, [])

    const getDate = (numberDay, month, year) => {
        month = month.toLowerCase();
        var months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
        month = months.indexOf(month) + 1;
        month = month < 10 ? '0' + month : month;
        return year + "-" + month + "-" + numberDay
    }

    useEffect(() => {
        if (searchText !== "") {
            setCatalogFiltered(catalog.filter(event => event.title.toLowerCase().includes(searchText.toLowerCase())))
            setPages(Math.ceil(catalog.filter(event => event.title.toLowerCase().includes(searchText.toLowerCase())).length / 6))
            setPage(1)
        } else {
            setCatalogFiltered(getCatalog())
            setPages(Math.ceil(getCatalog().length / 6))
            setPage(1)
        }
    }, [searchText])

    useEffect(() => {
        if (datePrev !== "" && dateNext !== "") {
            const temp = catalog.filter(event => {
                let date = new Date(getDate(event.numberDay, event.month, event.year))
                let datePrevDate = new Date(datePrev)
                let dateNextDate = new Date(dateNext)

                return date >= datePrevDate && date <= dateNextDate
            })
            setCatalogFiltered(temp)
            setPages(Math.ceil(temp.length / 6))
            setPage(1)
        } else if (datePrev !== "") {
            const temp = catalog.filter(event => {
                let date = new Date(getDate(event.numberDay, event.month, event.year))
                let datePrevDate = new Date(datePrev)

                return date >= datePrevDate
            })
            setCatalogFiltered(temp)
            setPages(Math.ceil(temp.length / 6))
            setPage(1)
        } else if (dateNext !== "") {
            const temp = catalog.filter(event => {
                let date = new Date(getDate(event.numberDay, event.month, event.year))
                let dateNextDate = new Date(dateNext)

                return date <= dateNextDate
            })
            setCatalogFiltered(temp)
            setPages(Math.ceil(temp.length / 6))
            setPage(1)
        } else {
            setCatalogFiltered(getCatalog())
            setPages(Math.ceil(getCatalog().length / 6))
            setPage(1)
        }
    }, [datePrev, dateNext])

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-wrap gap-10 mb-8 w-full'>
                {(catalogFiltered.length > 0) ? (
                    catalogFiltered.slice((page - 1) * 6, page * 6).map((item, index) => (
                        <CatalogCard key={index} image={item.image} month={item.month} day={item.numberDay} title={item.title} ubication={item.location} item={item} />
                    ))
                ) : (
                    <div className='w-full text-center'>
                        <p className='text-6xl text-white mt-10 opacity-70 '>No hay eventos disponibles</p>
                    </div>
                )
                }
            </div>
            <PageSlide page={page} setPage={setPage} pages={pages} />
        </div>
    )
}

export default Catalog