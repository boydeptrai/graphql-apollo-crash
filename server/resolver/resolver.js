const resolvers ={
    Query: {
        books: () => [
            {
                id: 1,
                name: 'De Men Phieu Luu ky',
                genre: 'Adventure'
            },
            {
                id: 2,
                name: 'Lam Giau Khong kho',
                genre: 'Education'
            }
        ]
    }
}

module.exports = resolvers