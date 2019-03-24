import { FETCH_TODOS } from "./types";
import { ITodo } from "../models";
import { getFirebaseRef } from "./configs/firebase";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { snapshotToArray } from "../utiliites/snapshotToArray";

const todosRef = getFirebaseRef("todos");

export const addTodo = (newTodo: ITodo) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  const newTodoRef = todosRef.push();

  newTodoRef.set({ ...newTodo, id: newTodoRef.key });
};

export const completeTodo = (
  completeTodoId: string,
  isComplete: boolean = true
) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  todosRef.child(completeTodoId.toString()).update({ completed: isComplete });
};

export const fetchTodos = () => async (dispatch: any) => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot ? snapshotToArray(snapshot) : []
    });
  });
};
