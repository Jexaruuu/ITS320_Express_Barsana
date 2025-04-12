import express from 'express';
import { createTodo, fetchTodos, updateTodo, deleteTodo } from '../controller/todoController.js';

const router = express.Router();

router.post('/createTodo', createTodo);
router.get('/', fetchTodos);
router.put('/:id', updateTodo);   // Add PUT route for updating a todo
router.delete('/:id', deleteTodo); // Add DELETE route for deleting a todo

export default router;
