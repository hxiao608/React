import React from "react";

class SearchBar extends React.Component {
  state = { term: " Hi " };

  // callback function
  onInputChange(event) {
    //get called someone change the text in searchBar
    console.log(event.target.value); //get value from user
  }

  render() {
    //controlled component
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => {
                console.log(e.target.value);
                this.setState({ term: e.target.value.toUpperCase() });
              }} //alternative event handler
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
