import React, {useEffect} from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchTodos } from "./store/reducers/ActionCreator";

export const App = () => {
  const dispatch = useAppDispatch()
  const { todos } = useAppSelector(store => store.todoReducer)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div className="App">
      {JSON.stringify(todos, null, 2)}
    </div>
  );
}
