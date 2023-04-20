const todoRoutes = require("express").Router();
const { addTodo, getAllTodo } = require("../controllers/todo.controller");


todoRoutes.post("/create",  addTodo);
// todoRoutes.get("/:id", getAllTodo);

module.exports = todoRoutes