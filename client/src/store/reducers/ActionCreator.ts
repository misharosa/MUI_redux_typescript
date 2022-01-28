import { AppDispatch } from "../store";
import axios from "axios";
import { ITodo } from "../../type/type";
import { todoSlice } from "./todoSlice";

export const fetchTodos = () => async (dispatch : AppDispatch) => {
    try {
        dispatch(todoSlice.actions.todosFetching())
        const { data } = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
        dispatch(todoSlice.actions.todosFetchingSuccess(data))
    } catch ({ error }) {
        (typeof error === 'string') && dispatch(todoSlice.actions.todosFetchingError(error))
    }
}
