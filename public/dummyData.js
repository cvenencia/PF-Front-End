const usersStorage = JSON.parse(localStorage.getItem('users'));
const catalogStorage = JSON.parse(localStorage.getItem('catalog'));

if (!usersStorage) {
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
    localStorage.setItem('catalog', '[]');
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(catalog =>
            localStorage.setItem('catalog', JSON.stringify(catalog))
        );
}
