import { createContext, useState, useEffect } from 'react';
import { setLocalStorage, getLocalStorage } from '../api/util';

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    function logout() {
        localStorage.removeItem('currentUser');
        setUser(null);
    }

    useEffect(() => {
        user != null && setLocalStorage('currentUser', user);
    }, [user]);

    useEffect(() => {
        setUser(getLocalStorage('currentUser') || null);
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };
