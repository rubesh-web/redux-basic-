import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title}>
          <button onClick={() => this.props.selectSong(song)}>SELECT</button>
          <h3>{song.title}</h3>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.songs);
    // console.log(this.props);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
