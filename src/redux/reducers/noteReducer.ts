import { Note, NoteAction } from "../actions/noteActions";
import { Notes } from "../actions/actionTypes";

export default function noteReducer(state: Note[] = [], action: NoteAction): Note[] {
  switch (action.type) {
  case Notes.CREATE:
    return [...state, { ...action.note }];
  default:
    return state;
  }
}