import { combineReducers } from "redux";

//Reducer
const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05"
    },
    {
      title: "Smells like Teen Spirit",
      duration: "5:01"
    },
    {
      title: "Ceremony",
      duration: "4:39"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  //combine the reducers and export
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
