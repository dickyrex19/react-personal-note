import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete, onArchive }) {
  return (
    <>
      {notes.length !== 0 ? (
        <div className="grid gap-x-6 gap-y-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {notes.map((note, i) => (
            <NoteItem
              key={i}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))}
        </div>
      ) : (
        <h3 className="text-center">Tidak ada catatan</h3>
      )}
    </>
  );
}
