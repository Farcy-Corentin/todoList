import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {addTodoAction} from "../store/todosActions";

export function AddTodoForm() {
    const dispatch = useDispatch()
    const input = useRef(null)
    const error = ""

    const handleSubmit = e => {
        e.preventDefault()
        if (input.current.value === error) {
            input.current.placeholder = 'Aucune tâche'
            input.current.focus()
        } else {
            dispatch(addTodoAction(input.current.value))

            input.current.focus()
        }
    }

    return <form className='todo-form' onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder='tâche' ref={input}/>
            <button>ajouter</button>
        </div>
    </form>
}
