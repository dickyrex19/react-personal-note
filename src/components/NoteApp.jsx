import React, { Component } from "react";
import { getInitialData } from "../utils";
import ActiveNotesList from "./ActiveNotesList";
import ArchivedNotesList from "./ArchivedNotesList";
import NoteInput from "./NoteInput";
import SearchBar from "./SearchBar";
import Swal from "sweetalert2";

export default class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchText: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: "success",
      title: "Catatan ditambahkan",
    });
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: "Hapus catatan?",
      showCancelButton: true,
      confirmButtonColor: "#0369a1",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "Catatan berhasil dihapus",
        });
        this.setState((prevState) => {
          return {
            notes: prevState.notes.filter((note) => note.id !== id),
          };
        });
      }
    });
  }

  onArchiveHandler(id) {
    const getNote = this.state.notes.filter((note) => note.id === id)[0];
    const modifiedNote = { ...getNote, archived: !getNote.archived };
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: "success",
      title: "Catatan dipindahkan",
    });
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes.filter((note) => note.id !== id),
          modifiedNote,
        ],
      };
    });
  }

  onSearchHandler(searchText) {
    this.setState(() => {
      return { searchText };
    });
  }

  render() {
    const displayNote = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchText.toLowerCase())
    );
    return (
      <>
        <NoteInput addNote={this.onAddNoteHandler} />
        <SearchBar onSearch={this.onSearchHandler} />

        <h3 className="text-center mt-8 mb-2 text-xl">Catatan Aktif</h3>
        <ActiveNotesList
          notes={displayNote}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />

        <h3 className="text-center mt-8 mb-2 text-xl">Arsip Catatan</h3>
        <ArchivedNotesList
          notes={displayNote}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </>
    );
  }
}
