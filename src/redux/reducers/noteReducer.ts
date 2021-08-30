import { Note, NoteAction } from "../actions/noteActions";

export default function noteReducer(state: Note[] = [], action: NoteAction): Note[] {
  switch (action.type) {
  case "CREATE_NOTE":
    return [...state, { ...action.note }];
  default:
    return state;
  }
}