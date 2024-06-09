import React from "react";

const IndividualIcon = ({ icon, title }) => {
  return (
    <div className="!z-50 relative flex flex-col justify-center items-center bg-transparent">
      <div className="text-white text-4xl xl:text-5xl">{icon}</div>
      <div className="text-white text-sm xl:text-lg font-lato w-24 lg:w-28 text-center">
        {title}
      </div>
    </div>
  );
};

export default IndividualIcon;
