import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import config from "../config";

const accessKey = config.access_key;
class App extends React.Component {
  s;
  onSearchSubmit(term) {
    // console.log(term);
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization: "Client-ID " + accessKey
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
