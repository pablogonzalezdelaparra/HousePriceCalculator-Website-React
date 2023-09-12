import React, { Fragment } from "react";
import DashboardsStyle from "../styles/DashboardsStyle.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import LineGraph from "./LineGraph";

function DashboardsC() {
  const marks = [
    {
      value: 0,
      label: "$0",
    },
    {
      value: 20,
      label: "$20",
    },
    {
      value: 50,
      label: "$37",
    },
    {
      value: 100,
      label: "$100",
    },
  ];

  function valuetext(value) {
    return `$${value}`;
  }

  return (
    <Fragment>
      <div className="dashboards-main-container">
        <div className="header">
          <p className="title">¿Para qué me alcanza?</p>
          <Box sx={{ width: "100%" }}>
            <Slider
              aria-label="Rango de precios"
              defaultValue={20}
              getAriaValueText={valuetext}
              step={10}
              valueLabelDisplay="auto"
              marks={marks}
            />
          </Box>
        </div>
        <div className="dashboards-container">
            <div className="dashboards-item">
              <LineGraph />
            </div>
            <div className="dashboards-item">
              <LineGraph />
            </div>
            <div className="dashboards-item">
              <LineGraph />
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DashboardsC;
