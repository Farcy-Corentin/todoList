import {ADD_TODO_ACTION, DELETE_TODO_ACTION, UPDATE_TODO_ACTION} from "./todosReducer";
import { v4 as uuidv4 } from 'uuid';


export const toggleTodoAction = (todo) => ({
    type: UPDATE_TODO_ACTION,
    payload: {...todo, completed: !todo.completed}
})

export const deleteTodoAction = (todo) => ({
    type: DELETE_TODO_ACTION,
    payload: todo.id
})

export const addTodoAction = (title) => ({
  type: ADD_TODO_ACTION,
    payload: {id: uuidv4(), title: title}
})
