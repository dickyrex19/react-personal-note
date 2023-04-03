import React from "react";
import NoteList from "./NoteList";

export default function ActiveNotesList({ notes, onDelete, onArchive }) {
  return (
    <div>
      <NoteList
        notes={notes.filter((note) => note.archived === false)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}
