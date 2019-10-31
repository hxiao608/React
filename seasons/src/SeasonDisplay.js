import React from "react";

//function to determine what the season is (summer/winter)
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    //northern summer and southern winter
    return lat > 0 ? "summer" : "winter"; //ternary expression (true: norther, false: southern)
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  //props.lat passed by components as props
  const season = getSeason(props.lat, new Date().getMonth());
  const text = //determine the text displayed on the screen
    season === "winter" ? "Burr, it is chilly" : "Lets hit the beach";

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
