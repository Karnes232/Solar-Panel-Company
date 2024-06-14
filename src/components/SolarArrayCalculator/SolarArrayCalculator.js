import React, { useState } from "react";
import ElectricityConsumption from "./ElectricityConsumption";
import SolarHours from "./SolarHours";
import BillOffset from "./BillOffset";
import EnvironmentalFactor from "./EnvironmentalFactor";
import SizeEstimate from "./SizeEstimate";
import PanelOutput from "./PanelOutput";
import PanelAmount from "./PanelAmount";

const SolarArrayCalculator = () => {
  const [dailyConsumption, setDailyConsumption] = useState(0);
  const [solarHours, setSolarHours] = useState(4.4);
  const [billOffset, setBillOffset] = useState(100);
  const [environmentalFactor, setEnvironmentalFactor] = useState(80);
  const [sizeEstimate, setSizeEstimate] = useState("");
  const [panelOutput, setPanelOutput] = useState(585);
  const [panelCount, setPanelCount] = useState(0);
  const calculateSize = () => {
    let offSetPercent = billOffset / 100;
    let environmentalFactorPercent = environmentalFactor / 100;
    let size =
      ((dailyConsumption / solarHours) * offSetPercent) /
      environmentalFactorPercent;
    setSizeEstimate(size.toFixed(2));
    let panels = (size * 1000) / panelOutput;
    setPanelCount(panels.toFixed(0));
  };

  return (
    <div className="text-white flex flex-col items-center justify-center max-w-5xl lg:p-2 xl:mx-auto ">
      <div className="max-w-lg min-w-[20rem] my-5 mx-2 rounded-lg p-5 overflow-hidden shadow-lg bg-[#393c47]">
        <div className="text-center pb-3 text-3xl">Solar Panels Calculator</div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col w-60">
            <ElectricityConsumption setDailyConsumption={setDailyConsumption} />
            <SolarHours solarHours={solarHours} setSolarHours={setSolarHours} />
            <BillOffset billOffset={billOffset} setBillOffset={setBillOffset} />
            <EnvironmentalFactor
              environmentalFactor={environmentalFactor}
              setEnvironmentalFactor={setEnvironmentalFactor}
            />
          </div>
          <div className="flex flex-col w-60">
            <SizeEstimate sizeKW={sizeEstimate} />
            <PanelOutput
              panelOutput={panelOutput}
              setPanelOutput={setPanelOutput}
            />
            <PanelAmount panelCount={panelCount} />
          </div>
        </div>

        <button
          className="mt-5 bg-white hover:bg-gray-100 text-[#393c47] font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={calculateSize}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default SolarArrayCalculator;
