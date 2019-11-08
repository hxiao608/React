import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [] }; //default an empty array

  onSearchSubmit = async term => {
    // console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onUserSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
