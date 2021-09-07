import { NoteAction } from "../actions/noteActions";
import { Notes } from "../actions/actionTypes";
import initialState from "./initialState";

export default function noteReducer(state: [] = initialState.authors, action: NoteAction): [] {
  switch (action.type) {
  case Notes.CREATE:
    return [...state, { ...action.note }];
  case Notes.LOAD_NOTES_SUCCESS:
    return action.notes
  default:
    return state;
  }
}