import React, { useState } from "react";
import ElectricityConsumption from "./ElectricityConsumption";
import SolarHours from "./SolarHours";
import BillOffset from "./BillOffset";

const SolarArrayCalculator = () => {
  const [dailyConsumption, setDailyConsumption] = useState(0);
  const [solarHours, setSolarHours] = useState(4.4);
  const [billOffset, setBillOffset] = useState(80);
  console.log(solarHours);
  return (
    <div className="text-white flex flex-col items-center justify-center max-w-5xl lg:p-2 xl:mx-auto ">
      <div className="max-w-md min-w-[20rem] my-5 mx-2 rounded-lg p-2 overflow-hidden shadow-lg bg-slate-400">
        <div className="text-center py-3 text-lg">Solar Panels Calculator</div>
        <ElectricityConsumption setDailyConsumption={setDailyConsumption} />
        <SolarHours solarHours={solarHours} setSolarHours={setSolarHours} />
        <BillOffset billOffset={billOffset} setBillOffset={setBillOffset} />
      </div>
    </div>
  );
};

export default SolarArrayCalculator;
