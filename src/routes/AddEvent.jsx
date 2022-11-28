import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import ListEventItem from '../components/addevent/ListEventItem'
import InputPurple from '../components/common/InputPurple'
import { getCatalog, createEvent, updateEvent, deleteEvent } from '../api/catalog'
import { UserContext } from '../contexts/UserContext'
import { nameOfMonth, formatDay } from '../api/util'

function AddEvent() {

    const { user } = useContext(UserContext)

    const [catalog, setCatalog] = useState([])
    const [selected, setSelected] = useState(1)
    const [creating, setCreating] = useState(false)
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState('')
    const [ubication, setUbication] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)
        setEditing(true)
    }

    const handleUbication = (e) => {
        setUbication(e.target.value)
        setEditing(true)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
        setEditing(true)
    }

    const handleImage = (e) => {
        setImage(e.target.value)
        setEditing(true)
    }

    const handleSave = () => {
        if (validateData()) {
            if (creating) {
                let day = date.split('-')[2]
                let month = date.split('-')[1]
                let year = date.split('-')[0]

                const dateFormated = new Date(year, month - 1, day)

                console.log(dateFormated)

                createEvent(user.id, title, dateFormated, ubication, image)
                setCatalog(getCatalog())
                setCreating(false)
            } else {
                const dateFormated = new Date(date)
                updateEvent(user.id, catalog[selected].id, { title, month: nameOfMonth(dateFormated.getMonth()), numberDay: formatDay(dateFormated.getDate()), year: dateFormated.getFullYear().toString(), location: ubication, image })
                setEditing(false)
            }
        }
    }

    const handleCancel = () => {
        if (creating && catalog.length > 0) {
            setCreating(false)
            setSelected(0)
        } else {
            setEditing(false)
        }
    }

    const handleDelete = () => {
        deleteEvent(user.id, catalog[selected].id)
        catalog.splice(selected, 1)
        setCatalog(catalog)
        setEditing(false)
        if (catalog.length > 0) {
            setSelected(0)
        } else {
            setSelected(-1)
        }
    }

    const validateData = () => {
        if (title == '' || ubication == '' || image == '') {
            return false
        }
        try {
            let dateFormated = new Date(date)
        } catch (e) {
            alert('La fecha no es valida')
            return false
        }
        return true
    }

    const handleSelect = (id) => {
        if (creating) {
            setCreating(false)
            setEditing(false)
        }
        setSelected(id)
    }

    const handleCreate = () => {
        setCreating(true)
        setSelected(-1)
        setTitle('')
        setUbication('')
        setDate('')
        setImage('')
    }

    const getDate = (numberDay, month, year) => {
        month = month.toLowerCase();
        var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        month = months.indexOf(month) + 1;
        month = month < 10 ? '0' + month : month;
        return year + "-" + month + "-" + numberDay
    }


    useEffect(() => {
        setCatalog(getCatalog())
        if (catalog.length < 1) {
            setCreating(true)
            setSelected(-1)
        } else {
            setCreating(false)
            setEditing(false)
            setSelected(1)
            setTitle(catalog[selected].title)
            setUbication(catalog[selected].location)
            setDate(getDate(catalog[selected].numberDay, catalog[selected].month, catalog[selected].year))
            setImage(catalog[selected].image)
        }
    }, [])

    useEffect(() => {
        if (catalog.length > 0 && selected > -1) {
            setTitle(catalog[selected].title)
            setUbication(catalog[selected].location)
            setDate(getDate(catalog[selected].numberDay, catalog[selected].month, catalog[selected].year))
            setImage(catalog[selected].image)
        } else if (catalog.length < 1) {
            setCreating(true)
            setSelected(-1)
            setTitle('')
            setUbication('')
            setDate('')
            setImage('')
        }
    }, [selected, editing, catalog])

    return (
        <div className='h-screen flex justify-center items-center '>
            <div className='bg-[#2C2C2D] w-[1000px] h-[600px] flex rounded-2xl py-5 px-5'>
                <div className='flex flex-col items-center w-fit pr-5 pl-5'>
                    <h1 className='text-white text-2xl font-bold pr-16'>Eventos</h1>
                    <ul className='mt-5 overflow-y-scroll pr-10 scrollbar-thin scrollbar-thumb-[#424242] scrollbar-track-[#C0C0C0]
                    scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
                        {
                            catalog.map((item, index) => {
                                return (
                                    <ListEventItem key={index} title={item.title} selected={selected === index} index={index} onClick={handleSelect} />
                                )
                            })
                        }
                        <button className={creating ? 'bg-[#06D6A0] flex justify-center items-center w-[185px] min-h-[40px] rounded-lg green_shadow hover:bg-[#00C592] active:bg-[#00AF82] my-5' : 'bg-transparent flex justify-center items-center w-[185px] min-h-[40px] rounded-lg green_shadow border border-[#06D6A0] my-5'} onClick={handleCreate}>
                            <p className='text-white font-semibold'>
                                Agregar evento
                            </p>
                        </button>
                    </ul>
                </div>
                <div className='px-10 flex flex-col justify-between mt-16 w-full '>
                    <div className='flex flex-col gap-5'>
                        <InputPurple name={'Titulo'} placeholder={'Titulo'} type={'text'} value={title} onChange={handleTitle} />
                        <InputPurple name={'Imagen (URL)'} placeholder={'URL'} type={'text'} value={image} onChange={handleImage} />
                        <div className='flex w-full justify-between gap-10'>
                            <InputPurple name={'Ubicación'} placeholder={'Ubicación'} type={'text'} value={ubication} onChange={handleUbication} />
                            <InputPurple name={'Fecha'} placeholder={'Fecha'} type={'date'} value={date} onChange={handleDate} />
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='flex gap-3'>
                            {
                                (creating || editing) && (
                                    <>
                                        <button className='bg-[#06D6A0] flex justify-center items-center w-[100px] min-h-[38px] rounded-lg green_shadow hover:bg-[#00C592] active:bg-[#00AF82] my-5' onClick={handleSave}>
                                            <p className='text-white font-semibold'>
                                                Guardar
                                            </p>
                                        </button>
                                        <button className='bg-[#FFD166] flex justify-center items-center w-[100px] min-h-[38px] rounded-lg yellow_shadow hover:bg-[#FFC24C] active:bg-[#FFB53D] my-5' onClick={handleCancel}>
                                            <p className='text-white font-semibold'>
                                                Cancelar
                                            </p>
                                        </button>
                                    </>
                                )
                            }
                        </div>
                        {
                            !creating && (
                                <button className='bg-[#FF6B6B] flex justify-center items-center w-[100px] min-h-[38px] rounded-lg red_shadow hover:bg-[#FF4F4F] active:bg-[#FF3A3A] my-5' onClick={handleDelete}>
                                    <p className='text-white font-semibold'>
                                        Eliminar
                                    </p>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEvent