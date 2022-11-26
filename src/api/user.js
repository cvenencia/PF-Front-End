import { getLocalStorage } from './util';

const users = getLocalStorage('users');

export function login(username, password) {
    return users.find(
        user => user.username === username && user.password === password
    );
}

export function isSeller(id) {
    const user = users.find(user => user.id === id);
    return !!(user?.type === 'seller');
}
