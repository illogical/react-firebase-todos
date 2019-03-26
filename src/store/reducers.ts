import { combineReducers } from "redux";
import { FETCH_TODOS } from "./types";
import { StateType } from "typesafe-actions";

interface IAction {
  type: any;
  payload: any;
}

const todos = (state = [], action: IAction) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  todos
});

export type RootState = StateType<typeof rootReducer>;
