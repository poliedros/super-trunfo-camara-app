import React from "react";
import { Radar } from "@ant-design/charts";
import { Coordinate } from "../../interfaces/Coordinate";

interface PoliticianRadarProps {
  data: Coordinate[];
}

export const PoliticianRadar = ({ data }: PoliticianRadarProps) => {
  const config = {
    data: data.map((d) => ({ ...d, star: d.star })),
    xField: "name",
    yField: "star",
    meta: {
      star: {
        alias: "Pontuação",
        min: 0,
        nice: true,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: "rgba(0, 0, 0, 0.25)",
      },
    },
    point: {},
    area: {},
  };
  return <Radar {...config} />;
};
