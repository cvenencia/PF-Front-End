import { getLocalStorage, setLocalStorage } from './util';
import { v4 as uuid } from 'uuid';

const users = getLocalStorage('users');

export function login(username, password) {
    return users.find(
        user => user.username === username && user.password === password
    );
}

export function register(username, password, type) {
    if (!username || !password || !type)
        return { ok: false, message: 'Insufficient data' };

    if (users.length > 0 && userExists(username))
        return { ok: false, message: 'User already exists' };

    const newUser = {
        id: uuid(),
        username,
        password,
        type,
    };
    setLocalStorage('users', [...users, newUser]);
    return { ok: true };
}

function userExists(username) {
    return !!users.find(user => user.username === username);
}

export function isSeller(id) {
    const user = users.find(user => user.id === id);
    return !!(user?.type === 'seller');
}
