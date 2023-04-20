const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
  wish_id: {
    type: String
  },
  text: {
    type: String,
    required: [true, 'The todo filed is required']
  },
  done: {
    type: Boolean
  },
  isEditing: {
    type: Boolean
  },
  status: {
    type: String
  }

})

const TodoModel = model('Todo', TodoSchema)

module.exports = TodoModel