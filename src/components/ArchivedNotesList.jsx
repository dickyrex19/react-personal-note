import React from "react";
import NoteList from "./NoteList";

export default function ArchivedNotesList({ notes, onDelete, onArchive }) {
  return (
    <div>
      <NoteList
        notes={notes.filter((note) => note.archived === true)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}
