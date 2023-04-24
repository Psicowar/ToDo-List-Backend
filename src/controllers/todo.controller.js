const TodoModel = require('../models/todo.model')
const UserModel = require('../models/user.model')

const addTodo = async (req, res) => {
  const { text } = req.body
  const author = req.auth?.sub

  try {
    const newTodo = await TodoModel.create({ text, author })
    res.status(201).send({ data: newTodo })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}


const getUsersTodos = async (req, res) => {
  const author = req.auth?.sub

  try {
    const userTodos = await TodoModel.find({ author })
    res.status(200).send({ data: userTodos })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}


const deleteAllTodos = async (req, res) => {
  const author = req.auth?.sub

  try {
    const DeleteAllTodos = await TodoModel.deleteMany({ author })
    res.status(200).json(DeleteAllTodos)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const deleteOneTodo = async (req, res) => {
  const { taskID } = req.params
  try {
    const deleteTodoTask = await TodoModel.findByIdAndDelete({ _id: taskID });
    res.status(200).json(deleteTodoTask)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}



const updateTodoText = async (req, res) => {
  const { text } = req.body
  const { taskID } = req.params
  console.log(text);
  try {
    const updateText = await TodoModel.findByIdAndUpdate({ _id: taskID },
      {
        $set:
        {
          text
        }
      },
      { new: true, runValidators: true }
    );

    res.status(200).json(updateText);
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}



module.exports = {
  addTodo,
  getUsersTodos,
  deleteOneTodo,
  deleteAllTodos,
  updateTodoText
}