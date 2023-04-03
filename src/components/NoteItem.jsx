import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import { showFormattedDate } from "../utils";

export default function NoteItem({ note, onDelete, onArchive }) {
  return (
    <div className="border-solid shadow-inner shadow-zinc-50 p-4 bg-sky-700">
      <h3 className="text-2xl font-bold text-lime-400">{note.title}</h3>
      <span className="text-sm text-yellow-300">
        {showFormattedDate(note.createdAt)}
      </span>
      <p>{note.body}</p>
      <div className="flex justify-end p-2 mt-2 gap-4">
        <DeleteButton id={note.id} onDelete={onDelete} />
        {note.archived === false ? (
          <ArchiveButton
            label={"Arsip"}
            icon={"archive"}
            id={note.id}
            onArchive={onArchive}
          />
        ) : (
          <ArchiveButton
            label={"Pindahkan"}
            id={note.id}
            onArchive={onArchive}
          />
        )}
      </div>
    </div>
  );
}
