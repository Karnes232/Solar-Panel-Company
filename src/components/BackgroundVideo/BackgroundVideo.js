import React from "react";

const BackgroundVideo = ({ videoUrl }) => {
  return (
    <>
      <video autoPlay loop muted id="backgroundVideo" className="brightness-75">
        <source src={videoUrl} type="video/mp4" />
      </video>
    </>
  );
};

export default BackgroundVideo;
