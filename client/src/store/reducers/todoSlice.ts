import {ITodo, TodoState} from "../../type/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: '',
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todosFetching (state) {
            state.isLoading = true;
        },
        todosFetchingSuccess (state, action:PayloadAction<ITodo[]>) {
            state.isLoading = false;
            state.error = '';
            state.todos = action.payload
        },
        todosFetchingError (state: TodoState, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default todoSlice.reducer

