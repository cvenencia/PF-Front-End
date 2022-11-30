import { createContext, useState, useEffect } from "react"

const SearchContext = createContext()

function SearchProvider({ children }) {

    const [searchText, setSearchText] = useState("")
    const [datePrev, setDatePrev] = useState("")
    const [dateNext, setDateNext] = useState("")

    return (
        <SearchContext.Provider value={{ searchText, setSearchText, datePrev, dateNext, setDateNext, setDatePrev }}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchContext, SearchProvider }