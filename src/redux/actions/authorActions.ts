import { Notes } from "./actionTypes";
import * as NoteAPI from "../../api/notesApi";

type DispatchThunk = (dispatch: Dispatch) => Promise<unknown>;

function loadAuthorsSuccess(authors) {
  return {
    type: Notes.LOAD_AUTHOR_SUCCESS,
    authors
  }
}

export function loadAuthors(): DispatchThunk {
  return function(dispatch: Dispatch) {
    return NoteAPI.getAuthors().then((authors) => {
      dispatch(loadAuthorsSuccess(authors))
    }).catch(err => {throw err});
  }
}

export interface Authors {
  id: number,
  name: string,
}