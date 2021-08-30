export function createNote(note: Note): NoteAction {
  return {
    type: "CREATE_NOTE",
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