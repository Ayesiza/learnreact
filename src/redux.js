import { createStore } from "redux";
import uuid from "uuid/v8";

const initialState = {
  todos: [
    {
      id: uuid(),
      name: "goto school",
      complete: false,
    },
    {
      id: uuid(),
      name: "go for lunch",
      complete: true,
    },
  ],
};
export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
} 

export const addTodoAction= (todo) => ({
    type:'ADD_TODO',
    payload:todo
});

export const toggleTodoAction = todoId => ({
type:'TOGGLE_TODO',
payload:todoId
});

export const deleteTodoAction = todoId => ({
    type:'DELETE_TODO',
    payload:todoId
})

