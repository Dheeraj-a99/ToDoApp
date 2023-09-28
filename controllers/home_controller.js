const Todo = require('../models/todoitems.model');

const home = function(req,res){
  // return res.end('<h1> Express is up and running </h1>');
  return res.render('home',{
    title: "Todo App"
  })
}

const createTodo = async (req,res) => {
  //get data fro req and add it to the database
  try {
    const payload = {
      title: req.body.title,
      category: req.body.category,
      date: req.body.date
    }
    const createTodo = await Todo.create(payload);
    console.log(createTodo);
    return res.redirect('back');
  } catch (error) {
    console.log(error);
    return res.redirect('back');
  }
}

const getAllTodos = async (req,res) => {
  try {
    const todo = await Todo.find({});
    return res.render('home',{
      title: "Todo App",
      todoList: todo
    })
  } catch (error) {
    console.log(error);
    return res.redirect('back');
  }
}

const deleteTodo = async (req,res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    return res.redirect('back');
  } catch (error) {
    console.log(error);
    return res.redirect('back');
  }
}

module.exports = {
  home,
  createTodo,
  getAllTodos,
  deleteTodo
};