import { combineReducers } from "redux";
const songReducer = () => {
  return [
    { title: "noscrubs", duration: "4.05" },
    { title: "macarena", duration: "3.05" },
    { title: "i all statrs", duration: "2.35" },
    { title: "no love beauty", duration: "1.12" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
