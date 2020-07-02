
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'steve', password: '$2y$14$s2Cnj9zAajg3teYjeG9YceY4pKUV7jxKkmxYvAf3IJdLWatqsirH6'},
       
      ]);
    })
    
    .then(() => knex('items'))
    .then(function () {
      return knex('items').insert([
        {
          id: 1,
          title: 'Oatmeal',
          category: 'breakfast',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          itemImage:
            'https://images.unsplash.com/photo-1587678711204-ca6d3d2f1f3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          user_id: 1,
        },
        {
          id: 2,
          title: 'Pancakes',
          category: 'breakfast',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          itemImage:
            'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          user_id: 1,
        },
        {
          id: 3,
          title: 'Salad',
          category: 'lunch',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          itemImage:
            'https://images.unsplash.com/photo-1575282247585-d56c93eb0d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
          user_id: 1,
        },
        {
          id: 4,
          title: 'Burgers',
          category: 'lunch',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          itemImage:
            'https://images.unsplash.com/photo-1567672545032-54d7db6911c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          user_id: 1,
        },
        {
          id: 5,
          title: 'Lobster',
          category: 'dinner',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          itemImage:
            'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1341&q=80',
          user_id: 1,
        },
        {
          id: 6,
          title: 'Steak',
          category: 'dinner',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          itemImage:
            'https://images.unsplash.com/photo-1579366948929-444eb79881eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
          user_id: 1,
        },
      ])
    })
};
