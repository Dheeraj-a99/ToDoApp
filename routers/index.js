const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.post('/createTodo', homeController.createTodo);
router.get('/getAllTodos', homeController.getAllTodos);
router.get('/delete-todo/:id', homeController.deleteTodo);

module.exports = router;