import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface TodoState {
    todos: {
        text: string
        isCompleted: boolean
    }[]
}

// Define the initial state using that type
const initialState: TodoState = {
    todos: [
        {
            text: 'Learn about actions',
            isCompleted: true
        }
    ]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action: {
            payload: {
                text: string
                isCompleted: boolean
            }
        }) => {
            state.todos.push(action.payload)
        },
        edit: (state, action: {
            payload: {
                index: number
                text: string
            }
        }) => {
            state.todos[action.payload.index].text = action.payload.text
        },
        toggleComplete: (state, action: {
            payload: {
                index: number
            }
        }) => {
            state.todos[action.payload.index].isCompleted = !state.todos[action.payload.index].isCompleted
        },
        delete: (state, action: {
            payload: {
                index: number
            }
        }) => {
            state.todos.splice(action.payload.index, 1)
        }
    }
})

// Action creators are generated for each case reducer function
export const { add, edit, toggleComplete, delete: deleteTodo } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todo.todos

export default todoSlice.reducer