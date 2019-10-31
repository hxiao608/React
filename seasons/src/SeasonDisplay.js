import React from "react";

//configuration file
const seasonConfig = {
  sumemr: {
    text: "Lets hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it is chilly",
    iconName: "snowflake"
  }
};

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

  const { text, iconName } = seasonConfig[season]; // return {text, iconName}

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
