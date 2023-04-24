const todoRoutes = require("express").Router();
const { addTodo, getUsersTodos, deleteOneTodo, deleteAllTodos, updateTodoText } = require("../controllers/todo.controller");
const { checkJwt } = require("../middleware/auth.middleware");


todoRoutes
    .post("/create", checkJwt, addTodo)
    .get("/", checkJwt, getUsersTodos)

    .delete("/deleteAll", checkJwt, deleteAllTodos)
    .delete("/deleteOne/:taskID", checkJwt, deleteOneTodo)
    .patch("/update/:taskID", checkJwt, updateTodoText)

module.exports = todoRoutes 