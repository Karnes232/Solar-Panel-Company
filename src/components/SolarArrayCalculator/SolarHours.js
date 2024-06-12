import React from "react";

const SolarHours = ({ solarHours, setSolarHours }) => {
  return (
    <div className="my-2">
      <div className="mb-2">Solar Hours per Day</div>
      <div className="bg-white rounded-lg flex justify-between">
        <input
          min="0"
          step=".01"
          value={solarHours}
          onChange={(e) => setSolarHours(e.target.value)}
          type="number"
          className="block py-2.5 px-0 w-1/2 text-base text-gray-900 bg-transparent  appearance-none focus:outline-none focus:ring-0 focus:border-black pl-5"
        />
        <div className="flex justify-end">
          <div className="text-gray-900 flex justify-center items-center pr-3">
            hrs. per day
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarHours;
