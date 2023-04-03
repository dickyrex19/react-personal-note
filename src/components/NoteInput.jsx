import React, { Component } from "react";

export default class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxLength: 50,
      charLeft: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    const title = e.target.value;
    const charLeft = this.state.maxLength - title.length;
    this.setState({ title, charLeft });
  }

  onBodyChangeEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);
    this.state.title = "";
    this.state.body = "";
    this.state.charLeft = 50;
  }
  render() {
    return (
      <div>
        <div className="grid grid-flow-row auto-rows-max">
          <div className="flex justify-between">
            <h1>Tambah Catatan Baru</h1>
            <h1>
              Sisa karakter: <span>{this.state.charLeft}</span>
            </h1>
          </div>
        </div>
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Masukkan judul"
            required
            className="w-full px-4 py-1 my-2"
            maxLength={50}
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            required
            placeholder="Detail Catatan"
            className="w-full p-4"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <button className="bg-amber-700 w-full border p-2 text-xl">
            Tambah Catatan
          </button>
        </form>
      </div>
    );
  }
}
