const Todo = require('../database/model')
const controller = {
  get: (req, res) => {
    // todo
    Todo.findAll({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(error => console.error(error));
  },
  post: (req, res) => {
    // todo
    // res.send('hello from post');
    const {name} = req.body;
    Todo.create({ name })
      .then(((data) => {
        res.status(201).send(data);
      }))
      .catch(error => console.error(error));
  },
  update: (req, res) => { // change url in postman to 127.0.0.1:3000/api/2 
                          // added 2 to api
    // todo
    // res.send('hello from update');
    const { name } = req.body
    const { id } = req.params;
    Todo.update({name}, {where: { id } })
      .then((data) => {
        console.log(data) // will either return 1 (success) or 0 (fail)
        if (data[0] === 1) {
          res.status(202).send(`Updated id ${id}with ${name}`);
        } else {
          res.status(202).send(`Could not update id ${id}`)
        }
      })
      .catch(error => console.error(error));

  },
  delete: (req, res) => {
    // todo
    // res.send('hello from delete');
    const { id } = req.params;
    Todo.destroy({ where: {id}}) // change url in postman to 127.0.0.1:3000/api/2 
    // added 2 to api
      .then((data) => {
        console.log(data); // data is zero and cannot send back data since u cant send back integers
        res.status(200).send(`Destroyed id ${id}`);
      })
      .catch(error => console.error(error));
  },
};

module.exports = controller;
