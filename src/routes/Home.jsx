import React from 'react'
import Banner from '../components/catalog/Banner'
import Searcher from '../components/catalog/Searcher'
import Separator from '../components/catalog/Separator'
import Event from './Event'

function Home() {
    return (
        <>
            <Banner />
            <Separator />
            <Searcher />
        </>
    )
}

export default Home