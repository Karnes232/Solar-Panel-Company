import React from "react";

const PanelAmount = ({ panelCount }) => {
  return (
    <div className="my-2">
      <div className="mb-2">Number of Panels Needed</div>
      <div className="bg-white rounded-lg flex justify-between">
        <input
          min="0"
          value={panelCount}
          readOnly
          type="number"
          className="block py-2.5 px-0 w-1/2 text-base text-gray-900 bg-transparent  appearance-none focus:outline-none focus:ring-0 focus:border-black pl-5"
        />
        <div className="flex justify-end">
          <div className="text-gray-900 flex justify-center items-center pr-3">
            panels
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelAmount;
