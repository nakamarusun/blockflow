import { Notes } from "./actionTypes";
import * as NoteAPI from "../../api/notesApi";

type DispatchThunk = (dispatch: Dispatch) => Promise<unknown>;

export function createNote(note: Note): NoteAction {
  return {
    type: Notes.CREATE,
    note
  };
}

function loadNotesSuccess(notes) {
  return {
    type: Notes.LOAD_COURSES_SUCCESS,
    notes
  }
}

export function loadNotes(): DispatchThunk {
  return function(dispatch: Dispatch) {
    return NoteAPI.getNotes().then((notes) => {
      dispatch(loadNotesSuccess(notes))
    }).catch(err => {throw err});
  }
}

export interface Note {
  title: string,
  content: string,
}

export interface NoteAction {
  type: string,
  note: Note
}