const Todo = require('./model');;

const data = [
  {
    name: 'Eat breakfast',
  },
  {
    name: 'Eat lunch',
  },
  {
    name: 'Eat dinner',
  },
  {
    name: 'Eat dessert',
  }, 
];

Todo 
  .sync({ force: false}) // force false leaves everything in db, true deletes everything in db
  .then(() => {
    Todo.bulkCreate(data)
      .then(() => console.log('Added data'));
  })