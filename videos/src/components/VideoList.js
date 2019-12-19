import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />; //passing videos
  });
  //props.videos - render the video
  return <div>{renderedList}</div>;
};

export default VideoList;
