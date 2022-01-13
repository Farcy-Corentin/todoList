import {createSelector} from "reselect";
import {filterSelector} from "./filterSelector";

export const todosSelector = ({todos}) => todos

export const filteredTodosSelector = createSelector(
    todosSelector,
    filterSelector,
    (todos, filter) => {
        if (filter === null) {
            return todos
        }
        return todos.filter(todo => todo.completed === filter)
    }
)
