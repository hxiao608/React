import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />; //passing videos
  });
  //props.videos - render the video
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
