import { Note, NoteAction } from "../actions/noteActions";
import { Notes } from "../actions/actionTypes";

export default function noteReducer(state: Note[] = [], action: NoteAction): Note[] {
  switch (action.type) {
  case Notes.CREATE:
    return [...state, { ...action.note }];
  case Notes.LOAD_COURSES_SUCCESS:
    return action.notes
  default:
    return state;
  }
}