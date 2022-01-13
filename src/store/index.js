import {createStore, combineReducers} from "redux";
import { todoReducer } from "./todosReducer";
import {filterReducer} from "./filterReducer";

const store = createStore(
    combineReducers({
        todos: todoReducer,
        filter: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store



