import catalogData from './catalog.js';

const usersStorage = JSON.parse(localStorage.getItem('users'));
const catalogStorage = JSON.parse(localStorage.getItem('catalog'));

if (!usersStorage) {
    console.log('No user data found. Creating dummy data...');
    const users = [
        {
            id: '6e200475-fe19-4c23-97a8-c5f5ab1a3f58',
            username: 'comprador1',
            password: '123',
            type: 'buyer',
        },
        {
            id: 'bbb693a0-4f1a-46c7-9e2f-ae028a3f6f36',
            username: 'comprador2',
            password: '456',
            type: 'buyer',
        },
        {
            id: '41438153-ed09-405e-8ddf-d48f593c00f1',
            username: 'vendedor1',
            password: 'abc',
            type: 'seller',
        },
        {
            id: '52663413-062c-4e40-853f-b857ed0ed22c',
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
