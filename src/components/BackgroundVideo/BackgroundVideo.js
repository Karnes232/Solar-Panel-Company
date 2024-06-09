import React from "react";

const BackgroundVideo = ({ videoUrl }) => {
  return (
    <>
      <video autoPlay loop muted playsInline id="backgroundVideo" className="brightness-75 block">
        <source src={videoUrl} type="video/mp4"/>
      </video>
    </>
  );
};

export default BackgroundVideo;
