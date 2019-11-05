import React from "react";

class SearchBar extends React.Component {
  state = { term: " Hi " };

  // callback function
  onInputChange(event) {
    //get called someone change the text in searchBar
    console.log(event.target.value); //get value from user
  }

  //prevent undefined 'this' error
  onFormSubmit = event => {
    event.preventDefault(); //prevent from submit the form and refresh the page
    console.log(this.state.term); //undefined error8
  };

  render() {
    //controlled component
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }} //alternative event handler
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
