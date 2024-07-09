import {createSlice} from '@reduxjs/toolkit';

let nextId = 6

export const todoSlice = createSlice(
    {
        name: 'todos',
        initialState: [
            {id:1, title:'Sprint 18'},
            {id:2, title:'Sprint 19'},
            {id:3, title:'Sprint 20'},
            {id:4, title:'Sprint 21'},
            {id:5, title:'Sprint 22'},
        ],
        reducers: {
            addTodo : (state,action) => {
                const newId = state.length > 0 ? state[state.length - 1].id + 1 : 1;
                const todo = {
                    id: newId,
                    title: action.payload.title
                };
                state.push(todo)
            },
            deleteTodo : (state, action) => {
                return state.filter((todo) => todo.id !== action.payload.id)
            }
        }
    }
)

export const {addTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer