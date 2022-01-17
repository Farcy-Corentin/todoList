import {createStore, combineReducers} from "redux";
import { todoReducer } from "./todosReducer";
import {filterReducer} from "./filterReducer";

function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem('persistentState', serialisedState)
    } catch (e) {
        console.warn(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem('persistentState')
        if(serialisedState === null) return undefined
        return JSON.parse(serialisedState)
    } catch (e) {
        console.warn(e)
        return undefined
    }
}

const store = createStore(
    combineReducers({
        todos: todoReducer,
        filter: filterReducer
    }),
    loadFromLocalStorage(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store



