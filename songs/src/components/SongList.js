import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    // map the list of songs and map to jsx
    return this.props.songs.map(song => {
      //return the array
      return (
        // return the jsx for the mapping function
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // this.props === {songs: state.songs}\
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//get data from the redux store
const mapStateToProps = state => {
  //every time state change, this method get called
  // console.log(state);
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  //import the action creator to update the redux store --- redux is not MAGIC!!!
  { selectSong }
)(SongList); //connect the songlist and state
