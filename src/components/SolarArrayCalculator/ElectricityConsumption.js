import React, { useState } from "react";

const ElectricityConsumption = ({ setDailyConsumption }) => {
  const [consumptionBy, setConsumptionBy] = useState("day");
  const [inputValue, setInputValue] = useState(0);

  const consumptionByChange = (e) => {
    if (e.target.value !== consumptionBy) {
      if (consumptionBy === "day" && e.target.value === "month") {
        let number = inputValue * 30.4;
        setInputValue(number.toFixed(2));
      }
      if (consumptionBy === "day" && e.target.value === "year") {
        let number = inputValue * 365.2;
        setInputValue(number.toFixed(2));
      }

      if (consumptionBy === "month" && e.target.value === "day") {
        let number = inputValue / 30.4;
        setInputValue(number.toFixed(2));
      }
      if (consumptionBy === "month" && e.target.value === "year") {
        let number = inputValue * 12;
        setInputValue(number.toFixed(2));
      }

      if (consumptionBy === "year" && e.target.value === "day") {
        let number = inputValue / 365.2;
        setInputValue(number.toFixed(2));
      }
      if (consumptionBy === "year" && e.target.value === "month") {
        let number = inputValue / 12;
        setInputValue(number.toFixed(2));
      }
    }
    setConsumptionBy(e.target.value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (consumptionBy === "day") {
      setDailyConsumption(e.target.value);
    }
    if (consumptionBy === "month") {
      let number = e.target.value / 30.4;
      setDailyConsumption(number.toFixed(2));
    }
    if (consumptionBy === "year") {
      let number = e.target.value / 365.2;
      setDailyConsumption(number.toFixed(2));
    }
  };
  return (
    <div>
      <div className="mb-2">Electricity Consumption</div>
      <div className="bg-white rounded-lg flex justify-between">
        <input
          min="0"
          step=".01"
          value={inputValue}
          onChange={handleChange}
          type="number"
          className="block py-2.5 px-0 w-1/2 text-base text-gray-900 bg-transparent  appearance-none focus:outline-none focus:ring-0 focus:border-black pl-5"
        />
        <div className="flex justify-end">
          <div className="text-gray-900 flex justify-center items-center">
            kWh /{" "}
          </div>
          <select
            className="bg-transparent text-gray-900 flex justify-center items-center text-center"
            onChange={consumptionByChange}
          >
            <option value="day">Day</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ElectricityConsumption;
