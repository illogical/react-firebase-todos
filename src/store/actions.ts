import { FETCH_TODOS } from "./types";
import { ITodo } from "../models";
import { todosRef } from "./configs/firebase";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { snapshotToArray } from "../utiliites/snapshotToArray";

export const addTodo = (newTodo: ITodo) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  const newTodoRef = todosRef.push();

  newTodoRef.set({ ...newTodo, id: newTodoRef.key });
};

export const completeTodo = (completeTodoId: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  //todosRef.child(completeTodoId.toString()).remove();
  todosRef.child(completeTodoId.toString()).update({ completed: true });
};

export const fetchTodos = () => async (dispatch: any) => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot ? snapshotToArray(snapshot) : []
    });
  });
};

//export const fetchTodos = () => todosRef.once("value");
