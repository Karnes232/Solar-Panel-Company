import React from "react";

const EnvironmentalFactor = ({
  environmentalFactor,
  setEnvironmentalFactor,
}) => {
  return (
    <div className="my-2">
      <div className="mb-2">Environmental Factor</div>
      <div className="bg-white rounded-lg flex justify-between">
        <input
          min="0"
          max="100"
          step="1"
          value={environmentalFactor}
          onChange={(e) => setEnvironmentalFactor(e.target.value)}
          type="number"
          className="block py-2.5 px-0 w-1/2 text-base text-gray-900 bg-transparent  appearance-none focus:outline-none focus:ring-0 focus:border-black pl-5"
        />
        <div className="flex justify-end">
          <div className="text-gray-900 flex justify-center items-center pr-3">
            %
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalFactor;
