import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos : [
        {
            id: 1,
            text: "Hello World",
            completed: false,
        }
    ]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            state.todos = state.todos.map((todo) => todo.id === id ? {...todo, text: text} : todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        todoCompleted: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
        },
    }
})

export const {addTodo, updateTodo, deleteTodo, todoCompleted} = todoSlice.actions

export default todoSlice.reducer 