import catalogData from './catalog.js';

const usersStorage = JSON.parse(localStorage.getItem('users'));
const catalogStorage = JSON.parse(localStorage.getItem('catalog'));

if (!usersStorage) {
    console.log('No user data found. Creating dummy data...');
    const users = [
        {
            id: 1,
            username: 'comprador1',
            password: '123',
            type: 'buyer',
        },
        {
            id: 2,
            username: 'comprador2',
            password: '456',
            type: 'buyer',
        },
        {
            id: 3,
            username: 'vendedor1',
            password: 'abc',
            type: 'seller',
        },
        {
            id: 4,
            username: 'vendedor2',
            password: 'def',
            type: 'buyer',
        },
    ];

    localStorage.setItem('users', JSON.stringify(users));
}

if (!catalogStorage) {
    console.log('No catalog data found. Creating dummy data...');
    const filteredCatalog = catalogData.map(elem => {
        return {
            id: elem.eventId,
            title: elem.event,
            day: elem.day,
            month: elem.month,
            numberDay: elem.numberDay,
            year: elem.year,
            location: elem.location,
            image: elem.imageHome,
        };
    });

    localStorage.setItem('catalog', JSON.stringify(filteredCatalog));
}
