import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filteredTodosSelector} from "../store/todosSelector";
import {deleteTodoAction, toggleTodoAction} from "../store/todosActions";
import {BiTrashAlt, BiCheck} from "../react-icons/react-icons-proxy";

function TodoItem({todo, onToggle, onDelete}) {
    return (
        <div className={todo.completed ? "todo-item complete" : "todo-item"} onClick={() =>
            onToggle(todo)}>
            {todo.completed && <BiCheck className="check-icon"/>}
            {todo.title}
            <BiTrashAlt className="delete-icon" onClick={() => onDelete(todo)}/>
        </div>
    );
}

export function TodoList({todos, onToggle, onDelete}) {
    return (
        <div className='todo-list'>
            {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} key={todo.id} onDelete={onDelete}/>)}
        </div>
    )
}

export function TodoListStore() {
    const todos = useSelector(filteredTodosSelector)
    const dispatch = useDispatch()
    const onToggle = useCallback(todo => {
        dispatch(toggleTodoAction(todo))
    }, [])
    const onDelete = useCallback(todo => {
        dispatch(deleteTodoAction(todo))
    }, [])
    return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete}/>
}
