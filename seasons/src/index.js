import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// const App = () => {
// window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position) /* success callback */,
//     err => console.log(err) /* error callback */
//    );
//   return <div>Latitude: </div>;
// };

// class based component
class App extends React.Component {
  // first function to be called before anything else. Initialize state here
  constructor(props) {
    super(props);
    // initialize the state, the only time to direct assignment
    this.state = { lat: null, errorMessage: "" };
  }

  state = { lat: null, errorMessage: "" };

  //call once
  componentDidMount() {
    //only fetch once
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), //setState({key : value})}
      err => this.setState({ errorMessage: err.message })
    );
  }

  // have to define render()
  render() {
    //how tox use the state
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
