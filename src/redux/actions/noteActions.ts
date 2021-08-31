import { Notes } from "./actionTypes";

export function createNote(note: Note): NoteAction {
  return {
    type: Notes.CREATE,
    note
  };
}

export interface Note {
  title: string,
  content: string,
}

export interface NoteAction {
  type: string,
  note: Note
}