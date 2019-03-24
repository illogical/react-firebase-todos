import { FETCH_TODOS } from "./types";
import { ITodo } from "../models";
import { todosRef } from "./configs/firebase";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export const addTodo = (newTodo: ITodo) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  todosRef.push().set(newTodo);
};

export const completeTodo = (completeTodoId: number) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  todosRef.child(completeTodoId.toString()).remove();
};

export const fetchTodos = () => async (dispatch: any) => {
  todosRef.once("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot ? snapshot.val() : []
    });
  });
};

//export const fetchTodos = () => todosRef.once("value");
