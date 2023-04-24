const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
  text: {
    type: String,
    required: [true, 'The todo filed is required']
  },
  status: {
    type: String
  },
  author: {
    type: String,
  } 

})

const TodoModel = model('Todo', TodoSchema)

module.exports = TodoModel