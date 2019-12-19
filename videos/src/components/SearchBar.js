import React from "react";

class SearchBar extends React.Component {
  state = { term: "default" }; // term -> search term

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    //TODO: make sure to callback from parent component (APP)
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange} //callback function
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
