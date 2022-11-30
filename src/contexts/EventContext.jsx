import { createContext, useState, useEffect } from "react"

const EventContext = createContext()

function EventProvider({ children }) {

    const [event, setEvent] = useState(null)

    return (
        <EventContext.Provider value={{ event, setEvent }}>
            {children}
        </EventContext.Provider>
    )
}

export { EventContext, EventProvider }