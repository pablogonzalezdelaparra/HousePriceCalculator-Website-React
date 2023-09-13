import React, { Fragment, useState, useEffect } from "react";
import DashboardsStyle from "../styles/DashboardsStyle.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import LineGraph from "./LineGraph";
import ColumnGraph from "./ColumnGraph";
import Papa from "papaparse";

function DashboardsC() {
  const [value, setValue] = useState([1, 100]);
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [msZoningData, setMsZoningData] = useState([]);

  const marks = [
    {
      value: 0,
      label: "35,000$",
    },
    {
      value: 20,
      label: "75,000$",
    },
    {
      value: 50,
      label: "150,000$",
    },
    {
      value: 80,
      label: "600,000$",
    },
    {
      value: 100,
      label: "750,000$",
    },
  ];

  useEffect(() => {
    readCsv();
  }, []);

  useEffect(() => {
    if (csvData.length > 0) {
      filterDataFromPrice(value);
    }
  }, [csvData, value]);

  useEffect(() => {
    getMsZoningData();
  }, [filteredData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const readCsv = () => {
    const csvFilePath = require("../assets/filtrado.csv");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: function (results) {
        setCsvData(results.data);
      },
    });
  };

  const filterDataFromPrice = (prices) => {
    let valueRanges = value.sort((a, b) => a - b);
    valueRanges = valueRanges.map((value) => {
      return Math.round((value * 715000) / 100);
    });
    const filteredData = csvData.filter((data) => {
      return (
        data.SalePrice >= valueRanges[0] && data.SalePrice <= valueRanges[1]
      );
    });
    setFilteredData(filteredData);
  };

  const getMsZoningData = () => {
    const msZoningData = filteredData.map((data) => {
      return data.MSZoning;
    });
    const msZoningDataObject = msZoningData.reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] += 1;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
    const msZoningDataArray = Object.keys(msZoningDataObject).map((key) => {
      return {
        name: key,
        value: msZoningDataObject[key],
      };
    });
    msZoningDataArray.forEach((data) => {
      if (data.name === "Residencial Baja Densidad") {
        data.name = "Baja";
      } else if (data.name === "Residencial Densidad Media") {
        data.name = "Media";
      } else if (data.name === "Residencial Pueblo Flotante") {
        data.name = "Pueblo";
      } else if (data.name === "Residencial Alta Densidad") {
        data.name = "Alta";
      }
    });
    console.log(msZoningDataArray);
    setMsZoningData(msZoningDataArray);
  };

  return (
    <Fragment>
      <div className="dashboards-main-container">
        <div className="header">
          <p className="title">¿Para qué me alcanza?</p>
          <Box sx={{ width: "100%" }}>
            <Slider
              value={value}
              onChange={handleChange}
              marks={marks}
              aria-labelledby="input-slider"
            />
          </Box>
        </div>
        <div className="dashboards-container">
          <div className="dashboards-item">
            <ColumnGraph datos={msZoningData} xField={"name"} yField={"value"} />
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
