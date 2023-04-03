import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onSearchBarChange = this.onSearchBarChange.bind(this);
  }

  onSearchBarChange(e) {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <div className="flex justify-end mt-6">
        <input
          type="text"
          placeholder="Cari catatan"
          className="p-3 w-1/3"
          onChange={this.onSearchBarChange}
        />
      </div>
    );
  }
}
