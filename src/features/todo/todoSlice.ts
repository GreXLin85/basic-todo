import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface TodoState {
    todos: {
        text: string
        isCompleted: boolean
    }[]
    showMode: 'all' | 'completed' | 'not-completed'
}

// Define the initial state using that type
const initialState: TodoState = {
    todos: [
        {
            text: 'Learn about actions',
            isCompleted: true
        }
    ],
    showMode: 'all'
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
        },
        changeShowMode: (state, action: {
            payload: {
                showMode: 'all' | 'completed' | 'not-completed'
            }
        }) => {
            state.showMode = action.payload.showMode
        }            
    }
})

// Action creators are generated for each case reducer function
export const { add, edit, toggleComplete, delete: deleteTodo,changeShowMode } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todo.todos

export default todoSlice.reducer