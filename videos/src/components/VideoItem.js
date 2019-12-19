import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  ); //print out the title
};

export default VideoItem;
