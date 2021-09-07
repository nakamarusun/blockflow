import { Notes } from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state: [] = initialState.authors, action: unknown) : [] {
  switch (action.type) {
  case Notes.LOAD_AUTHOR_SUCCESS:
    return action.authors;
  default:
    return state;
  }
}