import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import {TodoListStore} from "./components/TodoList";
import {TodoFilterStore} from "./components/TodoFilter";
import {AddTodoForm} from "./components/AddTodoForm";


function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <header className="App-header">
                  <h1>Qu'allez vous faire aujourd'hui?</h1>
                  <TodoFilterStore />
                  <AddTodoForm />
                  <div className="todo-list">
                      <TodoListStore />
                  </div>
              </header>
          </div>
      </Provider>
  );
}

export default App;
