import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

// const App = () => {
// window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position) /* success callback */,
//     err => console.log(err) /* error callback */
//    );
//   return <div>Latitude: </div>;
// };

// class based component
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  //call once
  componentDidMount() {
    //only fetch once
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), //setState({key : value})}
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Loader message="Loading... please accept location request" />;
    }
  }
  // have to define render()
  render() {
    // use helper function
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
