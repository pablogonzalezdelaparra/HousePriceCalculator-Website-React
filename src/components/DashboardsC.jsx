import React, { Fragment, useState, useEffect } from "react";
import DashboardsStyle from "../styles/DashboardsStyle.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import LineGraph from "./LineGraph";
import ColumnGraph from "./ColumnGraph";
import Papa from "papaparse";
import PieGraph from "./PieGraph";

function DashboardsC() {
  const [value, setValue] = useState([1, 100]);
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [msZoningData, setMsZoningData] = useState([]);
  const [overallCondData, setOverallCondData] = useState([]);
  const [yearBuiltData, setYearBuiltData] = useState([]);

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
    getAllDatas();
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

  const getDashboardsData = (keyName) => {
    const dashboardsData = filteredData.map((data) => {
      return data[keyName];
    });
    const dashboardsDataObject = dashboardsData.reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] += 1;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
    const dashboardsDataArray = Object.keys(dashboardsDataObject).map((key) => {
      return {
        name: key,
        value: dashboardsDataObject[key],
      };
    });
    return dashboardsDataArray;
  };

  const getMsZoningData = () => {
    const msZoningData = getDashboardsData("MSZoning");
    msZoningData.forEach((data) => {
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
    setMsZoningData(msZoningData);
  };

  const getOverallCondData = () => {
    const overallCondData = getDashboardsData("OverallCond");
    overallCondData.forEach((data) => {
      if (data.name === "1" || data.name === "2" || data.name === "3") {
        data.name = "Malo";
      } else if (data.name === "4" || data.name === "5" || data.name === "6") {
        data.name = "Regular";
      } else if (
        data.name === "7" ||
        data.name === "8" ||
        data.name === "9" ||
        data.name === "10"
      ) {
        data.name = "Excelente";
      }
    });
    const overallCondDataObject = overallCondData.reduce((acc, curr) => {
      if (acc[curr.name]) {
        acc[curr.name] += curr.value;
      } else {
        acc[curr.name] = curr.value;
      }
      return acc;
    }, {});
    const overallCondDataArray = Object.keys(overallCondDataObject).map(
      (key) => {
        return {
          name: key,
          value: overallCondDataObject[key],
        };
      }
    );
    setOverallCondData(overallCondDataArray);
  };

  const getYearBuiltData = () => {
    const yearBuiltData = getDashboardsData("YearBuilt");
    yearBuiltData.splice(15, yearBuiltData.length - 15);
    setYearBuiltData(yearBuiltData);
  };

  const getAllDatas = () => {
    getMsZoningData();
    getOverallCondData();
    getYearBuiltData();
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
            <ColumnGraph
              data={msZoningData}
              xField={"name"}
              yField={"value"}
            />
          </div>
          <div className="dashboards-item">
            <PieGraph data={overallCondData} xField={"name"} yField={"value"} />
          </div>
          <div className="dashboards-item">
            <LineGraph data={yearBuiltData} xField={"name"} yField={"value"} />
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
