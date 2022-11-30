import {
    getLocalStorage,
    setLocalStorage,
    nameOfMonth,
    formatDay,
} from './util';
import { isSeller } from './user';
import { v4 as uuid } from 'uuid';

let catalog = getLocalStorage('catalog');
if (!catalog) {
    updateCatalog([]);
}

const MAX_PER_PAGE = 5;

function updateCatalog(newCatalog) {
    catalog = newCatalog;
    setLocalStorage('catalog', catalog);
}

export function getCatalog() {
    return catalog;
}

export function getEvent(id) {
    return catalog.find(event => event.id === id);
}

export function createEvent(userId, title, date, location, imageURL) {
    if (!userId) return { ok: false, message: 'User not authenticated' };

    if (!isSeller(userId))
        return { ok: false, message: 'User is not a seller' };

    if (!title || !date || !location || !imageURL) {
        return {
            ok: false,
            message: 'Insufficient data',
        };
    }

    console.log('Creating event', title, date, location, imageURL);

    const newEvent = {
        id: uuid(),
        title,
        location,
        image: imageURL,
        month: nameOfMonth(date.getMonth()),
        numberDay: formatDay(date.getDate()),
        year: date.getFullYear().toString(),
    };

    updateCatalog([...catalog, newEvent]);
    return {
        ok: true,
    };
}

export function deleteEvent(userId, id) {
    if (userId == null) return { ok: false, message: 'User not authenticated' };

    if (!isSeller(userId))
        return { ok: false, message: 'User is not a seller' };

    updateCatalog(catalog.filter(event => event.id !== id));
    return { ok: true };
}

export function updateEvent(userId, id, data) {
    if (userId == null) return { ok: false, message: 'User not authenticated' };

    if (!isSeller(userId))
        return { ok: false, message: 'User is not a seller' };

    const index = catalog.findIndex(event => event.id === id);
    if (index === -1) return { ok: false, message: 'Event does not exist' };

    catalog[index] = {
        ...catalog[index],
        ...data,
    };
    updateCatalog(catalog);
    return { ok: true };
}
