import React from "react";
import ReactDOM from "react-dom";

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

    //only fetch once
    window.navigator.geolocation.getCurrentPosition(
      //does not instantly occur when running constructor until some time in the future
      /*setState*/
      position => {
        this.setState({ lat: position.coords.latitude }); //setState({key : value})
        //don't use this.state.lat = position.coords.latitude
      },
      err => {
        this.setState({ errorMessage: err.message });
      } /* error callback */
    );
  }

  // have to define render()
  render() {
    //how tox use the state
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
