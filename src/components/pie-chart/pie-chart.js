import React, { useState } from "react";

import { ResponsivePie } from "@nivo/pie";
import { prop } from "ramda";
import allData from "./statistic-data";
import SelectStatistic from "./select-statistic";

import "./pie-chart.css";

const PieChart = ({ records }) => {
  const [statisticData, setStatisticData] = useState("gender");

  return (
    records.length > 0 && (
      <div className="pie-chart__container">
        <SelectStatistic
          setStatisticData={setStatisticData}
          statisticData={statisticData}
        />
        <ResponsivePie
          data={prop(statisticData, allData(records))}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ datum: "data.color" }}
          borderColor={{ from: "color", modifiers: [["darker", "3"]] }}
          radialLabelsLinkOffset={10}
          radialLabelsLinkDiagonalLength={6}
          radialLabelsTextColor="#333333"
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    )
  );
};

export default PieChart;
