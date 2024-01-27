import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo : [
        {
            id : 0,
            text : "This is the text",
            completed : false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    todoCompleted : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;